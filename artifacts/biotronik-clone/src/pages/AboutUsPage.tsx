import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;
const BASE_IMG = "https://www.biotronik.com";

export default function AboutUsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "420px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src={`${BASE}images/professionals_hero.webp`} alt="About Us" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,35,76,0.88) 0%, rgba(0,35,76,0.5) 100%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/company" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Company</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>About Us</span>
          </nav>
          <h1 style={{ fontSize: "46px", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "8px", maxWidth: "600px" }}>
            About Us
          </h1>
          <div style={{ width: "48px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "22px", fontWeight: "300", color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>
            Improving People's Quality of Life
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "64px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "34px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Excellence for Life</h2>
              <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "28px" }} />
              <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
                For over 60 years, BIOTRONIK has stood at the forefront of medical technology, pioneering innovations in cardiac rhythm management, electrophysiology, endovascular therapy, and neuromodulation.
              </p>
              <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
                Rooted in a deep purpose to seamlessly harmonize technology with the human body, our solutions save and improve millions of lives every year. From creating Germany's first pacemaker in 1963 to breaking new ground with the world's first leadless pacemaker technologies, BIOTRONIK has always led the way.
              </p>
              <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9" }}>
                We are committed to the highest quality, safety, and reliability. Our products are used in more than 100 countries worldwide, and over 6,000 employees share our passion for improving lives every day.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <img src={`${BASE}images/hero_main.webp`} alt="Patient" style={{ width: "100%", height: "280px", objectFit: "cover" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { num: "60+", label: "Years of innovation" },
                  { num: "6,000+", label: "Employees worldwide" },
                  { num: "100+", label: "Countries served" },
                  { num: "#1", label: "Cardiac care pioneer" },
                ].map(stat => (
                  <div key={stat.label} style={{ background: "#eaf0f6", padding: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "28px", fontWeight: "700", color: "#d73604" }}>{stat.num}</div>
                    <div style={{ fontSize: "13px", color: "#415d72", marginTop: "4px" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section style={{ background: "#f2f2f2", padding: "64px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>We Innovate High-Quality Solutions Across Our Business Areas</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {[
              {
                title: "Cardiac Rhythm Management",
                desc: "Pacemakers, ICDs, CRT devices, leads and remote monitoring. Protecting patients with intelligent, connected therapy.",
                href: "/en-us/products/cardiac-rhythm-management",
                img: `${BASE_IMG}/sites/default/bio_files/styles/medium/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg`,
              },
              {
                title: "Electrophysiology",
                desc: "Diagnostic and therapeutic catheters for precise ablation and mapping of complex cardiac arrhythmias.",
                href: "/en-us/products/electrophysiology",
                img: `${BASE_IMG}/sites/default/bio_files/styles/one_third_large/public/2023-04/BIO38276_Bilder_HP_mockup.jpg`,
              },
              {
                title: "Neuromodulation",
                desc: "Spinal cord stimulation systems that provide lasting relief for patients suffering from chronic pain.",
                href: "/en-us/products/neuromodulation",
                img: `${BASE}images/img_11_BIO34590_Neurostimulationsgeraet_Prosper`,
              },
              {
                title: "Micro Systems Technologies",
                desc: "Precision manufacturing and micro-engineering for the most demanding medical device applications.",
                href: "/en-us/company/innovations",
                img: `${BASE}images/img_02_BIO38828_Mitarbeiter.jpg.webp`,
              },
            ].map(area => (
              <Link key={area.href} href={area.href} style={{ display: "flex", flexDirection: "column", background: "#fff", overflow: "hidden", color: "inherit", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src={area.img} alt={area.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.background = "#c5d5e5"; }}
                  />
                </div>
                <div style={{ padding: "20px", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#00234c", marginBottom: "10px", lineHeight: "1.4" }}>{area.title}</h3>
                  <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7" }}>{area.desc}</p>
                  <span style={{ display: "inline-block", marginTop: "14px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* History teaser */}
      <section style={{ background: "#00234c", padding: "64px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Advancing Health and Well-being Since 1963</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "16px 0 24px" }} />
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.9", marginBottom: "16px" }}>
              Our story began in Berlin in 1963 when physicist Max Schaldach and electrical engineer Ernst Rinas created Germany's first pacemaker. Their vision — to seamlessly harmonize technology with the human body — remains our guiding principle.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.9", marginBottom: "32px" }}>
              For six decades, we have led the cardiac care industry with firsts: the world's smallest ICD, the first DX single-lead atrial diagnostics system, and now the next generation of leadless pacing.
            </p>
            <Link href="/en-us/company/about-us/our-history" style={{
              display: "inline-block", border: "2px solid #fff", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00234c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            >
              Our History
            </Link>
          </div>
          <img src={`${BASE}images/our_history.webp`} alt="BIOTRONIK History" style={{ width: "100%", height: "340px", objectFit: "cover" }} />
        </div>
      </section>

      {/* Products banner */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Our Innovative Products Save and Improve Lives</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "28px" }} />
          <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9", maxWidth: "780px", marginBottom: "40px" }}>
            From the first implantation to decades of follow-up care, BIOTRONIK's devices work silently but powerfully — monitoring, protecting, and responding in real time. Our Home Monitoring® platform transmits daily data from patient devices to physicians, enabling proactive care without clinic visits.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/en-us/products/cardiac-rhythm-management" style={{
              display: "inline-block", background: "#d73604", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
            }}>Our Products</Link>
            <Link href="/en-us/professionals/clinical-studies" style={{
              display: "inline-block", border: "2px solid #00234c", color: "#00234c",
              padding: "10px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#00234c"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#00234c"; }}
            >
              Clinical Evidence
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
