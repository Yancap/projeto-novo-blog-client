import { api_client } from "@/services/api_client"
import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async session({session}) {
        const email = session.user?.email ?? null
        if(email) {
            try {
                const {data} = await api_client.get('users/'+email)
                return {
                    ...session,
                    token: data.user.token
                }
            } catch (error) { 
              console.log(error);
              
            }
        }
        return {
            ...session
        }
    },
    async signIn({user}) {
        const {name, image, email} = user
        try {
            await api_client.post('users', { name, email, avatar: image })
            return true
        } catch (e) {
            return false
        }
        
    }
  }
}
export default NextAuth(authOptions)