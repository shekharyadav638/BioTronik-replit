import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;
const BASE_IMG = "https://www.biotronik.com";

export default function ProfessionalsPage() {
  const sections = [
    { title: "Clinical Studies", href: "/en-us/professionals/clinical-studies", desc: "Access information about BIOTRONIK's ongoing and completed clinical studies.", img: "/sites/default/bio_files/styles/half_hd/public/2026-03/HRS_008_26e_WebsiteGraphic_v1.png.webp" },
    { title: "Featured Technologies", href: "/en-us/professionals/featured-technologies", desc: "Discover the technologies that make BIOTRONIK devices unique.", img: "/sites/default/bio_files/styles/half_hd/public/2024-01/100k%20Highlights.jpg.webp" },
    { title: "Events", href: "/en-us/professionals/events", desc: "Find BIOTRONIK at major cardiology conferences and events worldwide.", img: "/sites/default/bio_files/styles/half_hd/public/2026-04/Cor%20Sky%20Press%20Release%20Image_0.png.webp" },
    { title: "Education", href: "/en-us/professionals/education", desc: "Educational resources and training programs for healthcare professionals.", img: "/sites/default/bio_files/styles/half_hd_scale/public/2023-09/BIO37566_Mitarbeiter_0.jpg.webp" },
    { title: "DX Technology", href: "/en-us/professionals/featured-technologies/dx-technology", desc: "BIOTRONIK DX technology provides comprehensive atrial diagnostics with a single-pass lead.", img: "/sites/default/bio_files/styles/half_hd/public/2024-01/100k%20Highlights.jpg.webp" },
    { title: "Remote Patient Monitoring", href: "/en-us/professionals/remote-patient-monitoring", desc: "Home Monitoring® provides automatic, daily transmission of patient and device data.", img: "/sites/default/bio_files/styles/half_hd/public/2026-04/BIOTRONIK-University%20of%20Sydney%20-%20Group.jpg.webp" },
  ];

  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Professionals</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
            Resources, technologies, and clinical data for healthcare professionals working with BIOTRONIK devices.
          </p>
        </div>
      </section>

      {/* DX Feature */}
      <section style={{ background: "#eaf0f6", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>100,000 DX Devices Implanted Worldwide</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "16px 0 24px" }} />
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
              The BIOTRONIK DX system provides comprehensive atrial diagnostics with a single-pass ICD lead, enabling physicians to better diagnose and treat atrial fibrillation — without adding an additional lead.
            </p>
            <Link href="/en-us/professionals/featured-technologies/dx-technology" style={{
              display: "inline-block", background: "#d73604", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
            }}>Find Out More</Link>
          </div>
          <img src={`${BASE}images/img_07_100k_20Highlights.jpg.webp`} alt="DX Technology" style={{ width: "100%", height: "320px", objectFit: "cover" }} />
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Resources for Professionals</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {sections.map(s => (
            <Link key={s.href} href={s.href} style={{ display: "flex", flexDirection: "column", color: "inherit" }}>
              <div style={{ height: "180px", overflow: "hidden", marginBottom: "20px" }}>
                <img src={`${BASE_IMG}${s.img}`} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.background = "#c5d5e5"; }}
                />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#00234c", marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7", flexGrow: 1 }}>{s.desc}</p>
              <span style={{ display: "inline-block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>More →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
