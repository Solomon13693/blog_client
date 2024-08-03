'use client'
import React, { useEffect, useState } from 'react'
import CustomInput from '@/components/FormElements/CustomInput'
import { Form, Formik } from 'formik'
import Button from '@/components/dashboard/ui/buttons/Button'
import CustomSelect from '@/components/FormElements/CustomSelect'
import FileUpload from '@/components/dashboard/FileUpload'
import toast from 'react-hot-toast'
import { getErrorMessage } from '@/utils/errorUtils'
import { EachElement } from '@/utils/Each'
import { postSchema } from '@/utils/schema'
import { useRouter } from 'next/navigation'
import "react-quill/dist/quill.bubble.css";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '@/redux/features/thunks/author/analyticsThunks'
import { getCategory } from '@/redux/features/slices/author/authorAnalyticsSlice'
import Editor from '@/components/FormElements/Editor'
import dashboardService from '@/services/dashboardService'
import { useSession } from 'next-auth/react'

const page = () => {

    const { data: session } = useSession()
    const { accessToken, ...user } = session

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categories = useSelector(getCategory) || []

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (

        <>

            <div className='pb-10'>

                <div className="bg-white p-5 lg:p-8 max-w-2xl rounded-xl m-auto mt-6  sm:mt-8 md:mt-10 2xl:mt-16">

                    <Formik
                        initialValues={{
                            title: '',
                            content: '',
                            status: '',
                            image: null,
                            category: '',
                            scheduleDate: '',
                        }}
                        validationSchema={postSchema}
                        onSubmit={async (values, actions) => {

                            setLoading(true);

                            try {

                                const formData = new FormData();

                                // Append each field to the FormData object
                                formData.append('title', values.title);
                                formData.append('content', values.content);
                                formData.append('status', values.status);
                                formData.append('category', values.category);

                                // Append image only if it's provided
                                if (values.image) {
                                    formData.append('image', values.image);
                                }

                                // Append scheduleDate only if status is 'scheduled'
                                if (values.status === 'scheduled' && values.scheduleDate) {
                                    formData.append('scheduleDate', values.scheduleDate);
                                }

                                const response = await dashboardService.uploadPost(formData,accessToken);

                                toast.success(response.message);

                                router.push('/dashboard/post')

                            } catch (error) {

                                const message = getErrorMessage(error);
                                toast.error(message, { duration: 5000 });

                            } finally {
                                setLoading(false);
                            }

                        }}
                    >
                        {({ values, setFieldValue, errors, touched }) => (
                            <Form autoComplete='off'>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Title" name="title" type="text" placeholder="Post Title" />

                                    <CustomSelect label="Category" name="category">
                                        <option value="" selected disabled>Select category</option>
                                        <EachElement of={categories} render={(item, index) => (
                                            <option value={item._id}> {item?.name} </option>
                                        )} />
                                    </CustomSelect>

                                </div>

                                <div className="grid grid-cols-1 gap-x-4 mb-3">
                                    <div className="w-full">
                                        <CustomSelect label="Status" name="status" onChange={(e) => {
                                            setFieldValue("status", e.target.value);
                                            if (e.target.value !== 'scheduled') {
                                                setFieldValue("scheduleDate", '');
                                            }
                                        }}>
                                            <option value="" selected disabled>Select status</option>
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                            <option value="scheduled">Scheduled</option>
                                        </CustomSelect>
                                    </div>

                                    {values.status === 'scheduled' && (
                                        <CustomInput
                                            label="Publication Date"
                                            name="scheduleDate"
                                            type="datetime-local"
                                            placeholder="Publication Date"
                                        />
                                    )}
                                </div>

                                <div className="mb-4">
                                    <FileUpload
                                        name="image"
                                        title="Upload Image"
                                        label="Upload Post Image (JPG, JPEG, PNG)"
                                        btnColor="btn-success"
                                        className="border border-dashed border-[#D0D5DD]"
                                        multiple={false}
                                        accept="image/jpeg,image/png"
                                        error={touched.image && errors.image}
                                        onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                                    />
                                    {touched.image && errors.image && (
                                        <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.image}</div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-x-4">
                                        <Editor
                                            label="Post Content"
                                            name="content"
                                            error={touched.content && errors.content}
                                        />
                                </div>


                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
                                    <Button
                                        onClick={() => router.back()}
                                        type="button"
                                        color="text-success font-medium"
                                        className="py-3 w-full order-2 sm:order-1"
                                    >
                                        Go Back
                                    </Button>

                                    <Button
                                        type="submit"
                                        color="btn-success"
                                        className="py-3 w-full order-1 sm:order-2"
                                        loading={loading}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>

            </div>

        </>

    )
}

export default page