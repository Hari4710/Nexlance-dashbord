import { NextResponse } from "next/server";
export async function POST(req:Request){
  const body = await req.json();
  if(body.otp === "123456" || body.otp.length === 6){
    return NextResponse.json({success:true, finalToken:"final_"+Date.now()});
  }
  return NextResponse.json({success:false}, {status:401});
}
