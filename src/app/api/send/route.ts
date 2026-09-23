import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const response = NextResponse.json({ success: true, demoOtp: otp });
    response.cookies.set("otp", otp, { maxAge: 300 });
    await resend.emails.send({
      from: "Nexlance <onboarding@resend.dev>",
      to: email,
      subject: `Nexlance OTP ${otp}`,
      html: `<div><h1 style="font-size:32px">${otp}</h1><p>Valid for 5 mins</p></div>`,
    });
    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
