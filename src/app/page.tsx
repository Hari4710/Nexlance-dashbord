"use client";
import { useState } from "react";

const ROLES_MAP: any = {
  "FOUNDER01": "Karthick Founder (FOUNDER)",
  "OPS01": "Rohan Sharma (Ops Lead)",
  "TL01": "Priya Verma (TL North)",
  "AGENT01": "Suresh Kumar (AGENT)",
}

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = async () => {
    if(!code ||!pass) return alert("ID & Password pettu bro");
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ agentCode: code.toUpperCase(), password: pass })
    });
    const data = await res.json();
    setLoading(false);
    if(data.tempToken){
      document.cookie = `temp2faToken=${data.tempToken}; path=/; max-age=300`;
      window.location.href = "/2fa";
    } else {
      alert(data.error || "Login Fail");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] flex flex-col items-center justify-center p-4">
      {/* FINAL CLEAR LOGO - No glitch, direct SVG */}
      <div className="animate-float">
        <svg width="190" height="85" viewBox="0 0 260 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mainGrad" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFCC00"/>
              <stop offset="25%" stopColor="#00CFFF"/>
              <stop offset="50%" stopColor="#8B5CF6"/>
              <stop offset="75%" stopColor="#F472B6"/>
              <stop offset="100%" stopColor="#FB923C"/>
            </linearGradient>
          </defs>
          {/* Top colorful infinity stroke */}
          <path d="M 20 52 C 10 18, 65 12, 95 40 C 125 68, 155 72, 205 52 C 225 43, 235 30, 220 22 C 210 17, 195 22, 192 28"
            stroke="url(#mainGrad)" strokeWidth="14" strokeLinecap="round" fill="none"/>
          {/* Bottom dark blue stroke */}
          <path d="M 25 52 C 35 78, 85 82, 115 60 L 210 8 L 175 18 L 190 28 L 125 65 C 95 85, 40 88, 20 52 Z"
            fill="none" stroke="#2A2A6E" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Arrow head */}
          <path d="M 185 0 L 240 6 L 180 38 L 168 32 L 195 18 L 165 20 Z" fill="#2A2A6E"/>
        </svg>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-10px)}}.animate-float{animation:float 3s ease-in-out infinite}`}</style>

      <h1 className="text-white text-xl font-bold mt-3">Nexlance Collections System</h1>
      <p className="text-gray-400 text-[10px] tracking-widest mt-1">PRD V0.1 • MANDATORY TOTP 2FA</p>

      <div className="bg-white rounded-2xl p-6 w-full max-w-[380px] mt-6 shadow-2xl">
        <label className="text-[11px] font-bold text-gray-600">USER ID / AGENT CODE</label>
        <input value={code} onChange={e=>setCode(e.target.value)} placeholder="e.g. FOUNDER01" className="w-full border rounded-xl px-3 py-3 mt-1 bg-gray-50 text-sm outline-none" />
        <label className="text-[11px] font-bold text-gray-600 mt-4 block">PASSWORD</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password#1234" className="w-full border rounded-xl px-3 py-3 mt-1 bg-gray-50 text-sm outline-none" />
        <button onClick={doLogin} className="w-full bg-emerald-600 text-white rounded-xl py-3 mt-5 font-bold text-sm">
          {loading? "Checking..." : "Continue to 2FA →"}
        </button>
        <div className="border-t my-4"></div>
        <p className="text-[10px] text-center text-gray-400 font-bold">QUICK ROLE SWITCHER</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {Object.keys(ROLES_MAP).map(c=>(
            <button key={c} onClick={()=>{setCode(c); setPass("Password#1234")}} className="border rounded-lg p-2 text-left bg-gray-50">
              <div className="text-[11px] font-bold">{c}</div>
              <div className="text-[9px] text-gray-500">Pass: Password#1234</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
