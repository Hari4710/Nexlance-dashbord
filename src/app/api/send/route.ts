import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// OTP ni memory lo store cheskuntam (simple kosam)
const otpStore = new Map();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // 6 digit OTP generate
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // OTP save (5 min expiry)
    otpStore.set(email, { otp, expiry: Date.now() + 5 * 60 * 1000 });

    console.log(`OTP for ${email}: ${otp}`);

    // --- MAIN POINT: FROM ADDRESS FIX ---
    const { data, error } = await resend.emails.send({
      from: "Nexlance <onboarding@resend.dev>",
      to: email,
      subject: "Your Nexlance OTP is " + otp,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #000;">NEXLANCE COLLECTIONS</h2>
          <p>Your OTP for login is:</p>
          <h1 style="font-size: 32px; letter-spacing: 5px; color: #000;">${otp}</h1>
          <p>This OTP will expire in 5 minutes.</p>
          <p>If you didn't request this, please ignore.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      // Mail fail ayina kuda OTP return chestam demo kosam
      return NextResponse.json({ 
        success: true, 
        message: "OTP generated (Mail failed in free plan)",
        demoOtp: otp,
        resendError: error 
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent to mail!",
      demoOtp: otp // Testing kosam - tarvata remove cheyochu
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
