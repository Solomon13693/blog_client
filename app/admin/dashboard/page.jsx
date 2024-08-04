import Overview from '@/components/dashboard/admin/Overview'
import React from 'react'
import Analytics from '@/components/dashboard/admin/Analytics'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib'

const page = async ({ token }) => {

  const session = await getServerSession(authOptions)

  return (
    <>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-5">

        <div className="flex flex-col tracking-tight">
          <h2 class="text-sm font-bold text-dark capitalize">Dashboard</h2>
          <p className="text-xs text-textColor">Showing data over the last 30 days</p>
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