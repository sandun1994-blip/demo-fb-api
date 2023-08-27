import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";


export async function POST(request: Request) {
    
    
    try {
       
     console.log('hello cron');

     const date =new Date().toDateString()
console.log(date);

     const user =await prisma?.cron.create({
      data:{expires_at:date as unknown as string}
  })
  
  return NextResponse.json(user)
 } catch (error) {
    console.log(error);
    
    return new NextResponse('Internal Error',{status:500})
 }
   }
   