import { authOptions } from '@/lib';
import AuthorView from '@/views/admin/AuthorView';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page() {

    const session = await getServerSession(authOptions);

    return <AuthorView token={session?.accessToken} />

}
