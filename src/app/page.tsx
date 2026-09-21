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
    <div className="min-h-screen bg-[#0B1020] flex flex-col items-center justify-center p-4 font-sans">

      {/* CLEAR ANIMATION LOGO - Nee 2nd pic exact */}
      <div style={{ animation: 'float 3s ease-in-out infinite' }}>
        <svg width="180" height="90" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD600">
                <animate attributeName="stop-color" values="#FFD600;#00D1FF;#8A2BE2;#FF6EC7;#FF8A00;#FFD600" dur="3s" repeatCount="indefinite"/>
              </stop>
              <stop offset="50%" stopColor="#8A2BE2">
                <animate attributeName="stop-color" values="#8A2BE2;#FF6EC7;#FF8A00;#FFD600;#00D1FF;#8A2BE2" dur="3s" repeatCount="indefinite"/>
              </stop>
              <stop offset="100%" stopColor="#FF8A00">
                <animate attributeName="stop-color" values="#FF8A00;#FFD600;#00D1FF;#8A2BE2;#FF6EC7;#FF8A00" dur="3s" repeatCount="indefinite"/>
              </stop>
            </linearGradient>
          </defs>
          {/* Main infinity with arrow - thick */}
          <path d="M 15 50 Q 5 15, 50 30 Q 95 50, 110 50 Q 125 50, 170 30 Q 195 20, 185 50 Q 175 80, 130 75 Q 95 70, 110 50 L 180 5 L 145 15 L 120 55"
            fill="none" stroke="url(#g)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Bottom dark shadow line like 2nd pic */}
          <path d="M 35 55 Q 75 70, 110 50 Q 145 30, 185 40"
            fill="none" stroke="#312E81" strokeWidth="10" strokeLinecap="round" opacity="0.9"/>
          <path d="M 50 35 Q 85 25, 110 35"
            fill="none" stroke="#312E81" strokeWidth="8" strokeLinecap="round" opacity="0.9"/>
        </svg>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-10px) scale(1.05)}}`}</style>

      <h1 className="text-white text-xl font-bold mt-2">Nexlance Collections System</h1>
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
            <button key={c} onClick={()=>{setCode(c); setPass("Password#1234")}} className="border rounded-lg p-2 text-left bg-gray-50 hover:bg-gray-100">
              <div className="text-[11px] font-bold">{c}</div>
              <div className="text-[9px] text-gray-500">Pass: Password#1234</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
