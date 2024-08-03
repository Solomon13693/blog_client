import '@/styles/globals.css'
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast'
import InternetCheck from '@/utils/InternentCheck';
import AuthProvider from '@/lib/authProvider';
import { getServerSession } from 'next-auth';
import { Providers } from '@/redux/StoreProvider';

export const metadata = {
  title: "Disto Blogging Platform",
  description: "Blogging Platform, for finial year project",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body>

        <Providers>

          <AuthProvider session={session}>

            <NextTopLoader
              color="#195959"
            />
            {children}

            <InternetCheck />

          </AuthProvider>

        </Providers>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />

      </body>
    </html>
  );
}
