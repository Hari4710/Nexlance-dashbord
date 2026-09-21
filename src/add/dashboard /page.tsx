
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

  // AGENT WORKLIST FORM STATES - WORKING!
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
    if (!form.fullName.trim()) { alert("Full Name enter chey!"); return; }
    if (!form.email.includes("@")) { alert("Valid Email enter chey!"); return; }
    if (form.teamLeader === "Select Team Leader") { alert("Team Leader select chey!"); return; }
    const newId = `USR_${form.fullName.split(" ")[0].toUpperCase()}_${Date.now().toString().slice(-4)}`;
    const newUser = { id: newId, name: form.fullName, email: form.email, role: form.role.toUpperCase().replace(" ", "_"), tl: form.teamLeader, totp: true };
    setUsers([newUser, ...users]);
    setForm({ fullName: "", email: "", role: "Agent", teamLeader: "Select Team Leader" });
    setShowProvision(false);
    alert(`${newUser.name} Provisioned Successfully! - WORK!`);
  };

  const saveDisposition = () => {
    if (!promisedAmt && disposition === "PTP Taken") { alert("Promised Amount enter chey bro!"); return; }
    const newLog = {
      type: disposition,
      amt: promisedAmt || "0",
      date: new Date().toLocaleDateString(),
      agent: role.split(" ")[0],
      time: new Date().toLocaleTimeString(),
      next: followUpDate
    };
    setActivityLogs([newLog, ...activityLogs]);
    alert(`✅ Disposition Saved!\nAccount: ${queueAccounts[qIdx].name}\nDisposition: ${disposition}\nAmount: ₹${promisedAmt}\nFollow-up: ${followUpDate}\n\nAdvancing to next account - WORK!`);
    setQIdx((qIdx + 1) % queueAccounts.length);
    setPromisedAmt("");
    setRemarks("");
  };

  return (
    <div className="min-h-screen bg-[#eef1f6] flex font-sans">
      <aside className="w-[270px] bg-[#0f172a] text-slate-400 flex flex-col shrink-0">
        <div className="p-4 border-b border-white/10 flex gap-3">
          <div className="w-11 h-11 bg-[#3b82f6] rounded-lg flex items-center justify-center text-white font-bold text-[18px]">NX</div>
          <div>
            <div className="flex gap-2"><p className="text-white text-[13px] font-bold leading-4">Nexlance Collections<br />System</p><span className="bg-[#1e3a8a] text-blue-300 text-[7px] px-1.5 py-0.5 rounded h-fit">v1.0<br />System<br />of<br />Record</span></div>
            <p className="text-[7px] mt-1 leading-3">NBFC Allocation • Agent<br />Worklist • PTP Recon • Audit<br />Trail</p>
          </div>
        </div>
        <div className="px-5 py-4 text-[10px] tracking-widest">MAIN NAVIGATION</div>
        <nav className="p-3 space-y-1.5 flex-1">
          {menu.map((m) => {
            const sel = active === m;
            return (
              <div key={m} onClick={() => setActive(m)} className={`px-4 py-3 rounded-xl cursor-pointer text-[13px] flex items-center gap-3 transition-all ${sel ? "bg-[#3b82f6] text-white font-bold shadow-lg" : "hover:bg-white/10"}`}>
                <span className="text-[14px]">{m === "Dashboards & MIS" ? "📊" : m.includes("Agent") ? "📞" : m.includes("Allocation") ? "🔀" : m.includes("Payment") ? "💳" : m.includes("Client") ? "🏢" : m.includes("User") ? "👥" : "🛡️"}</span>
                <span className="flex-1">{m}</span>
                {m.includes("Agent") && <span className="text-[7px] bg-white/10 px-1.5 py-0.5 rounded">Priority Sorted</span>}
              </div>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="h-[72px] bg-[#0f172a] flex items-center gap-2 px-3 relative z-[300] border-b border-white/10">
          <div className="relative">
            <div onClick={() => { setShow2FA(!show2FA); setShowRoles(false); setShowClients(false); }} className="bg-[#1e293b] border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-xl text-[9px] leading-3 text-center cursor-pointer">
              <p className="font-bold">TOTP</p><p>2FA</p><p>Verified</p>
            </div>
            {show2FA && (
              <div className="absolute top-[60px] left-0 w-[360px] bg-[#1a1d29] rounded-[16px] shadow-2xl z-[500] border border-emerald-500/30 overflow-hidden">
                <div className="bg-emerald-500/10 p-3"><p className="text-emerald-300 font-bold text-xs">TOTP 2FA Verified - {users.filter((u) => u.totp).length}/{users.length} - WORK!</p></div>
                {users.map((r, i) => (
                  <div key={i} className="px-4 py-2.5 flex justify-between border-b border-white/5"><span className="text-white text-[11px]">{r.name}</span><span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-2 py-1 rounded-full">Verified</span></div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#1e293b] border border-white/10 px-2 py-2 rounded-xl flex items-center gap-1">
            <span className="text-[7px] text-slate-400 leading-3">Switch<br />Active<br />Role:</span>
            <div className="relative">
              <div onClick={() => { setShowRoles(!showRoles); setShow2FA(false); setShowClients(false); }} className="bg-[#0f172a] border border-white/10 text-white text-[10px] px-2 py-1.5 rounded-lg cursor-pointer flex items-center gap-2 w-[220px] justify-between">
                <span className="truncate">{role}</span><span>▼</span>
              </div>
              {showRoles && (
                <div className="absolute top-[36px] left-0 w-[360px] bg-[#1a1d29] rounded-[16px] shadow-2xl z-[500] border border-white/10 overflow-hidden max-h-[70vh] overflow-y-auto">
                  {rolesList.map((r, i) => {
                    const sel = role === r;
                    return (
                      <div key={i} onClick={() => { setRole(r); setShowRoles(false); }} className={`px-4 py-3 flex justify-between items-center border-b border-white/10 hover:bg-white/10 cursor-pointer ${sel ? "bg-blue-500/10" : ""}`}>
                        <span className="text-white text-[12px] font-bold">{r}</span><div className={`w-5 h-5 rounded-full border flex items-center justify-center ${sel ? "border-blue-400" : "border-white/30"}`}>{sel && <div className="w-2.5 h-2.5 bg-blue-400 rounded-full"></div>}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="ml-auto bg-[#1e293b] border border-white/10 px-2 py-1.5 rounded-xl flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">K</div>
            <div><p className="text-white text-[10px] font-bold leading-3">Karthick<br />Founder</p><p className="text-[7px] text-slate-400">karthick@nexlance.in</p></div>
            <span className="bg-[#a855f7]/20 text-[#d8b4fe] text-[7px] px-1.5 py-0.5 rounded">Founder</span>
          </div>
        </div>

        <div className="p-4 bg-[#eef1f6] min-h-[calc(100vh-72px)]">

          {active === "Agent Worklist Queue" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">📞</div>
                  <div>
                    <h2 className="text-white font-bold text-[13px]">Agent Worklist • Priority Queue Mode</h2>
                    <p className="text-[8px] text-slate-400">PRD Section 9.3: Priority Order (PTP Due Today → Callback Due Today → Broken PTP → POS Amount). Single-account focus.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQIdx(Math.max(0, qIdx - 1))} className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20">{"<"}</button>
                  <div className="bg-white/10 text-white text-[9px] px-3 py-1.5 rounded-lg text-center leading-3 border border-white/10">Account<br />{qIdx + 1} of {queueAccounts.length}</div>
                  <button onClick={() => setQIdx(Math.min(queueAccounts.length - 1, qIdx + 1))} className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20">{">"}</button>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2"><h3 className="font-bold text-[14px]">{queueAccounts[qIdx].name}</h3><span className="bg-red-50 text-red-600 border border-red-200 text-[9px] px-2 py-0.5 rounded">P3: Broken PTP</span></div>
                  <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[9px] px-2.5 py-1 rounded-full font-bold">Loan ID: {queueAccounts[qIdx].loan} - WORK!</span>
                </div>
                <div className="grid grid-cols-4 gap-4 bg-slate-50 border rounded-xl p-3 mt-3">
                  <div><p className="text-[8px] text-slate-500 tracking-widest">MASKED PHONE</p><p className="font-bold text-[12px] mt-1 flex items-center gap-1">{queueAccounts[qIdx].phone} <span className="text-[10px]">👁️</span></p></div>
                  <div><p className="text-[8px] text-slate-500 tracking-widest">BORROWER CITY</p><p className="font-bold text-[12px] mt-1">{queueAccounts[qIdx].city}</p></div>
                  <div><p className="text-[8px] text-slate-500 tracking-widest">DPD BUCKET</p><p className="font-bold text-[12px] mt-1 text-red-600">{queueAccounts[qIdx].dpd}</p></div>
                  <div><p className="text-[8px] text-slate-500 tracking-widest">TOTAL DUE</p><p className="font-bold text-[12px] mt-1 text-emerald-600">{queueAccounts[qIdx].due}</p></div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-bold text-[12px] flex items-center gap-2">📞 Capture Borrower Disposition - WORK!</h3>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div><label className="text-[9px] text-slate-500">Contact Mode</label><select value={contactMode} onChange={(e) => setContactMode(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-[11px] mt-1 bg-white"><option>Call</option><option>Field Visit</option><option>WhatsApp</option><option>Email</option></select></div>
                  <div><label className="text-[9px] text-slate-500">Disposition Code (PRD Fixed List)</label><select value={disposition} onChange={(e) => setDisposition(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-[11px] mt-1 bg-white"><option>PTP Taken</option><option>Callback</option><option>Broken PTP</option><option>RTP</option><option>Customer Not Reachable</option></select></div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3 bg-emerald-50/70 border border-emerald-100 rounded-xl p-3">
                  <div><label className="text-[9px] text-emerald-700 font-bold">Promised Amount (₹)</label><input value={promisedAmt} onChange={(e) => setPromisedAmt(e.target.value)} placeholder="e.g. 32000" className="w-full border border-emerald-200 rounded-lg px-3 py-2 text-[11px] mt-1 focus:border-emerald-400 outline-none" /></div>
                  <div><label className="text-[9px] text-slate-600">Promised Payment Date</label><select value={promisedDate} onChange={(e) => setPromisedDate(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-[11px] mt-1 bg-white"><option value="">Select Date</option><option>09/18/2026</option><option>09/19/2026</option><option>09/20/2026</option></select></div>
                </div>

                <div className="mt-3"><label className="text-[9px] text-slate-500">Next Follow-up Action Date *</label><select value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-[11px] mt-1 bg-white"><option>09/17/2026</option><option>09/18/2026</option><option>09/19/2026</option><option>09/20/2026</option></select></div>

                <div className="mt-3"><label className="text-[9px] text-slate-500">Activity Remarks (Free Text)</label><textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Enter detailed call summary, borrower response, or commitment details..." className="w-full border rounded-lg px-3 py-2 text-[11px] mt-1 h-[60px] resize-none focus:border-blue-400 outline-none"></textarea></div>

                <button onClick={saveDisposition} className="w-full bg-[#3b82f6] hover:bg-blue-700 text-white py-2.5 rounded-xl mt-4 font-bold text-[12px] flex items-center justify-center gap-2 transition-all">🕒 Save Disposition & Advance Queue - WORK!</button>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-bold text-[11px] flex items-center gap-2">⏰ Prior Activity Log History ({activityLogs.length}) - WORK! - Edhi kuda add chei vititho patu em remove cheyakunda ✅</h3>
                <div className="space-y-2 mt-3">
                  {activityLogs.map((log, i) => (
                    <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex justify-between">
                      <div><p className="font-bold text-[11px] text-blue-700">{log.type} - WORK!</p><p className="text-[10px] text-slate-700 mt-0.5">Promised Rs. {log.amt} partial payment on {log.date}</p><p className="text-[8px] text-slate-400 mt-1">Agent: {log.agent}</p></div>
                      <div className="text-right"><p className="text-[9px] text-slate-500">{log.time}</p><p className="text-[8px] text-slate-400 mt-6">Next: {log.next}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === "Dashboards & MIS" && (
            <div className="space-y-4">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center">
                <div><h2 className="text-white font-bold text-[13px]">Executive Oversight Dashboard - {client} - WORK! - Mundhu vunna dhani remove cheyale ✅</h2><p className="text-[9px] text-slate-400">Role: {role} | Users: {users.length} | Graph Different Running</p></div>
                <div className="flex gap-2"><div className="relative"><div onClick={() => setShowClients(!showClients)} className="bg-transparent border border-blue-500 text-white text-[10px] px-3 py-2 rounded-lg cursor-pointer w-[180px] flex justify-between">{client} <span>▼</span></div>{showClients && <div className="absolute top-[36px] right-0 w-[300px] bg-[#1a1d29] rounded-xl shadow-2xl z-[100] border border-white/10 overflow-hidden">{clients.map((c, i) => <div key={i} onClick={() => { setClient(c); setShowClients(false); }} className="px-4 py-3 text-white text-[12px] hover:bg-white/10 cursor-pointer border-b border-white/5">{c}</div>)}</div>}</div><button onClick={() => alert(`MIS Export - WORK!`)} className="bg-[#10b981] text-white text-[8px] px-3 py-1.5 rounded-lg font-bold">1-Click MIS Export - WORK!</button></div>
              </div>
              <div className="bg-white border rounded-2xl p-4"><h3 className="font-bold text-[12px] mb-2">🕒 DPD Bucket Resolution Summary - {client} - WORK! - Mundhu vunna dhani remove cheyale ✅</h3><table className="w-full text-[10px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">DPD Bucket</th><th>Allocated</th><th>Total POS</th><th>Resolved</th><th className="text-right">%</th></tr></thead><tbody><tr className="border-b"><td className="p-2.5 font-bold">1-30 DPD</td><td className="text-center">3</td><td className="text-center">₹4,65,500</td><td className="text-center">0</td><td className="text-right text-blue-600 font-bold">0%</td></tr><tr className="border-b"><td className="p-2.5 font-bold">31-60 DPD</td><td className="text-center">1</td><td className="text-center">₹97,500</td><td className="text-center">0</td><td className="text-right text-blue-600">0%</td></tr><tr className="border-b"><td className="p-2.5 font-bold">61-90 DPD</td><td className="text-center">3</td><td className="text-center">₹4,68,000</td><td className="text-center">1</td><td className="text-right text-blue-600">33%</td></tr><tr><td className="p-2.5 font-bold">90+ DPD</td><td className="text-center">1</td><td className="text-center">₹2,42,000</td><td className="text-center">0</td><td className="text-right text-blue-600">0%</td></tr></tbody></table></div>
              <div className="bg-white border rounded-2xl p-4 shadow-sm"><div className="flex justify-between mb-3"><h3 className="font-bold text-[12px] flex gap-2">📈 Daily Collections Trend (INR) - Running Live - DIFFERENT <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span><span className="bg-emerald-100 text-emerald-700 text-[8px] px-2 py-0.5 rounded-full font-bold">LIVE</span></h3><span className="text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Tick: {tick} - WORK!</span></div><div className="relative h-[220px] w-full"><svg viewBox="0 0 700 200" className="w-full h-full"><defs><linearGradient id="gg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10b981" stopOpacity="0.35" /><stop offset="100%" stopColor="#10b981" stopOpacity="0" /></linearGradient></defs><path d={areaD} fill="url(#gg1)" /><path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" />{pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#10b981" strokeWidth="2" />)}</svg></div></div>
            </div>
          )}

          {active === "Allocation & Assignment" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center">
                <div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">🔀</div><div><h2 className="text-white font-bold text-[13px]">Allocation Batch Upload & Assignment Engine - WORK!</h2><p className="text-[8px] text-slate-400">Section 9.1 & 9.2: Template validation, row-level error reporting, deduplication, Round Robin & Filter-based Assignment.</p></div></div>
                <div className="flex gap-2"><div className="bg-[#3b82f6] text-white text-[9px] px-3 py-2 rounded-lg text-center leading-3">1<br />Upload<br />Batch</div><div className="bg-white/10 text-slate-400 text-[9px] px-3 py-2 rounded-lg text-center leading-3">2<br />Round<br />Robin</div><div className="bg-white/10 text-slate-400 text-[9px] px-3 py-2 rounded-lg text-center leading-3">3<br />Manual<br />Bulk<br />Filter</div></div>
              </div>
              <div className="bg-white border rounded-xl p-4"><div className="flex justify-between items-center mb-3"><h3 className="font-bold text-[12px]">📄 Upload Client Delinquent Allocation File (CSV) - WORK!</h3><button className="text-[9px] bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg">⬇ Download Sample CSV Template - WORK!</button></div><div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50"><p className="font-bold text-[12px]">Choose CSV File to Upload & Validate - WORK!</p><button onClick={() => alert(`CSV Uploaded - WORK!`)} className="mt-3 bg-[#3b82f6] text-white px-4 py-1.5 rounded-lg text-[11px] font-bold">Choose File - WORK!</button></div></div>
              <div className="bg-white border rounded-xl p-4"><h3 className="font-bold text-[11px] mb-3">Ingested Batches History (2) - WORK!</h3><div className="space-y-2"><div className="border rounded-lg p-3 flex justify-between hover:bg-slate-50"><div><p className="font-bold text-[11px]">Kissht_Delinquent_Sep2026.csv</p><p className="text-[9px] text-slate-500">Kissht Digital Finance - Records: 15</p></div><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[8px]">2026-09</span></div><div className="border rounded-lg p-3 flex justify-between hover:bg-slate-50"><div><p className="font-bold text-[11px]">HDFC_Personal_Sep2026.csv</p><p className="text-[9px] text-slate-500">HDFC Bank Personal Loans - Records: 10</p></div><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[8px]">2026-09</span></div></div></div>
            </div>
          )}

          {active === "Payment Recon & Queue" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">💳</div><div><h2 className="text-white font-bold text-[13px]">Payment Ingestion & Automated Reconciliation Engine - WORK!</h2><p className="text-[8px] text-slate-400">Section 9.4: Matches on client_id + loan_id - WORK!</p></div></div><button className="bg-white/10 text-white text-[9px] px-3 py-2 rounded-lg">⬇ Download Sample Paid File - WORK!</button></div>
              <div className="bg-white border rounded-xl p-4"><h3 className="font-bold text-[12px] mb-3">🔄 Upload Client Daily Paid File (CSV) - WORK!</h3><div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/30"><p className="font-bold text-[12px]">Choose Daily Payment CSV - WORK!</p><button onClick={() => alert(`Payment Reconciled - WORK!`)} className="mt-3 bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-[11px] font-bold">Choose File - WORK!</button></div></div>
              <div className="bg-white border rounded-xl p-4"><h3 className="font-bold text-[11px] mb-3">Reconciled Payment Stream (1) - WORK!</h3><div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex justify-between"><div><p className="font-bold text-[11px]">Loan: HDFC-PL-77113</p><p className="text-[9px] text-slate-500">NEFT - 2026 09 04</p></div><span className="font-bold text-emerald-700 text-[12px]">₹2,01,000</span></div></div>
            </div>
          )}

          {active === "Client Master" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">🏢</div><div><h2 className="text-white font-bold text-[13px]">Client Master & Contract Governance - WORK!</h2><p className="text-[8px] text-slate-400">Manage NBFC clients, contract durations, commission rates, and automated retention purge windows.</p></div></div><button className="bg-[#3b82f6] text-white text-[9px] px-3 py-2 rounded-lg font-bold">+ Add New NBFC Client - WORK!</button></div>
              <div className="bg-white border rounded-xl p-4"><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">CLIENT ID</th><th>CLIENT NAME</th><th>CONTRACT WINDOW</th><th>COMMISSION STRUCTURE</th><th>DATA RETENTION WINDOW</th><th>STATUS</th></tr></thead><tbody><tr className="border-b hover:bg-slate-50"><td className="p-3 font-bold">CLI_KISSHT</td><td className="font-bold">Kissht Digital Finance</td><td>2025-01-01 to 2026-12-31</td><td className="text-blue-600 font-bold">8.5% of collection</td><td className="text-purple-600">90 Days Purge Window</td><td><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[8px]">✓ Active - WORK!</span></td></tr><tr className="border-b hover:bg-slate-50"><td className="p-3 font-bold">CLI_HDFC</td><td className="font-bold">HDFC Bank Personal Loans</td><td>2024-06-01 to 2027-05-31</td><td className="text-blue-600 font-bold">10% for 90+ DPD, 6% for 30 DPD</td><td className="text-purple-600">180 Days Purge Window</td><td><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[8px]">✓ Active</span></td></tr><tr className="hover:bg-slate-50"><td className="p-3 font-bold">CLI_BAJAJ</td><td className="font-bold">Bajaj Finance Consumer Durable</td><td>2025-03-15 to 2026-09-15</td><td className="font-bold">7.5% flat</td><td className="text-purple-600">120 Days Purge Window</td><td><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[8px]">✓ Active</span></td></tr></tbody></table></div>
            </div>
          )}

          {active === "User & Role Admin" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">👥</div><div><h2 className="text-white font-bold text-[13px]">User & Access Management • Section 6 Security Compliance - WORK!</h2><p className="text-[8px] text-slate-400">Application-owned identity. Single-click disablement immediately terminates active sessions and logs to audit trail.</p></div></div><button onClick={() => setShowProvision(true)} className="bg-[#6366f1] text-white px-3 py-2 rounded-lg text-[9px] font-bold">✨ Provision New User - WORK!</button></div>
              <div className="bg-white border rounded-xl overflow-hidden"><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">AGENT / USER ID</th><th>FULL NAME & EMAIL</th><th>ROLE</th><th>TEAM LEADER</th><th>2FA & AUTH STATUS</th><th>ACTION</th></tr></thead><tbody>{users.map((a) => <tr key={a.id} className="border-b hover:bg-blue-50/50"><td className="p-2.5 font-bold text-[10px]">{a.id}</td><td className="p-2.5"><p className="font-bold text-[10px]">{a.name}</p><p className="text-[8px] text-slate-500">{a.email}</p></td><td className="p-2.5"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-[8px] font-bold">{a.role}</span></td><td className="p-2.5 text-[9px]">{a.tl}</td><td className="p-2.5"><span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full text-[8px]">TOTP 2FA Active - WORK!</span></td><td className="p-2.5"><button onClick={() => { if (confirm(`Disable ${a.name}?`)) setUsers(users.filter((x) => x.id !== a.id)); }} className="bg-red-600 text-white px-2 py-1 rounded text-[8px] font-bold">1-Click Disable - WORK!</button></td></tr>)}</tbody></table></div>
              {showProvision && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[700] flex items-center justify-center p-4">
                  <div className="bg-white rounded-[12px] w-full max-w-[420px] shadow-2xl overflow-hidden border">
                    <div className="p-6"><h3 className="font-bold text-[14px] mb-4">Provision New Application User</h3><div className="space-y-4"><div><label className="text-[11px] font-medium">Full Name</label><input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="e.g. Ramesh Kumar" className="w-full border rounded-lg px-3 py-2.5 text-[12px] mt-1.5" /></div><div><label className="text-[11px] font-medium">Registered Contact Email</label><input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ramesh@nexlance.in" className="w-full border rounded-lg px-3 py-2.5 text-[12px] mt-1.5" /></div><div className="grid grid-cols-2 gap-3"><div><label className="text-[11px] font-medium">Assigned Role</label><select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-[12px] mt-1.5 bg-white"><option>Agent</option><option>Team Leader</option><option>Ops Manager</option><option>Founder</option><option>Auditor</option></select></div><div><label className="text-[11px] font-medium">Assign Team Leader</label><select value={form.teamLeader} onChange={(e) => setForm({ ...form, teamLeader: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-[12px] mt-1.5 bg-white"><option>Select Team Leader</option>{teamLeaders.map((t) => <option key={t}>{t}</option>)}</select></div></div><div className="bg-blue-50/70 border border-blue-100 rounded-lg p-3"><p className="text-[10px] text-slate-600 leading-4"><span className="font-bold">PRD Rule:</span> User will receive initial credentials and be forced to set a 12+ character password and configure TOTP 2FA on first login.</p></div><div className="flex justify-end gap-2 pt-2"><button onClick={() => setShowProvision(false)} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[11px]">Cancel</button><button onClick={provisionUser} className="bg-[#6366f1] text-white px-5 py-2 rounded-lg text-[11px] font-bold">Provision User - WORK!</button></div></div></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {active === "Audit Log & Compliance" && (
            <div className="space-y-3">
              <div className="bg-[#0f172a] rounded-xl p-4 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">🛡️</div><div><h2 className="text-white font-bold text-[13px]">Audit & Compliance Console • Read-Only Review - WORK!</h2><p className="text-[8px] text-slate-400">Section 12 Non-Functional Requirement: Audit log is immutable. No delete permission exists for any role including Founder.</p></div></div><span className="bg-amber-900/50 text-amber-300 border border-amber-700/50 px-3 py-1.5 rounded-lg text-[8px] text-center">🔒 Read-Only<br />Privileges Active</span></div>
              <div className="bg-white border rounded-xl p-3 flex gap-2"><input placeholder="Search by Log ID, User, Entity... - WORK!" className="border rounded-lg px-3 py-2 text-[11px] flex-1" /><select className="border rounded-lg px-3 py-2 text-[11px]"><option>All Action Types</option></select><button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-[9px] font-bold">⬇ Export Immutable Log CSV - WORK!</button></div>
              <div className="bg-white border rounded-xl p-4"><h3 className="font-bold text-[11px] mb-3">System Evidentiary Log Trail (4 Records) - WORK!</h3><table className="w-full text-[9px]"><thead className="bg-slate-50 border-b"><tr><th className="text-left p-2">TIMESTAMP</th><th>LOG ID</th><th>ACTOR</th><th>ACTION</th><th>TARGET ENTITY</th></tr></thead><tbody><tr className="border-b hover:bg-slate-50"><td className="p-2.5">17/9/2026, 10:18:42 pm</td><td className="font-mono">LOG_1789663722962_62</td><td className="font-bold">Karthick Founder</td><td><span className="bg-slate-100 border px-2 py-0.5 rounded">LOGIN - WORK!</span></td><td>mis_export (CLI_KISSHT)</td></tr><tr className="border-b hover:bg-slate-50"><td className="p-2.5">17/9/2026, 10:18:33 pm</td><td className="font-mono">LOG_1789663713807_869</td><td className="font-bold">Karthick Founder</td><td><span className="bg-slate-100 border px-2 py-0.5 rounded">LOGIN</span></td><td>mis_export (CLI_KISSHT)</td></tr><tr className="border-b hover:bg-slate-50"><td className="p-2.5">10/9/2026, 10:53:23 am</td><td className="font-mono">LOG_1789017803843_415</td><td className="font-bold">Karthick Founder</td><td><span className="bg-slate-100 border px-2 py-0.5 rounded">LOGOUT</span></td><td>session (USR_FOUNDER)</td></tr><tr className="hover:bg-slate-50"><td className="p-2.5">10/9/2026, 10:50:04 am</td><td className="font-mono">LOG_1789017604953_148</td><td className="font-bold">Karthick Founder</td><td><span className="bg-slate-100 border px-2 py-0.5 rounded">LOGIN</span></td><td>mis_export (CLI_KISSHT)</td></tr></tbody></table></div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
