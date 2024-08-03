'use client'
import Counter from '@/components/Counter'
import UploadIcon from '@/components/icons/UploadIcon'
import PeopleIcon from '@/components/icons/PeopleIcon'
import ReportIcon from '@/components/icons/ReportIcon'
import { UserIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { getAnalyticsData } from '@/redux/features/slices/admin/analyticsSlice'
import { useEffect } from 'react'
import { fetchAnalyticsData } from '@/redux/features/thunks/admin/analyticsThunks'

const Overview = ({ token }) => {

    const response = useSelector(getAnalyticsData)

    const { authors, published, draft, scheduled } = response?.analytics || {};

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAnalyticsData(token));
    }, [dispatch]);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-x-4 gap-y-5 mt-6">

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <UserIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Authors</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'><Counter value={authors} /></h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <ReportIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Published Posts</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'><Counter value={published} /></h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <UploadIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Draft Posts</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'><Counter value={draft} /></h2>

            </div>

            <div className="space-y-4 relative flex flex-col w-full tracking-tight p-6 bg-white rounded-xl bg-clip-border">

                <div className="flex items-center gap-x-3">

                    <div className="p-2 border border-gray_color rounded-full flex items-center justify-center">
                        <PeopleIcon className='w-4 h-4' color='#1D2329' />
                    </div>

                    <h2 className="text-textColor">Scheduled Posts</h2>
                </div>

                <h2 className='text-2xl font-medium pb-1'> <Counter value={scheduled} /> </h2>

            </div>

        </div>
    )
}

export default Overview