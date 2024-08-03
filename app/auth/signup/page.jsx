'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Form, Formik } from 'formik';
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPassword from '@/components/FormElements/CustomPassword';
import ButtonOne from '@/components/dashboard/ui/buttons/ButtonOne';
import AuthBg from '@/components/auth/AuthBg';
import toast from 'react-hot-toast';
import { RegisterSchema } from '@/utils/schema';
import CustomPhoneInput from '@/components/FormElements/CustomPhoneInput';
import authService from '@/services/authService';
import { useRouter } from 'next/navigation';
import { getErrorMessage } from '@/utils/errorUtils';

const Login = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <div className="relative flex items-center p-0 overflow-hidden">

            <div className="relative flex flex-wrap lg:flex-nowrap w-full min-h-screen">

                {/* AUTH BG */}
                <AuthBg />

                <div className="lg:ml-[52%] 2xl:ml-[47%] mx-auto px-3 w-[95%] xl:px-16 md:w-7/12 lg:w-[45%] py-12 2xl:py-32 h-full">

                    <div className="pb-8">

                        <Image src='/images/logo.png'
                            width={168}
                            height={41}
                            alt="Logo" />

                        <h2 className="text-4xl text-dark font-medium tracking-tighter mt-7">
                            Welcome back
                        </h2>

                        <Link className='text-xs pt-4' href="signin">Already have an account? <span className='text-primary font-bold'>Sign in</span> </Link> <br /> <br />

                        <div className="main w-full mt-5">

                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                    phone: '',
                                }}
                                validationSchema={RegisterSchema}
                                onSubmit={async (values, actions) => {

                                    setLoading(true);

                                    try {

                                        const response = await authService.register(values);
                                        toast.success(response.message, { duration: 5000 });

                                        // Navigate
                                        router.push('signin')

                                    } catch (error) {

                                        const message = getErrorMessage(error);
                                        toast.error(message);

                                    } finally {
                                        setLoading(false);
                                    }

                                }}
                            >

                                {(props) => (

                                    <Form autoComplete='off'>

                                        <CustomInput label="Full name" name="name" type="text" placeholder="John Doe" />

                                        <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                        <CustomPhoneInput name="phone" label="Mobile Number*" />

                                        <CustomPassword label="Password" name="password" placeholder="Password" />

                                        <ButtonOne
                                            type="submit"
                                            color="btn-success"
                                            className="mt-8"
                                            loading={loading}
                                            iconColor='text-success'
                                        >
                                            Sign up on RegalVest
                                        </ButtonOne>

                                    </Form>

                                )}

                            </Formik>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
