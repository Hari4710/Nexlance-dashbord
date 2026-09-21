"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [page, setPage] = useState("login")
  const [verifying, setVerifying] = useState(false)

  // OTP page lo 2 sec tarwata auto dashboard ki vellali
  useEffect(() => {
    if (page === "otp") {
      setVerifying(true)
      setTimeout(() => {
        setPage("dashboard")
      }, 2000) // 2 sec lo dashboard open avuthadi
    }
  }, [page])

  if (page === "dashboard") {
    return (
      <div style={{padding:'40px'}}>
        <h1 style={{fontSize:'30px', fontWeight:'bold'}}>Welcome to Nexlance Dashboard 🎉</h1>
        <p>Login Successful! Your collections data will come here.</p>
        <button onClick={()=>setPage("login")} style={{marginTop:'20px', padding:'10px 20px', background:'black', color:'white'}}>Logout</button>
      </div>
    )
  }

  if (page === "otp") {
    return (
      <div style={{display:'flex', height:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column', background:'black', color:'white'}}>
        <h2>Two-factor authentication</h2>
        <p>Enter 6-digit code</p>
        <div style={{display:'flex', gap:'15px', margin:'20px', fontSize:'20px'}}>
          <span>2</span><span>3</span><span>4</span><span>9</span><span>9</span><span>7</span>
        </div>
        <div style={{background:'#333', padding:'10px 60px'}}>
          {verifying? "Verifying..." : "Verified!"}
        </div>
      </div>
    )
  }

  return (
    <div style={{display:'flex', height:'100vh'}}>
      <div style={{width:'50%', background:'black', color:'white', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1>NEXLANCE</h1>
        <p style={{color:'gray'}}>Manage allocations, agent activity...</p>
      </div>
      <div style={{width:'50%', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <h1 style={{textAlign:'center'}}>Welcome back</h1>
        <p style={{textAlign:'center'}}>Sign in to your Nexlance account</p>
        <input placeholder="Enter your User ID" style={{width:'100%', border:'1px solid gray', padding:'10px', marginTop:'20px'}} />
        <input placeholder="Enter your password" style={{width:'100%', border:'1px solid gray', padding:'10px', marginTop:'10px'}} />
        <button onClick={()=>setPage("otp")} style={{marginTop:'20px', width:'100%', background:'black', color:'white', padding:'12px'}}>Sign in</button>
      </div>
    </div>
  )
}
