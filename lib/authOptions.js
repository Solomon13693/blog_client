import axios from 'axios';
import { getErrorMessage } from "@/utils/errorUtils";
import CredentialsProvider from "next-auth/providers/credentials";

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
                    const isAdmin = JSON.parse(credentials?.isAdmin || "false");

                    const loginUrl = isAdmin
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/admin/login`
                        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`;

                    const response = await axios.post(loginUrl, {
                        email: credentials.email,
                        password: credentials.password,
                    });

                    if (response.status === 200) {
                        const res = response.data;

                        if (res.success === true) {
                            const { token, ...user } = res;
                            return { ...user, accessToken: token, role: isAdmin ? 'admin' : 'author' };
                        } else {
                            throw new Error(res.message || 'Login failed');
                        }
                    } else {
                        throw new Error('Login failed');
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
            if (!session) return session;
            else {
                session = token;
                return session;
            }
        },
        async signOut() {
            // Optional sign-out logic here
        },
    },
    pages: {
        signIn: '/auth/signin',
        signUp: '/auth/signup',
    },
    debug: process.env.NODE_ENV === "development",
};

export default authOptions;
