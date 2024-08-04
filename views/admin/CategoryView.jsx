'use client'
import AddCategory from '@/components/dashboard/admin/category/AddCategory'
import CategoryTable from '@/components/dashboard/admin/category/CategoryTable'
import BreadCrumb from '@/components/dashboard/Breadcrumb'
import Button from '@/components/dashboard/ui/buttons/Button'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import dashboardService from '@/services/dashboardService'

const CategoryView = ({ token }) => {

    const [ loading, setLoading ] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const [ open, setOpen ] = useState(false)

    const [ categories, setCategories ] = useState([])

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await dashboardService.getCategories()
            setCategories(response.category);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    return (
        <>

            <BreadCrumb
                segments={[
                    { title: "Dashboard", link: "/admin/dashboard" },
                    { title: "Category" },
                ]}
            />

            <div className="flex items-center justify-end">

                    <Button onClick={() => setOpen(true)} className='text-white btn-success'>
                        <PlusCircleIcon className='h-5 w-5' />
                        <span className='text-xs'>Create Category</span>
                    </Button>

            </div>


            <div className="bg-white px-2 py-3 rounded-lg mt-5">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <CategoryTable datas={categories} token={token} fetchData={fetchData} />

                )}

            </div>

            <AddCategory open={open} setOpen={setOpen} token={token} fetchData={fetchData} /> 

        </>
    )
}

export default CategoryView