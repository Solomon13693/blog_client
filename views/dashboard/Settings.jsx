'use client'
import Account from '@/components/dashboard/settings/General/Account';
import Security from '@/components/dashboard/settings/Security';
import React, { useState } from 'react'

const SettingsView = ({ token, user }) => {

    const statuses = [
        { name: 'Account', value: 'account' },
        { name: 'Privacy & Security', value: 'security' },
    ];

    const [activeTab, setActiveTab] = useState(statuses[0].value);

    const handleTabClick = (status) => {
        setActiveTab(status);
    };

    return (
        <>

            <div className="relative w-full flex flex-col min-w-0 break-words py-5 bg-white shadow-soft-xl rounded-lg bg-clip-border mt-3">

                <div className="border-b pb-3">

                    <div className="p-3 md:p-5 flex items-center justify-between flex-wrap">

                        <div className="bg-white border border-[#A3AED0] mb-3 md:mb-0 w-[100%] md:max-w-max p-1 rounded-lg">
                            <div className="flex flex-wrap space-x-1">
                                {statuses.map((status) => (
                                    <div
                                        key={status}
                                        className={`cursor-pointer text-[12px] ${activeTab === status.value
                                            ? 'bg-[#E0E5F2] text-blue rounded-lg px-2 transition-all duration-300'
                                            : 'bg-white text-[#A3AED0]'
                                            } p-2 transition-all duration-300 font-medium`}
                                        onClick={() => handleTabClick(status.value)}
                                    >
                                        {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="pt-5 pb-1 p-3 md:p-5">

                    {/* GENERAL */}
                    {activeTab === 'account' && <Account user={user} token={token} />}

                    {/* SECURITY */}
                    {activeTab === 'security' && <Security token={token} />}

                </div>

            </div>

        </>
    )
}

export default SettingsView