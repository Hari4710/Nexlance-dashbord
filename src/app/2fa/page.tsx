"use client";
import { useState } from "react";
export default function TwoFA(){
  const [otp,setOtp]=useState("");
  const verify=async()=>{
    const res=await fetch("/api/auth/verify-2fa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({otp})});
    const d=await res.json();
    if(d.success){
      document.cookie=`finalAuthToken=${d.finalToken}; path=/;`;
      window.location.href="/dashboard";
    } else alert("OTP 123456 pettu");
  }
  return(
    <div style={{minHeight:'100vh',background:'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{background:'white',padding:25,borderRadius:15,width:330}}>
        <h3>Enter OTP</h3><p style={{fontSize:12}}>Demo OTP: 123456</p>
        <input value={otp} onChange={e=>setOtp(e.target.value)} maxLength={6} placeholder="000000" style={{width:'100%',fontSize:28,letterSpacing:10,textAlign:'center',padding:10,marginTop:15}} />
        <button onClick={verify} style={{width:'100%',background:'black',color:'white',padding:12,borderRadius:10,marginTop:15}}>Verify</button>
      </div>
    </div>
  )
}
