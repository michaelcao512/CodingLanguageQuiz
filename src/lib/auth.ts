import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

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
                    // if email or password is not provided
                    return null
                }

                const inputEmail = credentials.email
                const inputPassword = bcrypt.hashSync(credentials.password, 10)
                console.log(inputPassword)

                const user = await prisma.user.findFirst({
                    where: {
                        email: inputEmail,
                    }
                })

                if (!user) {
                    // if user is not found
                    return null
                }

                if (!user.password) {
                    // if user does not have a password
                    return null
                }

                const passwordMatch = bcrypt.compareSync(credentials.password, user.password)

                if (!passwordMatch) {
                    // if password does not match
                    return null
                }

                // user is authorized
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                } as any
            }
        }),
        //     other providers can be added here
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 1 day
    },
    pages: {
        signIn: '/',
    },
}