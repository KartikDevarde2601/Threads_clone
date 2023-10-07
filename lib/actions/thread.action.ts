'use server'

import { revalidatePath } from "next/cache";
import Thread from "../models/thread.models";
import User from "../models/user.models";
import { connectToDB } from "../moogoose";

interface Params{
    text:string,
    author:string,
    communityId: string | null,
    path:string,
}


export async function createThread({text,author,communityId,path}:Params){

    try {
        connectToDB();
const createdThread =  await Thread.create({
    text,
    author,
    communityId:null
});

//update user Model
await User.findByIdAndUpdate(author,{
    $push:{threads:createdThread._Id}
})

revalidatePath(path)
    } catch (error:any) {
        throw new Error(`not able to create Thread:${error.message}`)
    }
    
}