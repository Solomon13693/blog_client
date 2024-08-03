'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const BreadCrumb = ({ segments }) => {

    const router = useRouter()

    return (
        <div className="">

            <div className="flex items-center flex-wrap gap-x-1.5">

                <div  onClick={() => router.back()} className="flex cursor-pointer items-center gap-x-2 text-dark pr-3">
                    <ArrowLeftIcon className='w-3 h-3' />
                    <p className="text-xs font-medium ">Go Back</p>
                </div>

                {segments.map((segment, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && (
                            <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.67818 0.840908L1.39693 13.0312H0.323065L3.60431 0.840908H4.67818Z" fill="#A3A3A3" />
                            </svg>
                        )}
                        {segment.link ? (
                            <Link href={segment.link} className="text-[#A3A3A3] text-xs font-medium">
                                {segment.title}
                            </Link>
                        ) : (
                            <p className="text-success text-xs">{segment.title}</p>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </div>
    );
};

export default BreadCrumb;
