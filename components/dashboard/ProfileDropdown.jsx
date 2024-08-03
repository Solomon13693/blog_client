import React, { useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import useClickOutside from '@/lib/useClickOutside';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProfileDropdown = ({ user, role }) => {

    const { push } = useRouter();

    const [open, setOpen] = useState(false);
    const avatar = user?.avatar;

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const profileMenu = useRef(null);

    useClickOutside(profileMenu, () => setOpen(false));

    const closeDropdown = () => {
        setTimeout(() => {
            setOpen(false);
        }, 500);
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        push('/admin/login'); 
    };

    const renderMenuItems = () => {
        switch (role) {
            case 'admin':
                return (
                    <>
                        {/* <Link onClick={closeDropdown} href="/admin/dashboard/settings" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Admin Settings
                        </Link>
                        <Link onClick={closeDropdown} href="/admin/help" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Admin Help Desk
                        </Link> */}
                        <Link onClick={handleLogout} href="javascript:void(0)" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Sign Out
                        </Link>
                    </>
                );
            case 'author':
                return (
                    <>
                        <Link onClick={closeDropdown} href="/dashboard/settings" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Settings
                        </Link>
                        <Link onClick={async () => await signOut()} href="javascript:void(0)" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Sign Out
                        </Link>
                    </>
                );
            default:
                return (
                    <>
                        <Link onClick={closeDropdown} href="/user/dashboard/settings" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Account Settings
                        </Link>
                        <Link onClick={closeDropdown} href="/user/help" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Help Desk
                        </Link>
                        <Link onClick={async () => await signOut()} href="javascript:void(0)" className="block w-full cursor-pointer text-textColor hover:text-dark">
                            Sign Out
                        </Link>
                    </>
                );
        }
    };

    return (
        <div ref={profileMenu} className="relative inline-flex">
            <div onClick={toggleDropdown} className="flex items-center gap-x-3 cursor-pointer w-full">
                {avatar ? (
                    <Image className="inline-block h-[2rem] w-[2rem] object-cover mb-0 pb-0 rounded-full" src={avatar.url} width={500} height={500} alt="Profile Image" />
                ) : (
                    <Avatar name={user?.name} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />
                )}
                <div className="flex-1 tracking-tighter hidden sm:block">
                    <span className='text-dark text-xs font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.name} </span>
                    <p className='truncate w-[90px] text-textColor text-[11px] font-light -mt-1 pt-0.5 overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.email} </p>
                </div>
                <div className="hidden sm:block">
                    {open ? (
                        <ChevronUpIcon className="h-3.5 w-3.5 text-black" />
                    ) : (
                        <ChevronDownIcon className="h-3.5 w-3.5 text-black" />
                    )}
                </div>
            </div>
            <div className={`z-10 duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'} right-1 top-12 bg-white rounded-lg shadow min-w-52 absolute py-4`}>
                <div className="border-b border-[#5862831A] pb-4 mb-3">
                    <div className="flex items-center gap-x-3 px-4">
                        {avatar ? (
                            <Image className="inline-block h-[2rem] w-[2rem] object-cover mb-0 pb-0 rounded-full" src={avatar.url} width={32} height={32} alt="Profile Image" />
                        ) : (
                            <Avatar name={user?.name} size="h-9 w-9" bgColor="bg-primary" textColor="text-white" fontSize="text-[12px]" />
                        )}
                        <div className="flex-1 tracking-tight">
                            <div className='text-dark text-xs font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.name} </div>
                            <p className='truncate w-[90px] text-textColor text-[11px] font-light -mt-1 pt-0.5 overflow-hidden whitespace-nowrap overflow-ellipsis'> {user?.email} </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 space-y-3">
                    {renderMenuItems()}
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;
