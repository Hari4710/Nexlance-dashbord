import { NextResponse } from "next/server";
export async function POST(req:Request){
  const body = await req.json();
  if(body.password !== "Password#1234"){
    return NextResponse.json({error:"Wrong Password bro, Password#1234 pettu"}, {status:401});
  }
  return NextResponse.json({tempToken:"temp_"+Date.now()});
}
