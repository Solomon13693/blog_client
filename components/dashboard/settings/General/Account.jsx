import React, { useState } from 'react'
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput';
import Button from '@/components/dashboard/ui/buttons/Button';
import ProfileImage from './ProfileImage';
import { getErrorMessage } from '@/utils/errorUtils';
import toast from 'react-hot-toast';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import TextArea from '@/components/FormElements/TextArea';
import dashboardService from '@/services/dashboardService';
import { useSession } from 'next-auth/react';

const Account = ({ user, token }) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        about: Yup.string().required('About is required')
    });

    const [loading, setLoading] = useState(false)

    const { data: session, update } = useSession();

    console.log(user.image)

    return (
        <div className='w-full'>

            <Formik
                enableReinitialize
                initialValues={{
                    name: user?.name || '',
                    email: user?.email || '',
                    phone: user?.phone || '',
                    about: user?.desc || '',
                    image: null
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, actions) => {

                    setLoading(true)

                    try {

                        const formData = new FormData();
                        formData.append('name', values.name);
                        formData.append('email', values.email);
                        formData.append('phone', values.phone);
                        formData.append('about', values.about);

                        // Append image if exists
                        if (values.image) {
                            formData.append('image', values?.image);
                        }

                        const response = await dashboardService.updateProfile(formData, token);

                        await update({
                            ...session,
                            user: {
                                ...session?.user,
                                ...response.user,
                            }
                        });

                        toast.success(response?.message);

                    } catch (error) {

                        const message = getErrorMessage(error)
                        toast.error(message);

                    } finally {
                        setLoading(false);
                    }

                }}
            >
                {({ values, setFieldValue, errors, touched }) => (

                    <Form autoComplete='off'>

                        <div className="border border-gray-300 bg-[#FBFBFB] p-3 md:p-5 rounded-lg mb-5">

                            <h1 className='text-blue font-semibold mb-3'>Profile</h1>

                            <div className="border-y py-3 mb-7">
                                <ProfileImage setFieldValue={setFieldValue} image={user?.image} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                <CustomInput className='py-2 rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="Full name*" name="name" type="text" />

                                <CustomPhoneInput className='py-0 h-[45px] rounded-[8px] text-blue font-medium bg-[#F4F6FB]' name="phone" label="Contact information*" />

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-4">

                                <CustomInput className='py-2 rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="Email*" name="email" type="email" />

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-4">

                                <TextArea className='py-2 h-40 rounded-[8px] text-blue font-medium bg-[#F4F6FB]' label="About*" name="about" />

                            </div>

                            <Button loading={loading} type='submit' className='btn-primary mt-5'>
                                <PencilSquareIcon className='w-4 h-4' color='#FFF' />
                                <span>Edit profile</span>
                            </Button>

                        </div>

                    </Form>
                )}
            </Formik>


        </div >
    )
}

export default Account