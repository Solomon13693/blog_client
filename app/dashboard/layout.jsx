import { authOptions } from '@/lib'
import DashboardLayout from '@/views/dashboard/LayoutView'
import { getServerSession } from 'next-auth'

const layout = async ({ children }) => {

    const session = await getServerSession(authOptions)

    return (
        <>

            <DashboardLayout profile={session.user}>

                {children}

            </DashboardLayout>

        </>
    )
}

export default layout