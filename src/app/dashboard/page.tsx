"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [active, setActive] = useState("Agent Worklist Queue");
  const [showRoles, setShowRoles] = useState(false);
  const [show2FA, setShow2FA] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [showProvision, setShowProvision] = useState(false);
  const [role, setRole] = useState("Karthick Founder (FOUNDER)");
  const [client, setClient] = useState("All Portfolio Clients");
  const [tick, setTick] = useState(0);
  const [qIdx, setQIdx] = useState(0);

  const doLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      document.cookie = "finalAuthToken=; path=/; max-age=0";
      document.cookie = "temp2faToken=; path=/; max-age=0";
      localStorage.clear();
      window.location.href = "/";
    }
  };

  const [contactMode, setContactMode] = useState("Call");
  const [disposition, setDisposition] = useState("PTP Taken");
  const [promisedAmt, setPromisedAmt] = useState("");
  const [promisedDate, setPromisedDate] = useState("");
  const [followUpDate, setFollowUpDate] = useState("09/17/2026");
  const [remarks, setRemarks] = useState("");
  const [activityLogs, setActivityLogs] = useState([
    { type: "PTP Taken", amt: "20,000", date: "Sept 10", agent: "USR_AGT02", time: "04:45 PM", next: "2026-09-10" }
  ]);

  const [users, setUsers] = useState([
    { id: "USR_FOUNDER", name: "Karthick Founder", email: "karthick@nexlance.in", role: "FOUNDER", tl: "-", totp: true },
    { id: "USR_OPS01", name: "Rohan Sharma (Ops Lead)", email: "rohan.ops@nexlance.in", role: "OPS_MANAGER", tl: "-", totp: true },
    { id: "USR_TL01", name: "Priya Verma (TL North)", email: "priya.tl@nexlance.in", role: "TEAM_LEADER", tl: "-", totp: true },
    { id: "USR_TL02", name: "Amit Patel (TL West)", email: "amit.tl@nexlance.in", role: "TEAM_LEADER", tl: "-", totp: true },
    { id: "USR_AGT01", name: "Suresh Kumar", email: "suresh.agent@nexlance.in", role: "AGENT", tl: "USR_TL01", totp: true },
    { id: "USR_AGT02", name: "Anita Roy", email: "anita.agent@nexlance.in", role: "AGENT", tl: "USR_TL01", totp: true },
    { id: "USR_AGT03", name: "Vijay Singh", email: "vijay.agent@nexlance.in", role: "AGENT", tl: "USR_TL02", totp: true },
    { id: "USR_AGT04", name: "Meena Kumari (Inactive Today)", email: "meena.agent@nexlance.in", role: "AGENT", tl: "USR_TL01", totp: true },
    { id: "USR_AUDITOR", name: "Sanjay Gupta (External Auditor)", email: "auditor@auditcorp.com", role: "AUDITOR", tl: "-", totp: true },
  ]);

  const [form, setForm] = useState({ fullName: "", email: "", role: "Agent", teamLeader: "Select Team Leader" });

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 150);
    return () => clearInterval(id);
  }, []);

  const rolesList = ["Karthick Founder (FOUNDER)", "Rohan Sharma (Ops Lead) (OPS_MANAGER)", "Priya Verma (TL North) (TEAM_LEADER)", "Amit Patel (TL West) (TEAM_LEADER)", "Suresh Kumar (AGENT)", "Anita Roy (AGENT)", "Vijay Singh (AGENT)", "Meena Kumari (Inactive Today) (AGENT)", "Sanjay Gupta (External Auditor) (AUDITOR)"];
  const clients = ["All Portfolio Clients", "Kissht Digital Finance", "HDFC Bank Personal Loans", "Bajaj Finance Consumer Durable"];
  const menu = ["Dashboards & MIS", "Agent Worklist Queue", "Allocation & Assignment", "Payment Recon & Queue", "Client Master", "User & Role Admin", "Audit Log & Compliance"];
  const teamLeaders = ["Priya Verma (TL North)", "Amit Patel (TL West)", "Rohan Sharma (Ops Lead)", "Karthick Founder"];

  const queueAccounts = [
    { name: "Amitabh Joshi", tag: "P3: Broken PTP", loan: "KST-908126", phone: "XXXXXX5678", city: "Pune", dpd: "90+ DPD (105 Days)", due: "₹2,42,000" },
    { name: "Ravi Kumar", tag: "P1: PTP Due Today", loan: "KST-908127", phone: "XXXXXX1234", city: "Mumbai", dpd: "1-30 DPD", due: "₹45,500" },
    { name: "Sunita Patel", tag: "P2: Callback Due Today", loan: "KST-908128", phone: "XXXXXX9012", city: "Delhi", dpd: "31-60 DPD", due: "₹78,000" },
    { name: "Vikram Singh", tag: "P3: Broken PTP", loan: "KST-908129", phone: "XXXXXX3456", city: "Bangalore", dpd: "61-90 DPD", due: "₹1,20,000" },
    { name: "Anjali Sharma", tag: "P1: PTP Due Today", loan: "KST-908130", phone: "XXXXXX7890", city: "Chennai", dpd: "1-30 DPD", due: "₹55,000" },
    { name: "Rajesh Kumar", tag: "P2: Callback Due Today", loan: "KST-908131", phone: "XXXXXX2345", city: "Kolkata", dpd: "31-60 DPD", due: "₹92,000" },
    { name: "Priya Desai", tag: "P3: Broken PTP", loan: "KST-908132", phone: "XXXXXX6789", city: "Hyderabad", dpd: "90+ DPD", due: "₹1,80,000" },
  ];

  const pts = [
    { x: 40, y: 150 + Math.sin(tick * 0.05) * 8 },
    { x: 140, y: 110 + Math.cos(tick * 0.07) * 10 },
    { x: 240, y: 95 + Math.sin(tick * 0.06) * 12 },
    { x: 340, y: 25 + Math.cos(tick * 0.08) * 15 },
    { x: 440, y: 105 + Math.sin(tick * 0.05) * 9 },
    { x: 540, y: 165 + Math.cos(tick * 0.07) * 11 },
    { x: 640, y: 20 + Math.sin(tick * 0.06) * 14 },
  ];
  const pathD = `M${pts[0].x},${pts[0].y} C${pts[1].x},${pts[1].y} ${pts[2].x},${pts[2].y} ${pts[3].x},${pts[3].y} S${pts[5].x},${pts[5].y} ${pts[6].x},${pts[6].y}`;
  const areaD = `${pathD} L640,190 L40,190 Z`;

  const provisionUser = () => {
    if (!form.fullName.trim()) { alert("Full Name is required!"); return; }
    if (!form.email.includes("@")) { alert("Valid Email is required!"); return; }
    if (form.teamLeader === "Select Team Leader") { alert("Please select Team Leader!"); return; }
    const newId = `USR_${form.fullName.split(" ")[0].toUpperCase()}_${Date.now().toString().slice(-4)}`;
    const newUser = { id: newId, name: form.fullName, email: form.email, role: form.role.toUpperCase().replace(" ", "_"), tl: form.teamLeader, totp: true };
    setUsers([newUser,...users]);
    setForm({ fullName: "", email: "", role: "Agent", teamLeader: "Select Team Leader" });
    setShowProvision(false);
    alert(`${newUser.name} Provisioned Successfully!`);
  };

  const saveDisposition = () => {
    if (!promisedAmt && disposition === "PTP Taken") { alert("Promised Amount is required!"); return; }
    const newLog = { type: disposition, amt: promisedAmt || "0", date: new Date().toLocaleDateString(), agent: role.split(" ")[0], time: new Date().toLocaleTimeString(), next: followUpDate };
    setActivityLogs([newLog,...activityLogs]);
    alert(`Disposition Saved! Account: ${queueAccounts[qIdx].name}`);
    setQIdx((qIdx + 1) % queueAccounts.length);
    setPromisedAmt(""); setRemarks("");
  };

  const lightGradient = "linear-gradient(90deg, #FDE68A 0%, #A7F3D0 20%, #93C5FD 40%, #C4B5FD 60%, #F9A8D4 80%, #FDBA74 100%)";
  const lightGlow = "linear-gradient(90deg, #FEF3C7 0%, #D1FAE5 25%, #DBEAFE 50%, #EDE9FE 75%, #FCE7F3 100%)";

  return (
    <div className="min-h-screen bg-[#eef1f6] flex font-sans">
      <style>{`
        @keyframes softGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(253,230,138,0.3), 0 0 12px rgba(147,197,253,0.25); }
          50% { box-shadow: 0 0 14px rgba(196,181,253,0.35), 0 0 18px rgba(249,168,212,0.3); }
        }
        @keyframes softFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-2px) scale(1.02); }
        }
   .animated-logo { animation: softGlow 3s ease-in-out infinite, softFloat 3s ease-in-out infinite; }
      `}</style>

      <aside className="w-[280px] bg-[#0f172a] text-slate-400 flex flex-col shrink-0">
        <div className="p-4 border-b border-white/10 flex gap-3 items-center">
          <div className="relative w-[44px] h-[44px] min-w-[44px] max-w-[44px] aspect-square bg-black rounded-xl flex items-center justify-center overflow-hidden ring-1 ring-white/15 shrink-0 animated-logo">
            <div className="absolute inset-0 opacity-40 rounded-xl" style={{ background: lightGlow }}></div>
            <img src="/logo.png" alt="Nexlance" className="w-[28px] h-[28px] object-contain relative z-10" />
          </div>
          <div className="flex-1">
            <div className="flex gap-2 items-start">
              <p className="text-white text-[13px] font-bold leading-[15px]">Nexlance Collections<br />System</p>
              <span className="bg-white/10 text-slate-300 text-[7px] px-1.5 py-0.5 rounded leading-[8px] font-bold border border-white/10">v1.0<br />System<br />of<br />Record</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 text-[10px] tracking-widest font-bold">MAIN NAVIGATION</div>
        <nav className="px-3 space-y-2.5 flex-1">
          {menu.map((m) => {
            const sel = active === m;
            return (
              <div
                key={m}
                onClick={() => setActive(m)}
                className={`px-4 py-3.5 rounded-full cursor-pointer text-[13px] flex items-center gap-3 transition-all duration-300
                ${sel? "text-[#1e1b4b] font-bold shadow-[0_4px_16px_rgba(196,181,253,0.35)] scale-[1.01] border border-white/20" : "hover:bg-white/10 text-slate-400 hover:text-white bg-white/[0.04]"}`}
                style={sel? { background: lightGradient } : {}}
              >
                <span className="text-[15px]">{m === "Dashboards & MIS"? "📊" : m.includes("Agent")? "📞" : m.includes("Allocation")? "🔀" : m.includes("Payment")? "💳" : m.includes("Client")? "🏢" : m.includes("User")? "👥" : "🛡️"}</span>
                <span className="flex-1 leading-[16px]">{m}</span>
                {m.includes("Agent") && <span className={`text-[7px] px-2 py-0.5 rounded-full font-bold ${sel? "bg-black/10 text-[#1e1b4b]" : "bg-white/10"}`}>Priority Sorted</span>}
                {sel && <span className="font-bold">→</span>}
              </div>
            );
          })}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button onClick={doLogout} className="w-full py-3 rounded-full text-[12px] font-bold shadow-md text-[#1e1b4b] border border-white/20" style={{ background: lightGradient }}>Logout →</button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="h-[72px] bg-[#0f172a] flex items-center gap-2 px-3 relative z-[300] border-b border-white/10">
          <div className="relative"><div onClick={() => { setShow2FA(!show2FA); setShowRoles(false); setShowClients(false); }} className="bg-[#1e293b] border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-full text-[9px] leading-3 text-center cursor-pointer"><p className="font-bold">TOTP</p><p>2FA</p><p>Verified</p></div>{show2FA && (<div className="absolute top-[60px] left-0 w-[360px] bg-[#1a1d29] rounded-[16px] shadow-2xl z-[500] border border-emerald-500/30 overflow-hidden"><div className="bg-emerald-500/10 p-3"><p className="text-emerald-300 font-bold text-xs">TOTP 2FA Verified - {users.filter((u) => u.totp).length}/{users.length}</p></div>{users.map((r, i) => (<div key={i} className="px-4 py-2.5 flex justify-between border-b border-white/5"><span className="text-white text-[11px]">{r.name}</span><span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-2 py-1 rounded-full">Verified</span></div>))}</div>)}</div>
          <div className="bg-[#1e293b] border border-white/10 px-2 py-2 rounded-full flex items-center gap-1"><span className="text-[7px] text-slate-400 leading-3">Switch<br />Active<br />Role:</span><div className="relative"><div onClick={() => { setShowRoles(!showRoles); setShow2FA(false); setShowClients(false); }} className="bg-[#0f172a] border border-white/10 text-white text-[10px] px-2 py-1.5 rounded-full cursor-pointer flex items-center gap-2 w-[220px] justify-between"><span className="truncate">{role}</span><span>▼</span></div>{showRoles && (<div className="absolute top-[36px] left-0 w-[360px] bg-[#1a1d29] rounded-[16px] shadow-2xl z-[500] border border-white/10 overflow-hidden max-h-[70vh] overflow-y-auto">{rolesList.map((r, i) => { const sel = role === r; return (<div key={i} onClick={() => { setRole(r); setShowRoles(false); }} className={`px-4 py-3 flex justify-between items-center border-b border-white/10 hover:bg-white/10 cursor-pointer ${sel? "bg-blue-500/10" : ""}`}><span className="text-white text-[12px] font-bold">{r}</span><div className={`w-5 h-5 rounded-full border flex items-center justify-center ${sel? "border-blue-400" : "border-white/30"}`}>{sel && <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>}</div></div>); })}</div>)}</div></div>
          <div className="ml-auto flex items-center gap-2">
            <div className="bg-[#1e293b] border border-white/10 px-2 py-1.5 rounded-full flex items-center gap-2"><div className="w-7 h-7 rounded-full flex items-center justify-center text-[#1e1b4b] text-[10px] font-bold" style={{ background: lightGradient }}>K</div><div><p className="text-white text-[10px] font-bold leading-3">Karthick<br />Founder</p><p className="text-[7px] text-slate-400">karthick@nexlance.in</p></div><span className="bg-[#a855f7]/20 text-[#d8b4fe] text-[7px] px-1.5 py-0.5 rounded-full">Founder</span></div>
            <button onClick={doLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-[10px] font-bold">Logout</button>
          </div>
        </div>
        <div className="p-4 bg-[#eef1f6] min-h-[calc(100vh-72px)]">
          {active === "Agent Worklist Queue" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">📞</div><div><h2 className="text-white font-bold text-[13px]">Agent Worklist - Priority Queue Mode</h2><p className="text-[8px] text-slate-400">Priority Order: PTP Due Today - Callback Due Today - Broken PTP</p></div></div><div className="flex items-center gap-2"><button onClick={() => setQIdx(Math.max(0, qIdx - 1))} className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-white">{"<"}</button><div className="bg-white/10 text-white text-[9px] px-3 py-1.5 rounded-full text-center border border-white/10">Account<br />{qIdx + 1} of {queueAccounts.length}</div><button onClick={() => setQIdx(Math.min(queueAccounts.length - 1, qIdx + 1))} className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-white">{">"}</button></div></div>
              <div className="bg-white border rounded-2xl p-4"><div className="flex justify-between items-center"><div className="flex items-center gap-2"><h3 className="font-bold text-[14px]">{queueAccounts[qIdx].name}</h3><span className="bg-red-50 text-red-600 border border-red-200 text-[9px] px-2 py-0.5 rounded-full">{queueAccounts[qIdx].tag}</span></div><span className="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-2.5 py-1 rounded-full font-bold">Loan ID: {queueAccounts[qIdx].loan}</span></div><div className="grid grid-cols-4 gap-4 bg-slate-50 border rounded-xl p-3 mt-3"><div><p className="text-[8px] text-slate-500 tracking-widest">MASKED PHONE</p><p className="font-bold text-[12px] mt-1">{queueAccounts[qIdx].phone}</p></div><div><p className="text-[8px] text-slate-500 tracking-widest">BORROWER CITY</p><p className="font-bold text-[12px] mt-1">{queueAccounts[qIdx].city}</p></div><div><p className="text-[8px] text-slate-500 tracking-widest">DPD BUCKET</p><p className="font-bold text-[12px] mt-1 text-red-600">{queueAccounts[qIdx].dpd}</p></div><div><p className="text-[8px] text-slate-500 tracking-widest">TOTAL DUE</p><p className="font-bold text-[12px] mt-1 text-emerald-600">{queueAccounts[qIdx].due}</p></div></div></div>
              <div className="bg-white border rounded-2xl p-4"><h3 className="font-bold text-[12px]">Capture Borrower Disposition</h3><div className="grid grid-cols-2 gap-3 mt-3"><div><label className="text-[9px] text-slate-500">Contact Mode</label><select value={contactMode} onChange={(e) => setContactMode(e.target.value)} className="w-full border rounded-full px-3 py-2 text-[11px] mt-1 bg-white"><option>Call</option><option>Field Visit</option><option>WhatsApp</option><option>Email</option></select></div><div><label className="text-[9px] text-slate-500">Disposition Code</label><select value={disposition} onChange={(e) => setDisposition(e.target.value)} className="w-full border rounded-full px-3 py-2 text-[11px] mt-1 bg-white"><option>PTP Taken</option><option>Callback</option><option>Broken PTP</option><option>RTP</option><option>Customer Not Reachable</option></select></div></div><div className="grid grid-cols-2 gap-3 mt-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3"><div><label className="text-[9px] text-emerald-700 font-bold">Promised Amount</label><input value={promisedAmt} onChange={(e) => setPromisedAmt(e.target.value)} placeholder="e.g. 32000" className="w-full border rounded-full px-3 py-2 text-[11px] mt-1" /></div><div><label className="text-[9px] text-slate-600">Promised Payment Date</label><select value={promisedDate} onChange={(e) => setPromisedDate(e.target.value)} className="w-full border rounded-full px-3 py-2 text-[11px] mt-1 bg-white"><option value="">Select Date</option><option>09/18/2026</option><option>09/19/2026</option></select></div></div><div className="mt-3"><label className="text-[9px] text-slate-500">Next Follow-up Action Date</label><select value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} className="w-full border rounded-full px-3 py-2 text-[11px] mt-1 bg-white"><option>09/17/2026</option><option>09/18/2026</option><option>09/19/2026</option></select></div><div className="mt-3"><label className="text-[9px] text-slate-500">Activity Remarks</label><textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter detailed call summary, borrower response, or commitment details..." className="w-full border rounded-2xl px-3 py-2 text-[11px] mt-1 h-[60px] resize-none"></textarea></div><button onClick={saveDisposition} className="w-full py-3 rounded-full mt-4 font-bold text-[12px] shadow-md text-[#1e1b4b]" style={{ background: lightGradient }}>Save Disposition & Advance Queue →</button></div>
            </div>
          )}
          {active === "Dashboards & MIS" && (
            <div className="space-y-4">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div><h2 className="text-white font-bold text-[13px]">Executive Oversight Dashboard - {client}</h2><p className="text-[9px] text-slate-400">Role: {role} | Users: {users.length} | Live Graph</p></div><div className="flex gap-2"><div className="relative"><div onClick={() => setShowClients(!showClients)} className="bg-transparent border border-blue-500 text-white text-[10px] px-3 py-2 rounded-full cursor-pointer w-[180px] flex justify-between">{client} <span>▼</span></div>{showClients && <div className="absolute top-[36px] right-0 w-[300px] bg-[#1a1d29] rounded-xl shadow-2xl z-[100] border border-white/10 overflow-hidden">{clients.map((c, i) => <div key={i} onClick={() => { setClient(c); setShowClients(false); }} className="px-4 py-3 text-white text-[12px] hover:bg-white/10 cursor-pointer border-b border-white/5">{c}</div>)}</div>}</div><button onClick={() => alert(`MIS Export`)} className="bg-[#10b981] text-white text-[8px] px-3 py-1.5 rounded-full font-bold">1-Click MIS Export</button></div></div>
              <div className="bg-white border rounded-2xl p-4"><h3 className="font-bold text-[12px] mb-2">DPD Bucket Resolution Summary - {client}</h3><table className="w-full text-[10px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">DPD Bucket</th><th>Allocated</th><th>Total POS</th><th>Resolved</th><th className="text-right">%</th></tr></thead><tbody><tr className="border-b"><td className="p-2.5 font-bold">1-30 DPD</td><td className="text-center">3</td><td className="text-center">₹4,65,500</td><td className="text-center">0</td><td className="text-right text-blue-600 font-bold">0%</td></tr><tr className="border-b"><td className="p-2.5 font-bold">31-60 DPD</td><td className="text-center">1</td><td className="text-center">₹97,500</td><td className="text-center">0</td><td className="text-right text-blue-600">0%</td></tr><tr className="border-b"><td className="p-2.5 font-bold">61-90 DPD</td><td className="text-center">3</td><td className="text-center">₹4,68,000</td><td className="text-center">1</td><td className="text-right text-blue-600">33%</td></tr><tr><td className="p-2.5 font-bold">90+ DPD</td><td className="text-center">1</td><td className="text-center">₹2,42,000</td><td className="text-center">0</td><td className="text-right text-blue-600">0%</td></tr></tbody></table></div>
              <div className="bg-white border rounded-2xl p-4 shadow-sm"><div className="flex justify-between mb-3"><h3 className="font-bold text-[12px]">Daily Collections Trend (INR) - Running Live</h3><span className="text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Tick: {tick}</span></div><div className="relative h-[220px] w-full"><svg viewBox="0 0 700 200" className="w-full h-full"><defs><linearGradient id="gg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.35" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient></defs><path d={areaD} fill="url(#gg1)" /><path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" />{pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#10b981" strokeWidth="2" />)}</svg></div></div>
            </div>
          )}
          {active === "Allocation & Assignment" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">🔀</div><div><h2 className="text-white font-bold text-[13px]">Allocation Batch Upload & Assignment Engine</h2><p className="text-[8px] text-slate-400">Template validation, row-level error reporting, deduplication, Round Robin & Filter-based Assignment.</p></div></div><div className="flex gap-2"><div className="bg-[#3b82f6] text-white text-[9px] px-3 py-2 rounded-full text-center">1<br />Upload<br />Batch</div><div className="bg-white/10 text-slate-400 text-[9px] px-3 py-2 rounded-full text-center">2<br />Round<br />Robin</div><div className="bg-white/10 text-slate-400 text-[9px] px-3 py-2 rounded-full text-center">3<br />Manual<br />Bulk<br />Filter</div></div></div>
              <div className="bg-white border rounded-2xl p-4"><div className="flex justify-between items-center mb-3"><h3 className="font-bold text-[12px]">Upload Client Delinquent Allocation File (CSV)</h3><button className="text-[9px] bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full">Download Sample CSV Template</button></div><div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50/50"><p className="font-bold text-[12px]">Choose CSV File to Upload & Validate</p><button onClick={() => alert(`CSV Uploaded`)} className="mt-3 bg-[#3b82f6] text-white px-4 py-1.5 rounded-full text-[11px] font-bold">Choose File</button></div></div>
            </div>
          )}
          {active === "Payment Recon & Queue" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">💳</div><div><h2 className="text-white font-bold text-[13px]">Payment Ingestion & Automated Reconciliation Engine</h2><p className="text-[8px] text-slate-400">Matches on client_id + loan_id</p></div></div><button className="bg-white/10 text-white text-[9px] px-3 py-2 rounded-full">Download Sample Paid File</button></div>
              <div className="bg-white border rounded-2xl p-4"><h3 className="font-bold text-[12px] mb-3">Upload Client Daily Paid File (CSV)</h3><div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50/30"><p className="font-bold text-[12px]">Choose Daily Payment CSV</p><button onClick={() => alert(`Payment Reconciled`)} className="mt-3 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[11px] font-bold">Choose File</button></div></div>
            </div>
          )}
          {active === "Client Master" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">🏢</div><div><h2 className="text-white font-bold text-[13px]">Client Master & Contract Governance</h2><p className="text-[8px] text-slate-400">Manage NBFC clients, contract durations, commission rates, and automated retention purge windows.</p></div></div><button className="bg-[#3b82f6] text-white text-[9px] px-3 py-2 rounded-full font-bold">+ Add New NBFC Client</button></div>
              <div className="bg-white border rounded-2xl p-4"><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">CLIENT ID</th><th>CLIENT NAME</th><th>CONTRACT WINDOW</th><th>COMMISSION STRUCTURE</th><th>DATA RETENTION WINDOW</th><th>STATUS</th></tr></thead><tbody><tr className="border-b"><td className="p-3 font-bold">CLI_KISSHT</td><td className="font-bold">Kissht Digital Finance</td><td>2025-01-01 to 2026-12-31</td><td className="text-blue-600 font-bold">8.5% of collection</td><td className="text-purple-600">90 Days Purge Window</td><td><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[8px]">Active</span></td></tr></tbody></table></div>
            </div>
          )}
          {active === "User & Role Admin" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">👥</div><div><h2 className="text-white font-bold text-[13px]">User & Access Management</h2><p className="text-[8px] text-slate-400">Application-owned identity. Single-click disablement logs to audit trail.</p></div></div><button onClick={() => setShowProvision(true)} className="bg-[#6366f1] text-white px-3 py-2 rounded-full text-[9px] font-bold">Provision New User</button></div>
              <div className="bg-white border rounded-2xl overflow-hidden"><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">AGENT / USER ID</th><th>FULL NAME & EMAIL</th><th>ROLE</th><th>TEAM LEADER</th><th>2FA & AUTH STATUS</th><th>ACTION</th></tr></thead><tbody>{users.map((a) => <tr key={a.id} className="border-b"><td className="p-2.5 font-bold text-[10px]">{a.id}</td><td className="p-2.5"><p className="font-bold text-[10px]">{a.name}</p><p className="text-[8px] text-slate-500">{a.email}</p></td><td className="p-2.5"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-[8px] font-bold">{a.role}</span></td><td className="p-2.5 text-[9px]">{a.tl}</td><td className="p-2.5"><span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full text-[8px]">TOTP 2FA Active</span></td><td className="p-2.5"><button onClick={() => { if (confirm(`Disable ${a.name}?`)) setUsers(users.filter((x) => x.id!== a.id)); }} className="bg-red-600 text-white px-2 py-1 rounded-full text-[8px] font-bold">1-Click Disable</button></td></tr>)}</tbody></table></div>
            </div>
          )}
          {active === "Audit Log & Compliance" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-2xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">🛡️</div><div><h2 className="text-white font-bold text-[13px]">Audit & Compliance Console - Read-Only Review</h2><p className="text-[8px] text-slate-400">Audit log is immutable.</p></div></div><span className="bg-amber-900/50 text-amber-300 border border-amber-700/50 px-3 py-1.5 rounded-full text-[8px] text-center">Read-Only<br />Privileges Active</span></div>
              <div className="bg-white border rounded-2xl p-4"><h3 className="font-bold text-[11px] mb-3">System Evidentiary Log Trail</h3><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">TIMESTAMP</th><th>LOG ID</th><th>ACTOR</th><th>ACTION</th><th>TARGET ENTITY</th></tr></thead><tbody><tr className="border-b"><td className="p-2.5">17/9/2026, 10:18:42 pm</td><td className="font-mono">LOG_1789663722962_62</td><td className="font-bold">Karthick Founder</td><td><span className="bg-slate-100 border px-2 py-0.5 rounded-full">LOGIN</span></td><td>mis_export (CLI_KISSHT)</td></tr></tbody></table></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
