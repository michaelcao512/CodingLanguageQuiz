import {NextAuthOptions, Session} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// NextAuth configuration (configured by Michael)
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: "Email", type: "email", placeholder: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const inputEmail = credentials.email
                const inputPassword = bcrypt.hashSync(credentials.password, 10)

                const user = await prisma.user.findFirst({
                    where: {
                        email: inputEmail,
                    }
                })

                if (!user) {
                    return null
                }

                if (!user.password) {
                    return null
                }

                const passwordMatch = bcrypt.compareSync(credentials.password, user.password)

                if (!passwordMatch) {
                    return null
                }

                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email,
                } as any
            }
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    pages: {
        signIn: '/',
    },

}
