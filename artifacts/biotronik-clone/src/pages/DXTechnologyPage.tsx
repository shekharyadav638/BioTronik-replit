import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;
const BASE_IMG = "https://www.biotronik.com";

export default function DXTechnologyPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "440px", display: "flex", alignItems: "center", overflow: "hidden", background: "#00234c" }}>
        <img
          src={`${BASE}images/img_07_100k_20Highlights.jpg.webp`}
          alt="DX Technology"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
        />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            {[
              { label: "Home", href: "/en-us" },
              { label: "Professionals", href: "/en-us/professionals" },
              { label: "Featured Technologies", href: "/en-us/professionals/featured-technologies" },
            ].map((c, i) => (
              <span key={c.href} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>}
                <Link href={c.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{c.label}</Link>
              </span>
            ))}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>DX Technology</span>
          </nav>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "#fff", lineHeight: "1.1", marginBottom: "8px" }}>DX Technology</h1>
          <div style={{ width: "48px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "22px", fontWeight: "300", color: "rgba(255,255,255,0.85)", letterSpacing: "1px", textTransform: "uppercase" }}>
            Detect Early. Monitor Reliably. Improve Outcomes.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "30px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>The Only Single-Lead ICD with Full Atrial Diagnostics</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
              Atrial fibrillation (AF) is a widespread, often silent problem for implantable cardioverter-defibrillator (ICD) patients. Yet without dedicated atrial sensing capability, many single-chamber ICD patients go undetected and untreated for AF.
            </p>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
              BIOTRONIK DX technology solves this. A special sensing dipole on the ICD lead picks up atrial signals continuously — providing comprehensive atrial diagnostics without the complexity or risk of implanting a second lead.
            </p>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9" }}>
              More than 100,000 patients worldwide are living with a BIOTRONIK DX system — supported by over a decade of clinical evidence demonstrating superior AF detection and improved patient management.
            </p>
          </div>
          <div>
            <img
              src={`${BASE}images/img_07_100k_20Highlights.jpg.webp`}
              alt="100,000 DX Devices"
              style={{ width: "100%", height: "340px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section style={{ padding: "64px 40px", background: "#eaf0f6" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px", textAlign: "center" }}>Three Pillars of DX</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "0 auto 48px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {[
              {
                title: "Detect Early",
                text: "DX ICDs help detect atrial arrhythmias early, allowing patients at risk to be treated before complications develop. DX ICDs increase the likelihood of detecting atrial arrhythmias early compared to standard single-chamber ICDs.",
                icon: "🔍",
              },
              {
                title: "Monitor Reliably",
                text: "Continuous atrial monitoring throughout the patient's daily activities — day and night. The atrial sensing dipole on the DX lead provides stable, high-quality atrial signals regardless of patient position or activity level.",
                icon: "📡",
              },
              {
                title: "Improve Outcomes",
                text: "Earlier detection of AF enables timely therapy adjustments, anticoagulation decisions, and clinical interventions. Clinical evidence demonstrates that DX-guided management leads to measurably better patient outcomes.",
                icon: "📈",
              },
            ].map((pillar, i) => (
              <div key={i} style={{ background: "#fff", padding: "36px 28px", borderTop: "3px solid #d73604" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{pillar.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#00234c", marginBottom: "14px" }}>{pillar.title}</h3>
                <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8" }}>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical evidence */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>More Than a Decade of Clinical Experience</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px" }}>
            <div>
              <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
                BIOTRONIK has invested heavily in building the clinical evidence base for DX technology. Multiple landmark studies have demonstrated the clinical value of DX-enabled atrial diagnostics:
              </p>
              {[
                { study: "THINGS Study", desc: "Demonstrated significantly higher AF detection rates with DX versus standard ICD therapy in single-chamber ICD patients." },
                { study: "MINIMIZE RIGHTVS", desc: "Showed that BIOTRONIK DX-guided algorithms effectively minimize unnecessary right ventricular pacing." },
                { study: "At-Home (CardioMessenger)", desc: "Remote Management of Pacemaker Patients with Biennial In-clinic evaluation — published in Circulation EP 2020." },
                { study: "RAPIDO", desc: "Evaluated the clinical performance of remote monitoring with the BIOTRONIK Home Monitoring system in ICD patients." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "16px 0", borderBottom: "1px solid #e0e8f0" }}>
                  <div style={{ flexShrink: 0, width: "6px", background: "#d73604", alignSelf: "stretch" }} />
                  <div>
                    <strong style={{ color: "#00234c", fontSize: "14px" }}>{item.study}</strong>
                    <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7", marginTop: "4px" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: "#00234c", padding: "32px", color: "#fff" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Key Facts</h3>
                {[
                  { num: "100,000+", label: "DX devices implanted worldwide" },
                  { num: "10+", label: "Years of clinical evidence" },
                  { num: "1 lead", label: "For complete atrial diagnostics" },
                  { num: ">95%", label: "AF detection sensitivity" },
                ].map((fact, i) => (
                  <div key={i} style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#d73604" }}>{fact.num}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{fact.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/en-us/professionals/clinical-studies" style={{
                display: "block", marginTop: "16px", background: "#d73604", color: "#fff",
                padding: "14px 20px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase",
                textAlign: "center", transition: "background 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#a22702")}
                onMouseLeave={e => (e.currentTarget.style.background = "#d73604")}
              >View Clinical Studies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "64px 40px", background: "#f2f2f2" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>DX-Compatible Products</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { title: "Acticor Sky DX", desc: "Next-generation single-chamber ICD with complete DX atrial diagnostics. FDA-approved 2026.", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems" },
              { title: "Rivacor Sky DX", desc: "CRT-D system with DX technology for comprehensive cardiac resynchronization and AF monitoring.", href: "/en-us/products/cardiac-rhythm-management/cardiac-resynchronization-therapy-systems" },
              { title: "Plexa DX Lead", desc: "Passive fixation ICD lead with integrated DX sensing dipole for stable atrial signal acquisition.", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems/icd-leads/plexa" },
            ].map(p => (
              <Link key={p.href} href={p.href} style={{
                display: "block", background: "#fff", padding: "28px",
                border: "1px solid #d0dce8", color: "inherit", transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#d73604"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0dce8"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#00234c", marginBottom: "10px" }}>{p.title}</h4>
                <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7" }}>{p.desc}</p>
                <span style={{ display: "block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
