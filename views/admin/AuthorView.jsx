'use client'
import AuthorTable from '@/components/dashboard/admin/author/AuthorTable'
import DashboardSearch from '@/components/dashboard/DashboardSearch'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import React, { useEffect, useState } from 'react'
import adminService from '@/services/adminService'

const AuthorView = ({ token }) => {

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
            const response = await adminService.getAuthors(token, search)
            setAuthors(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [search, token])

    return (
        <>


            <DashboardSearch search={search} setSearch={setSearch} />

            <div className="bg-white px-2 py-3 rounded-lg mt-4">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <AuthorTable datas={authors} token={token} fetchData={fetchData} />

                )}

            </div>

        </>
    )
}

export default AuthorView