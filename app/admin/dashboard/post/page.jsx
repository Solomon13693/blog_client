import { authOptions } from '@/lib';
import ViewPost from '@/views/admin/post/ViewPost';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page() {

    const session = await getServerSession(authOptions);

    return <ViewPost token={session?.accessToken} />

}
