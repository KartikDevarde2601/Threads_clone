'use server'
import { revalidatePath } from "next/cache";
import User from "../models/user.models"
import { connectToDB } from "../moogoose"

interface Params{
    userId:string,
    bio:string,
    name:string,
    username:string,
    image:string,
    path:string,
}


export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    image,
  }: Params): Promise<void>{
    try {
        connectToDB();
  
      await User.findOneAndUpdate(
        { id:userId },
        {
          username:username.toLowerCase(),
          name,
          bio,
          image,
          onboarded:true,
        },
        { upsert:true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }

export async function fetchUser(userId:string){
try {
  connectToDB();
  return await User.findOne({id:userId})
  // .populate({
  //   path:'communities',
  //   model:community,
  // })
} catch (error:any) {
  throw new Error(`Failed to fetch User: ${error.message}`)
}
}