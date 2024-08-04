import { authOptions } from '@/lib';
import NewPost from '@/views/dashboard/post/NewPost';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page() {

    const session = await getServerSession(authOptions);

    return <NewPost token={session?.accessToken} />

}
