'use client'
import BreadCrumb from "@/components/dashboard/Breadcrumb";
import CustomInput from "@/components/FormElements/CustomInput";
import Editor from "@/components/FormElements/Editor";
import TextArea from "@/components/FormElements/TextArea";
import DetailsLoader from "@/components/skeleton/DetailsLoader";
import dashboardService from "@/services/dashboardService";
import useFetchData from "@/utils/useFetchData";
import { Form, Formik } from "formik";
import moment from "moment";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const page = ({ params }) => {

    const { data: session } = useSession()
    const { accessToken } = session

    const { id } = params;

    const fetchFunction = (id, accessToken) => dashboardService.getPost(id, accessToken);

    const { data, loading, error, refetch } = useFetchData(fetchFunction,
        [id, accessToken],
        [id, accessToken]
    );

    return (
        <>
            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/dashboard" },
                    { title: "Posts", link: "/dashboard/post" },
                    { title: "Post Details" },
                ]}
            />

            {loading ? (

                <DetailsLoader />

            ) : (

                <div className="bg-white p-5 rounded-xl max-w-5xl m-auto mt-10">


                    <Formik
                        enableReinitialize
                        initialValues={{
                            title: data?.post?.title || '',
                            content: data?.post?.content || '',
                            status: data?.post?.status || '',
                            image: null,
                            category: data?.post?.category?.name || '',
                            scheduleDate: moment(data?.post?.scheduleDate).format('LLL') || '',
                        }}
                        onSubmit={async (values, actions) => {
                        }}
                    >
                        {({ values, setFieldValue, errors, touched }) => (
                            <Form autoComplete='off'>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4">

                                    <CustomInput label="Title" name="title" type="text" placeholder="Post Title" />

                                    <CustomInput label="Category" name="category" type="text" placeholder="Post Category" />

                                </div>

                                <div className="grid grid-cols-1 gap-x-4 mb-3">
                                    <div className="w-full">
                                        <CustomInput label="Status" name="status" type="text" placeholder="Post Status" className='capitalize' />
                                    </div>

                                    {values.status === 'scheduled' && (
                                        <CustomInput
                                            label="Publication Date"
                                            name="scheduleDate"
                                            type="datetime"
                                            placeholder="Publication Date"
                                        />
                                    )}
                                </div>

                                <div className="mb-4">

                                </div>

                                <div className="grid grid-cols-1 gap-x-4">
                                    <Editor
                                        label="Post Content"
                                        name="content"
                                        error={touched.content && errors.content}
                                    />
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>

            )}

        </>
    );
};

export default page;
