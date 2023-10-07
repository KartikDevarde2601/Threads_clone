import PostThread from "@/component/forms/postThread";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {

    const user = await currentUser();
    if(!user){
        return null;
    }
    const userInfo = await fetchUser(user.id)

    if(!userInfo?.onboarded) redirect ('/onboarding')

    return(
        <>
         <h1 className='head-text'>create thread</h1> 
         <PostThread userId={userInfo._id.toString()} />
        </>
    ) 
}

export default Page;