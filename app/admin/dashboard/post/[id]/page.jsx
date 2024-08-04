import { authOptions } from '@/lib';
import SinglePost from '@/views/admin/post/SinglePost';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page({ params }) {

    const { id } = params;

    const session = await getServerSession(authOptions);

    return <SinglePost id={id} token={session?.accessToken} />

}
