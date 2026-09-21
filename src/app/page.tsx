"use client"
import { useState } from "react"

export default function Page() {
  const [screen, setScreen] = useState("LOGIN")

  if (screen === "DASHBOARD") {
    return (
      <div style={{padding:'40px', fontFamily:'sans-serif'}}>
        <h1 style={{fontSize:'28px', fontWeight:'bold'}}>Welcome to Nexlance Dashboard 🎉</h1>
        <p>Login Successful! Ippudu work avuthondi.</p>
        <button onClick={()=>setScreen("LOGIN")} style={{marginTop:'20px', padding:'10px 20px', background:'black', color:'white', borderRadius:'8px'}}>Logout</button>
      </div>
    )
  }

  if (screen === "OTP") {
    return (
      <div style={{display:'flex', height:'100vh'}}>
        <div style={{width:'50%', background:'black', color:'white', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1>Your security comes first.</h1>
          <p style={{color:'#aaa'}}>Two-factor helps protect your account.</p>
        </div>
        <div style={{width:'50%', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h2>Two-factor authentication</h2>
          <p>Enter 6-digit code</p>
          <div style={{display:'flex', gap:'15px', margin:'20px 0'}}>2 3 4 9 9 7</div>
          <button onClick={()=>setScreen("DASHBOARD")} style={{background:'black', color:'white', padding:'12px', borderRadius:'8px', cursor:'pointer', fontWeight:'bold'}}>
            Verify & Continue
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{display:'flex', height:'100vh'}}>
      <div style={{width:'50%', background:'black', color:'white', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1>NEXLANCE</h1>
        <p style={{color:'#aaa'}}>Manage allocations, agent activity...</p>
      </div>
      <div style={{width:'50%', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:'100%', maxWidth:'350px'}}>
          <h1 style={{textAlign:'center', fontWeight:'bold', fontSize:'28px'}}>Welcome back</h1>
          <p style={{textAlign:'center', color:'#666', fontSize:'14px', marginBottom:'20px'}}>Sign in to your Nexlance account</p>
          <input placeholder="Enter your User ID" style={{width:'100%', border:'1px solid #ccc', padding:'12px', borderRadius:'8px', marginBottom:'10px'}} />
          <input placeholder="Enter your password" type="password" style={{width:'100%', border:'1px solid #ccc', padding:'12px', borderRadius:'8px'}} />
          <button onClick={()=>setScreen("OTP")} style={{marginTop:'20px', width:'100%', background:'black', color:'white', padding:'12px', borderRadius:'8px', fontWeight:'bold', cursor:'pointer'}}>Sign in</button>
        </div>
      </div>
    </div>
  )
}
