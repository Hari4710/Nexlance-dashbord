"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [screen, setScreen] = useState("LOGIN")

  // Page reload ayina kuda dashboard lo ne undali ani
  useEffect(()=>{
    const saved = localStorage.getItem("nex_screen")
    if(saved) setScreen(saved)
  },[])

  const goTo = (s:string) => {
    localStorage.setItem("nex_screen", s)
    setScreen(s)
  }

  // --- FULL DASHBOARD (Nee 2nd Photo la) ---
  if (screen === "DASHBOARD") {
    return (
      <div style={{display:'flex', minHeight:'100vh', fontFamily:'sans-serif', background:'#f0f4f8'}}>
        <div style={{width:'250px', background:'#0f172a', color:'white', padding:'20px'}}>
          <div style={{fontWeight:'bold', marginBottom:'30px', background:'#1e293b', padding:'10px', borderRadius:'6px'}}>NX Nexlance Collections System</div>
          <div style={{background:'#2563eb', padding:'10px', borderRadius:'6px', marginBottom:'20px'}}>📊 Dashboards & MIS</div>
          <div style={{fontSize:'12px', color:'#94a3b8', lineHeight:'35px'}}>
            <div>📞 Agent Worklist Queue</div>
            <div>📦 Allocation & Assignment</div>
            <div>💰 Payment Recon & Queue</div>
            <div>👤 Client Master</div>
            <div>👥 User & Role Admin</div>
            <div>🛡️ Audit Log & Compliance</div>
          </div>
          <button onClick={()=>{localStorage.clear(); setScreen("LOGIN")}} style={{marginTop:'40px', background:'red', color:'white', padding:'8px 15px', borderRadius:'6px', width:'100%'}}>Logout</button>
        </div>

        <div style={{flex:1, padding:'20px'}}>
          <div style={{background:'#0f172a', color:'white', padding:'15px', borderRadius:'8px', display:'flex', justifyContent:'space-between'}}>
            <b>Executive Oversight Dashboard - All Portfolio Clients - WORK!- Mundhu vunna dhani remove cheyale ✅</b>
            <span style={{fontSize:'12px', background:'#1e293b', padding:'5px 10px', borderRadius:'4px'}}>All Portfolio Clients</span>
          </div>
          
          <div style={{background:'white', padding:'20px', borderRadius:'8px', marginTop:'20px'}}>
            <h3 style={{fontSize:'14px', marginBottom:'15px'}}>📊 DPD Bucket Reservation Summary</h3>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px', color:'#666', borderBottom:'1px solid #eee', paddingBottom:'10px'}}>
              <span>0-30 DPD</span><span>₹ 8,42,000</span><span>0%</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'12px', color:'#666', paddingTop:'10px'}}>
              <span>31-60 DPD</span><span>₹ 5,12,000</span><span>0%</span>
            </div>
          </div>

          <div style={{background:'white', padding:'20px', borderRadius:'8px', marginTop:'20px', height:'250px'}}>
            <h3 style={{fontSize:'14px'}}>📈 Daily Collections Trend (INR) - Pending Live - DIFFERENT <span style={{background:'#dcfce7', color:'green', padding:'2px 6px', borderRadius:'10px', fontSize:'10px'}}>LIVE</span></h3>
            <div style={{marginTop:'40px', height:'150px', borderBottom:'1px solid #ddd', display:'flex', alignItems:'flex-end', gap:'10px'}}>
              <div style={{flex:1, height:'30%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
              <div style={{flex:1, height:'50%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
              <div style={{flex:1, height:'70%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
              <div style={{flex:1, height:'80%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
              <div style={{flex:1, height:'65%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
              <div style={{flex:1, height:'90%', background:'linear-gradient(to top, #e0f2fe, #22c55e)', borderRadius:'10px 10px 0 0'}}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (screen === "OTP") {
    return (
      <div style={{display:'flex', height:'100vh'}}>
        <div style={{width:'50%', background:'black', color:'white', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1>Your security comes first.</h1>
        </div>
        <div style={{width:'50%', padding:'60px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h2>Two-factor authentication</h2>
          <p>Enter 6-digit code</p>
          <div style={{display:'flex', gap:'15px', margin:'20px 0'}}>2 3 4 9 9 7</div>
          <button onClick={()=>goTo("DASHBOARD")} style={{background:'black', color:'white', padding:'12px', borderRadius:'8px', cursor:'pointer', fontWeight:'bold'}}>
            Verify & Continue to Dashboard
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
          <button onClick={()=>goTo("OTP")} style={{marginTop:'20px', width:'100%', background:'black', color:'white', padding:'12px', borderRadius:'8px', fontWeight:'bold', cursor:'pointer'}}>Sign in</button>
        </div>
      </div>
    </div>
  )
}
