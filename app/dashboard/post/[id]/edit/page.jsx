import { authOptions } from '@/lib';
import EditPost from '@/views/dashboard/post/EditPost';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page({ params }) {

    const { id } = params;

    const session = await getServerSession(authOptions);

    return <EditPost id={id} token={session?.accessToken} />

}
