

import mongoose from "mongoose";

export async function dbConnect(){
    try {
        const conn = await mongoose.connect(String(process.env.connectionStr))
        return conn
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message)
        }else{
            throw new Error("Unknown Error has occured");
        }
    }
};