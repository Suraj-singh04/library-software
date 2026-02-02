import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import {prisma} from "./prisma";

export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },

    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
    ],

    callbacks: {
        async signIn({user}) {
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: user.email
                }
            });
            if (!existingUser) {
                return "/unauthorized";
            }
            return true;
        },
        async jwt({token, user}) {

            if (user) {
                const currentUser = await prisma.user.findUnique({
                    where: {
                        email: user.email
                    }
                });
                if (currentUser) {
                    token.userRole = currentUser.role;
                }
            }
            return token;
        },
        async session({session, token}) {
            session.user.userRole = token.userRole;
            return session;
        }
    },
    pages: {
        signIn: "/login",
        error: "/unauthorized"
    }
});
