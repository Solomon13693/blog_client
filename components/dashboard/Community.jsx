import React from 'react'
import X from '@/public/images/social/X.svg'
import Linkedin from '@/public/images/social/linkedin.svg'
import Telegram from '@/public/images/social/telegram.svg'
import Facebook from '@/public/images/social/facebook.svg'
import Instagram from '@/public/images/social/instagram.svg'
import Thread from '@/public/images/social/thread.svg'
import Whatsapp from '@/public/images/social/whatsapp.svg'
import Image from 'next/image';

const Community = () => {

    return (
        <div className="w-full tracking-tight">
            <div className="border border-gray-260 bg-white py-5 rounded-lg mb-5">
                <div className="md:px-5 px-3">
                    <h1 className='text-blue font-semibold text-base pb-2'>Explore our channels across  the digital space</h1>
                </div>

                <hr className="w-full mt-3 mb-7" />

                <div className="md:px-5 px-3 w-full sm:w-[70%] lg:w-1/2">

                    <div className="bg-[#F6F8FA] p-3 rounded">

                        <p className="text-xs text-blue font-medium">Connect with us</p>

                        <div className="flex items-center flex-wrap gap-5 xl:gap-x-7 mt-3">

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={X} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Linkedin} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Telegram} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Facebook} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Instagram} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Thread} width={26} height={25}  />
                            </a>

                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <Image src={Whatsapp} width={26} height={25}  />
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Community