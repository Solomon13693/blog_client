import React from 'react'
import Image from 'next/image'
import AuthImage from '@/public/images/auth-image.png'

const AuthBg = () => {
    return (
        <div className="fixed hidden lg:w-1/2 2xl:w-[40%] h-full max-w-full px-3 pl-0 lg:block bg-primary"> {/* Changed the background color class to reflect a different theme */}
            <div className="xl:max-w-xl max-w-full m-auto h-full px-12 xl:px-16 py-12 2xl:py-32 text-white relative">
                <h2 className="text-5xl tracking-tight font-medium mb-5">
                    Share Your Stories with the World
                </h2>
                <p className="text-xs 2xl:text-base leading-5">
                    Join our blogging platform to express your thoughts, share your experiences, and connect with a community of readers and writers from around the globe.
                </p>
                <div className="mt-4 2xl:mt-8">
                    <Image src={AuthImage} width={640} height={532} className='object-cover' alt="Blogging" /> {/* Changed the alt text for accessibility */}
                </div>
            </div>
        </div>
    )
}

export default AuthBg