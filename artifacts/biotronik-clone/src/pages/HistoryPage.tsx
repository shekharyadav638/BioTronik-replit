import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

const timeline = [
  {
    year: "1963",
    title: "Founding in Berlin, Germany",
    text: "Physicist Max Schaldach and electrical engineer Ernst Rinas found BIOTRONIK in Berlin. They create Germany's first pacemaker — driven by the vision of harmonizing technology with the human body to save lives.",
  },
  {
    year: "1979–1982",
    title: "International Growth",
    text: "After exceptional technological and commercial success, BIOTRONIK expands globally. Production facilities are opened in Oregon, USA and other offices throughout Europe, Asia, North America and South America.",
  },
  {
    year: "1991",
    title: "First Implantable Defibrillator",
    text: "BIOTRONIK introduces its first implantable cardioverter-defibrillator (ICD), expanding its cardiac therapy portfolio to treat life-threatening arrhythmias and sudden cardiac death.",
  },
  {
    year: "2000s",
    title: "World's Smallest ICD & Stent Innovation",
    text: "BIOTRONIK develops the world's smallest ICD and launches the first 4 French-compatible self-expanding stent, setting new standards in minimally invasive treatment of peripheral artery disease.",
  },
  {
    year: "2009",
    title: "DX Technology",
    text: "BIOTRONIK ICDs are further innovated with DX technology: the world's first single-chamber ICD with complete atrial diagnostics — detecting AF with a single-pass ICD lead.",
  },
  {
    year: "2012",
    title: "Drug-Eluting Innovation",
    text: "The company develops its first drug-eluting balloon to treat the re-narrowing of a coronary artery, and the world's first hybrid drug-eluting stent (DES) with a bioabsorbable coating.",
  },
  {
    year: "2015",
    title: "Swiss Manufacturing",
    text: "BIOTRONIK establishes a state-of-the-art precision manufacturing facility in Switzerland, producing advanced micro-system technologies for next-generation cardiac devices.",
  },
  {
    year: "2023",
    title: "100,000 DX Devices Implanted",
    text: "BIOTRONIK celebrates the milestone of 100,000 DX ICD devices implanted worldwide — validating over a decade of clinical evidence for the single-lead atrial diagnostics platform.",
  },
  {
    year: "2026",
    title: "LivIQ Leadless Pacemaker",
    text: "BIOTRONIK achieves first human implantations of the LivIQ leadless pacemaker as part of the LEADLESS IV clinical study — representing the next chapter in cardiac pacing innovation.",
  },
];

export default function HistoryPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "360px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src={`${BASE}images/our_history.webp`} alt="Our History" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,35,76,0.80)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/company" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Company</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/company/about-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>About Us</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Our History</span>
          </nav>
          <h1 style={{ fontSize: "44px", fontWeight: "700", color: "#fff", lineHeight: "1.2", marginBottom: "8px" }}>Our History</h1>
          <div style={{ width: "48px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "18px", fontWeight: "300", color: "rgba(255,255,255,0.85)", maxWidth: "560px", lineHeight: "1.7" }}>
            Over 60 Years of Innovations and Service to the Healthcare Community
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "18px", color: "#415d72", lineHeight: "1.9", marginBottom: "16px" }}>
            BIOTRONIK is proud of its history and consistent development of life-changing innovations. For the past 60+ years we have consistently developed innovative and purpose-driven medical technologies that have advanced the diagnosis, treatment, and prevention of heart disease and chronic pain worldwide.
          </p>
          <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9" }}>
            BIOTRONIK was founded in Germany in 1963 by physicist Max Schaldach and electrical engineer Ernst Rinas. Inspired to help patients with heart conditions, Schaldach and Rinas created Germany's first pacemaker, setting the foundation for a company now recognized globally for its medical innovations.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "0 40px 80px", background: "#f2f2f2" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            {/* vertical line */}
            <div style={{ position: "absolute", left: "140px", top: 0, bottom: 0, width: "2px", background: "#d73604" }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "40px", marginBottom: "0", paddingTop: i === 0 ? "48px" : "0" }}>
                {/* Year */}
                <div style={{ textAlign: "right", paddingRight: "32px", paddingTop: "32px" }}>
                  <div style={{
                    display: "inline-block", background: "#d73604", color: "#fff",
                    padding: "6px 14px", fontSize: "13px", fontWeight: "700", letterSpacing: "0.5px",
                    position: "relative"
                  }}>
                    {item.year}
                    <div style={{ position: "absolute", right: "-13px", top: "50%", transform: "translateY(-50%)", width: "12px", height: "12px", borderRadius: "50%", background: "#d73604", border: "2px solid #f2f2f2" }} />
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "24px 0 40px", borderBottom: i < timeline.length - 1 ? "1px solid #d9e4ed" : "none" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#00234c", marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#00234c", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <h2 style={{ fontSize: "26px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>The Next Chapter Starts Now</h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>Discover how BIOTRONIK is shaping the future of cardiac and pain care.</p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/en-us/products/cardiac-rhythm-management" style={{
              display: "inline-block", background: "#d73604", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
            }}>Our Products</Link>
            <Link href="/en-us/newsroom" style={{
              display: "inline-block", border: "2px solid #fff", color: "#fff",
              padding: "10px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00234c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            >Latest News</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
