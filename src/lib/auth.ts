import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { upsertUser } from "./actions"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl + "/dashboard"
    },
    async signIn({ user }) {
      if (user.email && user.name) {
        console.log("Auth callback user data:", user)
        await upsertUser(user.name, user.email)
      }
      return true
    }
  }
})