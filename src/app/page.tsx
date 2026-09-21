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

      {/* INFINITY LOGO WITH ANIMATION - 2nd pic la */}
      <div className="relative">
        <img
          src="/logo.png"
          alt="Nexlance Logo"
          className="w-32 h-20 object-contain"
          style={{ animation: 'logoFloat 3s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 opacity-30 -z-10"
             style={{ animation: 'glowPulse 3s ease-in-out infinite' }}>
        </div>
        <style>{`
          @keyframes logoFloat {
            0%,100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.05); }
          }
          @keyframes glowPulse {
            0%,100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>

      <h1 className="text-white text-xl font-bold mt-4">Nexlance Collections System</h1>
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
