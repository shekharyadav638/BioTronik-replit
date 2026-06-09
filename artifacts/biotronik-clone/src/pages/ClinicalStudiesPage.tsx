import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

const studies = [
  {
    name: "At-Home",
    fullName: "Remote Management of Pacemaker Patients with Biennial In-clinic Evaluation",
    status: "Completed",
    area: "CRM",
    type: "Randomized Controlled Trial",
    desc: "Evaluated whether remote monitoring with BIOTRONIK Home Monitoring® is non-inferior to conventional in-office follow-up in pacemaker patients. The study demonstrated that Home Monitoring allows safe remote management with biennial in-clinic visits.",
    ref: "Watanabe E ET AL., CIRC EP 2020 May;13(5):e007734",
    href: "/en-us/professionals/clinical-studies/at-home",
  },
  {
    name: "THINGS",
    fullName: "The Highly Individualized Needs of ICD Patients Study",
    status: "Completed",
    area: "CRM — DX Technology",
    type: "Observational Registry",
    desc: "Evaluated the clinical performance of single-chamber ICD therapy with DX technology versus conventional single-chamber ICDs in real-world patients. Demonstrated significantly higher AF detection rates with DX systems.",
    ref: "THINGS Study, published in Heart Rhythm 2022",
    href: "/en-us/professionals/clinical-studies",
  },
  {
    name: "RAPIDO",
    fullName: "Remote Patient Monitoring in ICD/CRT-D Patients",
    status: "Completed",
    area: "CRM — Remote Monitoring",
    type: "Multicenter Study",
    desc: "Assessed the safety and effectiveness of BIOTRONIK Home Monitoring for remote follow-up of ICD and CRT-D patients. Showed significant reduction in hospitalization and unscheduled clinic visits.",
    ref: "RAPIDO Study, European Heart Journal 2021",
    href: "/en-us/professionals/clinical-studies",
  },
  {
    name: "MINIMIZE RIGHTVS",
    fullName: "Minimizing Right Ventricular Stimulation with DX Technology",
    status: "Completed",
    area: "CRM — DX Technology",
    type: "Multicenter RCT",
    desc: "Evaluated the capability of BIOTRONIK DX technology to detect atrial fibrillation and optimize right ventricular pacing minimization in single-chamber ICD patients.",
    ref: "MINIMIZE RIGHTVS, J Cardiovasc Electrophysiol 2021",
    href: "/en-us/professionals/clinical-studies",
  },
  {
    name: "LEADLESS IV",
    fullName: "LivIQ Leadless Pacemaker Clinical Study",
    status: "Ongoing",
    area: "CRM — Leadless Pacing",
    type: "First-in-Human / Pivotal Study",
    desc: "Evaluating the safety and performance of the BIOTRONIK LivIQ leadless pacemaker system. First human implantations completed in 2026 as part of the LEADLESS IV clinical study.",
    ref: "First human implants: May 2026",
    href: "/en-us/biotronik-announces-first-us-implant-investigational-next-generation-leadless-pacemaker",
  },
  {
    name: "EMPOWER AF",
    fullName: "Evaluation of Home Monitoring in AF Patients",
    status: "Ongoing",
    area: "CRM — Remote Monitoring",
    type: "Registry",
    desc: "Prospective registry evaluating the clinical value of BIOTRONIK Home Monitoring in patients with newly detected atrial fibrillation and implanted cardiac devices.",
    ref: "Ongoing registry, interim results expected 2026",
    href: "/en-us/professionals/clinical-studies",
  },
];

export default function ClinicalStudiesPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/professionals" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Professionals</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Clinical Studies</span>
          </nav>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>Clinical Studies</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "680px", lineHeight: "1.7" }}>
            Committed to supporting further developments in cardiology, BIOTRONIK has been dedicated to building clinical evidence for its technologies for decades. The databases below provide an overview of BIOTRONIK's studies in cardiac rhythm management and related fields.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        {/* Filter row */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
          {["All Studies", "Cardiac Rhythm Management", "DX Technology", "Remote Monitoring", "Leadless Pacing"].map((filter, i) => (
            <button key={filter} style={{
              padding: "8px 18px", fontSize: "13px", fontWeight: "500",
              background: i === 0 ? "#00234c" : "#fff",
              color: i === 0 ? "#fff" : "#415d72",
              border: `1px solid ${i === 0 ? "#00234c" : "#c8d6e0"}`,
              cursor: "pointer", transition: "all 0.15s"
            }}>
              {filter}
            </button>
          ))}
        </div>

        {/* Studies */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {studies.map(study => (
            <div key={study.name} style={{ border: "1px solid #d0dce8", display: "grid", gridTemplateColumns: "200px 1fr", overflow: "hidden" }}>
              {/* Status sidebar */}
              <div style={{ background: study.status === "Ongoing" ? "#eaf0f6" : "#f2f2f2", padding: "28px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <div style={{ fontSize: "10px", color: "#8396ad", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Study</div>
                  <div style={{ fontSize: "20px", fontWeight: "700", color: "#00234c" }}>{study.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#8396ad", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Status</div>
                  <span style={{
                    display: "inline-block", padding: "3px 10px", fontSize: "12px", fontWeight: "600",
                    background: study.status === "Ongoing" ? "#d73604" : "#415d72",
                    color: "#fff"
                  }}>{study.status}</span>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#8396ad", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Area</div>
                  <div style={{ fontSize: "12px", color: "#415d72" }}>{study.area}</div>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#00234c", marginBottom: "6px" }}>{study.name}</h3>
                <p style={{ fontSize: "13px", color: "#8396ad", fontStyle: "italic", marginBottom: "14px" }}>{study.fullName}</p>
                <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8", marginBottom: "16px" }}>{study.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "#8396ad", fontStyle: "italic" }}>{study.ref}</span>
                  <Link href={study.href} style={{
                    fontSize: "12px", fontWeight: "600", color: "#d73604", textTransform: "uppercase", letterSpacing: "0.5px"
                  }}>View Details →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
