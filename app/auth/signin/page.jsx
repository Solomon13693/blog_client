'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Form, Formik } from 'formik';
import CustomInput from '@/components/FormElements/CustomInput';
import CustomPassword from '@/components/FormElements/CustomPassword';
import ButtonOne from '@/components/dashboard/ui/buttons/ButtonOne';
import { LoginSchema } from '@/utils/schema';
import AuthBg from '@/components/auth/AuthBg';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const Login = () => {

    const [loading, setLoading] = useState(false)
    const callbackUrl = useSearchParams().get("callbackUrl")
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

                        <Link className='text-xs pt-4' href="signup">Not registered yet? <span className='text-primary font-bold'>Create an account</span> </Link> <br /> <br />

                        <div className="main w-full mt-5">

                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={async (values, actions) => {

                                    setLoading(true)

                                    const res = await signIn("credentials", {
                                        redirect: false,
                                        email: values.email,
                                        password: values.password,
                                    });

                                    setLoading(false);

                                    if (res?.ok) {
                                        toast.success("User logged in successfully!");
                                        router.replace(callbackUrl || "/dashboard");
                                    } else {
                                        const error = res?.error || 'Login failed';
                                        toast.error(error);
                                    }

                                }}
                            >

                                {(props) => (

                                    <Form autoComplete='off'>

                                        <CustomInput label="Email address" name="email" type="email" placeholder="example@gmail.com" />

                                        <CustomPassword label="Password" name="password" placeholder="Password" />

                                        <div className="flex items-center justify-between my-5">

                                            <div className="flex items-center">
                                                <input type="checkbox" className="shrink-0 border-gray-200 rounded text-primary cursor-pointer w-4 h-4" id="remember" />
                                                <label htmlFor="remember" className="text-xs text-dark/80 ml-2 font-medium tracking-tight">Keep me logged In</label>
                                            </div>


                                            {/* <Link href='reset-password' className='text-primary text-xs'>Forget password?</Link> */}

                                        </div>

                                        <ButtonOne
                                            type="submit"
                                            color="btn-success"
                                            className="mt-8"
                                            loading={loading}
                                            iconColor='text-success'
                                        >
                                            Login to your account
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
