import { getUsers, verifyUsers } from "@/utils/users";
import { sign } from "crypto";
import NextAuth, { Session , User } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import Email from "next-auth/providers/email";

export interface userr {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: '' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any ) {
                const res = await verifyUsers(credentials)as userr | false;
                if(res){
                    return res as User | null
                }
                else{
                    return null
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token }: any)  => {
        if (session.user) {
            session.user.id = token.uid
        }
        return session
      }
    },
    pages :{
        signIn : "/signin",
    }
})

export { handler as GET, handler as POST }