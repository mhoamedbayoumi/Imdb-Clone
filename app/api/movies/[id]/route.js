import connect from "@/app/(compoents)/Db";
import usermodel from "@/app/(compoents)/usermodel";
import { NextResponse } from "next/server";
export const DELETE = async (request ,{params}) => {
    const {id}=params;
    try {
      await connect();
  
      await usermodel.findByIdAndDelete(id);
  
      return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };