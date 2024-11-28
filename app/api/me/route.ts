import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/user";
import { dbConnect } from "@/lib/mogo"; 

import { NextRequest, NextResponse } from "next/server";


export const GET = async (request:Request) => {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse(`You are not authenticated!`, {
        status: 500,
      });
    }

    await dbConnect();

    try{
        const user = await getUserByEmail(session?.user?.email)
        return new NextResponse(JSON.stringify(user), {
            status: 200,
        });
    } catch(error) {
        if(error instanceof Error){
            return new NextResponse(error.message)
        }else{
            throw new Error('Unknown type of error occured!');
        }
    }
}