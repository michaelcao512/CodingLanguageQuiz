import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

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
                const user = usersDB.find(user => user.email === credentials.email && user.password === credentials.password)
                if (!user) {
                    // if login credentials are invalid
                    return null;
                }
                // user is authorized
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
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

// dummy user data
const usersDB = [
    {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "test",
        email: "test@gmail.com",
        password: "password"
    }
]

