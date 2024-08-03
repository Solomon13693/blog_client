'use client'

import NavBar from "@/components/dashboard/admin/Navbar";
import SideBar from "@/components/dashboard/admin/SideBar";
import { useState } from "react";
import { useSession } from "next-auth/react";

const DashboardLayout = ({ children }) => {

    const [open, setOpen] = useState(false);

    const { data: session } = useSession()
    const profile = session?.user

    return (
        <div className='m-0 text-base antialiased'>

            <SideBar user={profile} open={open} setOpen={setOpen} />

            <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-[16rem] 2xl:ml-[16rem]">

                <NavBar user={profile} open={open} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto bg-[#F4F7FE] min-h-screen">

                    {children}

                </div>

            </main>
        </div>

    );
};

export default DashboardLayout;
