'use client'
import PostTable from '@/components/dashboard/author/post/PostTable'
import DashboardFilter from '@/components/dashboard/DashboardFilter'
import Button from '@/components/dashboard/ui/buttons/Button'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import adminService from '@/services/adminService'

const page = () => {

    const { data: session } = useSession()
    const { accessToken } = session
    const [ posts, setPosts ] = useState([])

    const initialFormData = {
        sort: 'latest',
        search: '',
        status: '',
        startDate: '',
        endDate: '',
    };

    const [filter, setFilter] = useState(initialFormData);
    const [loading, setLoading] = useState(true)

    // FETCH DATA
    const fetchData = async () => {
        try {
            const response = await adminService.getPosts(accessToken, filter)
            setPosts(response?.data?.posts);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [filter, accessToken])

    const status = [
        {
            value: "draft", name: "Draft"
        },
        {
            value: "published", name: "Published"
        },
        {
            value: "scheduled", name: "Scheduled"
        }
    ]

    const statuses = [
        { name: 'All', value: '' },
        { name: 'Draft', value: 'draft' },
        { name: 'Published', value: 'published' },
        { name: 'Scheduled', value: 'scheduled' },
    ];

    const [activeTab, setActiveTab] = useState(statuses[0].value)

    const handleTabClick = (status) => {
        setActiveTab(status)
        setFilter((prevSearchCriteria) => ({
            ...prevSearchCriteria,
            status: status,
        }));
    };

    return (
        <>

            <div className="flex items-center justify-between flex-wrap gap-y-5 mb-5">

                <h2 class="text-sm font-bold text-dark capitalize">Posts</h2>

            </div>

            <DashboardFilter filter={filter} setFilter={setFilter} statuses={status} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 my-5">

                <div className="bg-primary text-white max-w-max py-1.5 px-2 rounded-full">
                    <div className="flex flex-wrap space-x-1">
                        {statuses.map((status) => (
                            <div
                                key={status}
                                className={`cursor-pointer ${activeTab === status.value
                                    ? 'bg-[#1F89AF] rounded-full transition-all duration-300' : ''
                                    } px-3 py-1 text-xs transition-all duration-300`}
                                onClick={() => handleTabClick(status.value)}
                            >
                                {status.name.charAt(0).toUpperCase() + status.name.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* <Link className='flex justify-end' href='add/post'>
                    <Button className='text-white btn-success'>
                        <PlusCircleIcon className='h-5 w-5' />
                        <span className='text-xs'>Create Post</span>
                    </Button>
                </Link> */}

            </div>

            <div className="bg-white px-2 py-3 rounded-lg">

                {loading ? (

                    <TableSkeletonLoader count={12} height={40} />

                ) : (

                    <PostTable isAdmin={true} token={accessToken} posts={posts} fetchData={fetchData} />

                )}

            </div>

        </>
    )
}

export default page