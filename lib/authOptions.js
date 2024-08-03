import { getErrorMessage } from "@/utils/errorUtils";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {},
                password: {},
                isAdmin: {},
            },
            async authorize(credentials) {
                try {

                    const isAdmin = JSON.parse(credentials?.isAdmin || "false")

                    const loginUrl = isAdmin
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/admin/login`
                        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`;

                    const response = await fetch(loginUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || 'Login failed');
                    }

                    const res = await response.json();

                    if (res.success === true) {

                        const { token, ...user } = res

                        return { ...user, accessToken: token, role: isAdmin ? 'admin' : 'author' };

                    } else {
                        throw new Error(res.message);
                    }
                } catch (error) {
                    const message = getErrorMessage(error);
                    throw new Error(message);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, session, trigger }) {
            if (trigger === "update" && session && session.user) {
                // return { ...token, ...session?.user };
                token = session;
            }
            return { ...token, ...user };
        },
        async session({ session, token }) {
            if (!session)
                return session;
            else {
                session = token;
                return session;
            }
        },
        async signOut() {

        },
    },
    pages: {
        signIn: '/auth/signin',
        signUp: '/auth/signup',
    },
    debug: process.env.NODE_ENV === "development",
};

export default authOptions;
