import Overview from '@/components/dashboard/author/Overview'
import Button from '@/components/dashboard//ui/buttons/Button'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Analytics from '@/components/dashboard/author/Analytics'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib'

const page = async () => {

  const session = await getServerSession(authOptions)

  return (
    <>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-5">

        <div className="flex flex-col tracking-tight">
          <h2 class="text-sm font-bold text-dark capitalize">Dashboard</h2>
          <p className="text-xs text-textColor">Showing data over the last 30 days</p>
        </div>

        <div className="flex items-center justify-end gap-x-3">

          <Link href='dashboard/add/post'>
            <Button className='text-white btn-success'>
              <PlusCircleIcon className='h-5 w-5' />
              <span className='text-xs'>New Post</span>
            </Button>
          </Link>

        </div>

      </div>

      {/* OVERVIEW */}
      <Overview token={session?.accessToken} />

      {/* CHART AREA */}
      <Analytics token={session?.accessToken} />

    </>
  )
}

export default page