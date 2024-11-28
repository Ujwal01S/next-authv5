


import NextAuth, { NextAuthConfig } from "next-auth";  // Default import for NextAuth

export const authConfig: NextAuthConfig= { 
  session: {
    strategy: "jwt",  
  },
  providers: [],  
};
