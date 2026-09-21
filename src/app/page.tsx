"use client"
import { useState } from "react"

export default function Page() {
  const [screen, setScreen] = useState("LOGIN")
  const [userId, setUserId] = useState("")

  const selectRole = (id:string) => {
    setUserId(id)
  }

  if (screen === "DASHBOARD") {
    return (
      <div style={{display:'flex', minHeight:'100vh', fontFamily:'sans-serif', background:'#f1f5f9'}}>
        <div style={{width:'240px', background:'#0f172a', color:'white', padding:'15px'}}>
          <div style={{background:'#1e293b', padding:'10px', borderRadius:'8px', fontSize:'12px', fontWeight:'bold'}}>NX Nexlance Collections System</div>
          <div style={{marginTop:'20px', fontSize:'11px', color:'#64748b'}}>MAIN NAVIGATION</div>
          <div style={{background:'#2563eb', padding:'10px', borderRadius:'8px', marginTop:'10px', fontSize:'12px'}}>Dashboards & MIS</div>
          <div style={{background:'#2563eb', padding:'10px', borderRadius:'8px', marginTop:'10px', fontSize:'12px'}}>Agent Worklist Queue</div>
          <div style={{padding:'10px', fontSize:'12px', color:'#94a3b8'}}>Allocation & Assignment</div>
          <button onClick={()=>setScreen("LOGIN")} style={{marginTop:'30px', background:'#ef4444', color:'white', padding:'8px', width:'100%', borderRadius:'6px'}}>Logout</button>
        </div>
        <div style={{flex:1, padding:'20px'}}>
          <div style={{background:'#0f172a', color:'white', padding:'12px', borderRadius:'8px', fontSize:'13px'}}>Agent Worklist - Priority Queue Mode</div>
          <div style={{background:'white', padding:'15px', borderRadius:'8px', marginTop:'15px'}}>
            <b>Amitabh Joshi</b> <span style={{background:'#fee2e2', color:'red', fontSize:'10px', padding:'2px 6px', borderRadius:'4px'}}>F2: Broken PTP</span>
            <div style={{marginTop:'15px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'10px', fontSize:'11px', color:'#666'}}>
              <div>MASKED PHONE<br/>XXXXXXXXXX</div>
              <div>BORROWER CITY<br/>Pune</div>
              <div>DPD BUCKET<br/><b>90+ DPD (105 Days)</b></div>
              <div>TOTAL DUE<br/><b style={{color:'green'}}>₹2,42,000</b></div>
            </div>
          </div>
          <div style={{background:'white', padding:'15px', borderRadius:'8px', marginTop:'15px'}}>
            <div style={{fontSize:'12px', marginBottom:'10px'}}>Promised Amount (₹)</div>
            <input style={{width:'100%', border:'1px solid #ddd', padding:'8px', borderRadius:'6px'}} placeholder="Enter amount"/>
            <button style={{width:'100%', background:'#2563eb', color:'white', padding:'10px', borderRadius:'8px', marginTop:'15px', fontWeight:'bold'}}>Save Disposition & Advance Queue - WORK!</button>
          </div>
        </div>
      </div>
    )
  }

  if (screen === "OTP") {
    return (
      <div style={{minHeight:'100vh', background:'#0f172a', display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'sans-serif'}}>
        <div style={{background:'white', padding:'30px', borderRadius:'12px', width:'350px', textAlign:'center'}}>
          <h2 style={{fontWeight:'bold'}}>Two-factor authentication</h2>
          <p style={{fontSize:'13px', color:'#666'}}>Enter 6-digit code sent to your device</p>
          <div style={{display:'flex', gap:'10px', justifyContent:'center', margin:'20px 0', fontSize:'20px', fontWeight:'bold'}}>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>2</span>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>3</span>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>4</span>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>9</span>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>9</span>
            <span style={{border:'1px solid #ddd', padding:'8px 12px', borderRadius:'6px'}}>7</span>
          </div>
          <button onClick={()=>setScreen("DASHBOARD")} style={{width:'100%', background:'#059669', color:'white', padding:'12px', borderRadius:'8px', fontWeight:'bold'}}>Verify & Continue</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight:'100vh', background:'#0f172a', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontFamily:'sans-serif', padding:'20px'}}>
      <div style={{width:'48px', height:'48px', background:'#34d399', borderRadius:'12px', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'24px', marginBottom:'15px'}}>⚡</div>
      <h1 style={{color:'white', fontSize:'22px', fontWeight:'bold'}}>Nexlance Collections System</h1>
      <p style={{color:'#94a3b8', fontSize:'11px', letterSpacing:'1px', marginBottom:'25px'}}>PRD V0.1 • MANDATORY TOTP 2FA • INTERNAL AUTH</p>
      
      <div style={{background:'white', width:'100%', maxWidth:'420px', borderRadius:'16px', padding:'25px'}}>
        <label style={{fontSize:'11px', fontWeight:'bold', color:'#334155'}}>USER ID / AGENT CODE</label>
        <div style={{display:'flex', alignItems:'center', border:'1px solid #e2e8f0', borderRadius:'10px', padding:'10px 12px', marginTop:'6px', background:'#f8fafc'}}>
          <span style={{marginRight:'8px'}}>👤</span>
          <input value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder="e.g.  FOUNDER01,  AGENT01" style={{border:'none', outline:'none', width:'100%', background:'transparent', fontSize:'13px'}} />
        </div>

        <label style={{fontSize:'11px', fontWeight:'bold', color:'#334155', marginTop:'15px', display:'block'}}>PASSWORD</label>
        <div style={{display:'flex', alignItems:'center', border:'1px solid #e2e8f0', borderRadius:'10px', padding:'10px 12px', marginTop:'6px', background:'#f8fafc'}}>
          <span style={{marginRight:'8px'}}>🔒</span>
          <input type="password" defaultValue="Password#1234" style={{border:'none', outline:'none', width:'100%', background:'transparent', fontSize:'13px'}} />
        </div>

        <button onClick={()=>setScreen("OTP")} style={{width:'100%', background:'#059669', color:'white', padding:'12px', borderRadius:'10px', fontWeight:'bold', marginTop:'18px', border:'none', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center', gap:'6px'}}>
          Continue to 2FA →
        </button>

        <div style={{borderTop:'1px solid #f1f5f9', marginTop:'20px', paddingTop:'15px'}}>
          <p style={{fontSize:'11px', fontWeight:'bold', color:'#94a3b8', textAlign:'center', marginBottom:'10px'}}>QUICK ROLE SWITCHER (PRELOADED DEMO)</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
            <div onClick={()=>selectRole("FOUNDER01")} style={{background:'#f5f3ff', border:'1px solid #ddd6fe', padding:'10px', borderRadius:'8px', cursor:'pointer'}}>
              <div style={{fontSize:'12px', fontWeight:'bold', color:'#4c1d95'}}>Founder</div>
              <div style={{fontSize:'10px', color:'#7c3aed'}}>FOUNDER01</div>
            </div>
            <div onClick={()=>selectRole("OPS01")} style={{background:'#eff6ff', border:'1px solid #bfdbfe', padding:'10px', borderRadius:'8px', cursor:'pointer'}}>
              <div style={{fontSize:'12px', fontWeight:'bold'}}>Ops Manager</div>
              <div style={{fontSize:'10px', color:'#2563eb'}}>OPS01</div>
            </div>
            <div onClick={()=>selectRole("TL01")} style={{background:'#fefce8', border:'1px solid #fde68a', padding:'10px', borderRadius:'8px', cursor:'pointer'}}>
              <div style={{fontSize:'12px', fontWeight:'bold', color:'#854d0e'}}>Team Leader</div>
              <div style={{fontSize:'10px', color:'#ca8a04'}}>TL01</div>
            </div>
            <div onClick={()=>selectRole("AGENT01")} style={{background:'#f0fdf4', border:'1px solid #bbf7d0', padding:'10px', borderRadius:'8px', cursor:'pointer'}}>
              <div style={{fontSize:'12px', fontWeight:'bold', color:'#166534'}}>Agent (Calling)</div>
              <div style={{fontSize:'10px', color:'#16a34a'}}>AGENT01</div>
            </div>
            <div onClick={()=>selectRole("AUDITOR01")} style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'10px', borderRadius:'8px', gridColumn:'span 2', cursor:'pointer'}}>
              <div style={{fontSize:'12px', fontWeight:'bold'}}>External Auditor (Read-Only)</div>
              <div style={{fontSize:'10px', color:'#64748b'}}>AUDITOR01</div>
            </div>
          </div>
          <p style={{fontSize:'10px', color:'#94a3b8', textAlign:'center', marginTop:'10px'}}>Password: Password#1234</p>
        </div>
      </div>
    </div>
  )
}
