'use client'
import AuthorTable from '@/components/dashboard/admin/author/AuthorTable'
import DashboardSearch from '@/components/dashboard/DashboardSearch'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import React, { useEffect, useState } from 'react'
import adminService from '@/services/adminService'
import { useSession } from 'next-auth/react'

const page = () => {

    const { data: session } = useSession()
    const { accessToken } = session
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const initialFormData = {
        search: '',
    };

    const [search, setSearch] = useState(initialFormData);

    const [ authors, setAuthors ] = useState([])

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await adminService.getAuthors(accessToken, search)
            setAuthors(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [search, accessToken])

    return (
        <>


            <DashboardSearch search={search} setSearch={setSearch} />

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <AuthorTable datas={authors} token={accessToken} fetchData={fetchData} />

                )}

            </div>

        </>
    )
}

export default page