"use client"
import { useState } from "react"

export default function Page() {
  const [page, setPage] = useState("login")

  if (page === "otp") {
    return (
      <div style={{display:'flex', height:'100vh'}}>
        <div style={{width:'50%', background:'black', color:'white', padding:'60px'}}>
          <h1>Your security comes first.</h1>
          <p>Two-factor helps protect your account.</p>
        </div>
        <div style={{width:'50%', padding:'60px'}}>
          <h2>Two-factor authentication</h2>
          <p>Enter 6-digit code</p>
          <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
            <input value="2" style={{width:'40px', height:'40px', textAlign:'center'}} />
            <input value="3" style={{width:'40px', height:'40px', textAlign:'center'}} />
            <input value="4" style={{width:'40px', height:'40px', textAlign:'center'}} />
            <input value="9" style={{width:'40px', height:'40px', textAlign:'center'}} />
            <input value="9" style={{width:'40px', height:'40px', textAlign:'center'}} />
            <input value="7" style={{width:'40px', height:'40px', textAlign:'center'}} />
          </div>
          <button style={{marginTop:'20px', width:'100%', background:'black', color:'white', padding:'10px'}}>Verifying...</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{display:'flex', height:'100vh'}}>
      <div style={{width:'50%', background:'black', color:'white', padding:'60px'}}>
        <h1>NEXLANCE</h1>
      </div>
      <div style={{width:'50%', padding:'60px', textAlign:'center'}}>
        <h1>Welcome back</h1>
        <p>Sign in to your Nexlance account</p>
        <input placeholder="Enter your User ID" style={{width:'100%', border:'1px solid gray', padding:'10px', marginTop:'20px'}} />
        <input placeholder="Enter your password" style={{width:'100%', border:'1px solid gray', padding:'10px', marginTop:'10px'}} />
        <button onClick={()=>setPage("otp")} style={{marginTop:'20px', width:'100%', background:'black', color:'white', padding:'12px'}}>Sign in</button>
      </div>
    </div>
  )
}
