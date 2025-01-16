import connect from "@/app/(compoents)/Db";
import { NextResponse } from "next/server";
// name of file that contains Scehma
import usermodel from "@/app/(compoents)/usermodel";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
export const GET=async (request)=>{
    const url = new URL(request.url);

    const name = url.searchParams.get("name");
    try {
        await connect();
    
        const posts = await usermodel.find(name && { name });
    
        return new NextResponse(JSON.stringify(posts), { status: 200 });
      } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
      }
}

export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new usermodel(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
};
