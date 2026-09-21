"use client";
import { useState } from "react";

export default function LoginPage(){
  const [code,setCode]=useState(""); 
  const [pass,setPass]=useState("");
  
  const login=async()=>{
    if(!code) return alert("ID pettu bro");
    if(pass!=="Password#1234") return alert("Password: Password#1234 pettali");
    const res=await fetch("/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({agentCode:code,password:pass})
    });
    const d=await res.json();
    if(d.tempToken){
      document.cookie=`temp2faToken=${d.tempToken}; path=/; max-age=300`;
      window.location.href="/2fa";
    } else {
      alert("Login fail - malli try");
    }
  }

  return(
    <div style={{minHeight:'100vh',background:'#0B1020',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',fontFamily:'sans-serif'}}>
      <div style={{width:56,height:56,background:'#10b981',borderRadius:12,display:'flex',justifyContent:'center',alignItems:'center',fontSize:24}}>⚡</div>
      <h2 style={{color:'white',marginTop:10}}>Nexlance Collections</h2>
      <p style={{color:'#888',fontSize:10,letterSpacing:2}}>LOGIN - STEP 1</p>
      <div style={{background:'white',padding:20,borderRadius:15,width:330,marginTop:15}}>
        <label style={{fontSize:11,fontWeight:'bold'}}>USER ID</label>
        <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="FOUNDER01" style={{width:'100%',padding:12,border:'1px solid #ccc',borderRadius:10,marginTop:5}} />
        <label style={{fontSize:11,fontWeight:'bold',marginTop:10,display:'block'}}>PASSWORD</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password#1234" style={{width:'100%',padding:12,border:'1px solid #ccc',borderRadius:10,marginTop:5}} />
        <button onClick={login} style={{width:'100%',background:'#10b981',color:'white',padding:12,borderRadius:10,marginTop:15,fontWeight:'bold',border:'none'}}>Continue to 2FA →</button>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:15}}>
          <button onClick={()=>{setCode("FOUNDER01"); setPass("Password#1234")}} style={{border:'1px solid #ddd',padding:8,borderRadius:8,fontSize:10}}>FOUNDER01</button>
          <button onClick={()=>{setCode("AGENT01"); setPass("Password#1234")}} style={{border:'1px solid #ddd',padding:8,borderRadius:8,fontSize:10}}>AGENT01</button>
        </div>
      </div>
    </div>
  )
}
