import { authOptions } from '@/lib';
import CategoryView from '@/views/admin/CategoryView';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page() {

    const session = await getServerSession(authOptions);

    return <CategoryView token={session?.accessToken} />

}
