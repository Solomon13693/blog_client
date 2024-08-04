import { authOptions } from '@/lib'
import DashboardLayout from '@/views/admin/LayoutView'
import { getServerSession } from 'next-auth'

const layout = async ({ children }) => {

    const session = await getServerSession(authOptions)

    return (
        <>

            <DashboardLayout user={session.user}>

                {children}

            </DashboardLayout>

        </>
    )
}

export default layout