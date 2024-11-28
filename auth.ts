import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./model/user";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

interface UserProps {
  name: string;
  email: string;
  password: string;
}


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        if (credentials === null) return null;
        try {
          const user = await User.findOne({
            email: credentials?.email,
          });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("check your password");
            }
          } else {
            throw new Error("User doesn't exist");
          }
        } catch (error) {
          throw new Error("No user found");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
});
