import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { email, otp } = await req.json();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": "Bearer re_Axz8wDTk_12Z5H31rt5zx6NNreH6YxCgW",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Nexlance OTP <onboarding@resend.dev>",
      to: [email],
      subject: `Nexlance OTP ${otp}`,
      html: `<div style="font-family:Arial;padding:20px;background:#eef1f6"><div style="background:white;padding:30px;border-radius:20px;max-width:400px;margin:auto;text-align:center"><h2>Nexlance</h2><h1 style="font-size:42px;letter-spacing:12px;background:linear-gradient(90deg,#FDE68A,#A7F3D0,#93C5FD,#C4B5FD);padding:20px;border-radius:15px">${otp}</h1><p>5 mins valid</p></div></div>`
    })
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
