import { authOptions } from '@/lib';
import SettingsView from '@/views/dashboard/Settings';
import { getServerSession } from 'next-auth';
import React from 'react'


export default async function Page() {

    const session = await getServerSession(authOptions);
    const { user } = session

    return <SettingsView user={user} token={session?.accessToken} />

}
