
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import {LOGIN,PUBLIC_ROUTES,ROOT} from '@/lib/routes'


const {auth} = NextAuth(authConfig);

export async function middleware(request:NextRequest){

    const { nextUrl } = request;
    const session = await auth();
    const isAuthenticated = !!session?.user;
    console.log(isAuthenticated, nextUrl.pathname);
  
    const isPublicRoute = ((PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route))
    || nextUrl.pathname === ROOT));
  
    console.log(isPublicRoute);
  
    // if (!isAuthenticated && !isPublicRoute)
    //   return Response.redirect(new URL(LOGIN, nextUrl));
  }
  
  export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
  };