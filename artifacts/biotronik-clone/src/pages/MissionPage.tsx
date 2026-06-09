import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

export default function MissionPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "380px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src={`${BASE}images/professionals_hero.webp`} alt="Mission" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,35,76,0.82)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/company/about-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>About Us</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Mission, Vision, Values</span>
          </nav>
          <h1 style={{ fontSize: "44px", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "8px" }}>Mission, Vision, Values</h1>
          <div style={{ width: "48px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "22px", fontWeight: "300", color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>What Drives Us</p>
        </div>
      </section>

      {/* Opening */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "20px", color: "#415d72", lineHeight: "1.9", fontStyle: "italic", marginBottom: "16px" }}>
            "We are passionate about the difference we make in people's lives. Every day, we strive to improve and extend the lives of the patients who use our products."
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "64px 40px", background: "#eaf0f6" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#d73604", textTransform: "uppercase", letterSpacing: "1.5px" }}>Our Mission</span>
            <h2 style={{ fontSize: "34px", fontWeight: "300", color: "#00234c", margin: "12px 0 8px", lineHeight: "1.2" }}>Born With a Purpose</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
              In 1963, two students embarked on a mission to build a device that would save lives and improve the health of people suffering from heart disease. They had a clear purpose: to harmonize technology with the human body.
            </p>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
              Decades later, that purpose remains the beating heart of BIOTRONIK. We innovate because lives depend on it. We strive for excellence because patients deserve nothing less. And we never stop pushing the boundaries of what is possible in cardiac care and chronic pain management.
            </p>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9" }}>
              Our mission: <strong style={{ color: "#00234c" }}>to save and improve lives through pioneering innovation in cardiac and pain care.</strong>
            </p>
          </div>
          <img src={`${BASE}images/hero_main.webp`} alt="Patient" style={{ width: "100%", height: "360px", objectFit: "cover" }} />
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "64px 40px", background: "#00234c" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "12px", fontWeight: "700", color: "#d73604", textTransform: "uppercase", letterSpacing: "1.5px" }}>Our Vision</span>
          <h2 style={{ fontSize: "40px", fontWeight: "300", color: "#fff", margin: "12px 0 8px" }}>One Second. One Life.</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "0 auto 24px" }} />
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.8)", lineHeight: "1.9", maxWidth: "760px", margin: "0 auto" }}>
            Our vision is for our technology to save, extend, and improve the quality of life for every patient — in every second of every day. By developing pioneering products and services, we are changing the lives of millions of patients worldwide. In a single heartbeat, our devices respond. In a single second, they can mean the difference between life and death.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "64px 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#d73604", textTransform: "uppercase", letterSpacing: "1.5px" }}>Our Values</span>
            <h2 style={{ fontSize: "34px", fontWeight: "300", color: "#00234c", margin: "12px 0 8px" }}>Our Values Serve as a Compass</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {[
              {
                title: "The Highest Quality",
                text: "We design and manufacture every device to the most rigorous standards. Quality is non-negotiable when lives depend on it. Our manufacturing processes comply with the most stringent international medical device regulations.",
                icon: "★",
              },
              {
                title: "Safety for Patients",
                text: "Patient safety is paramount in everything we do. We continuously monitor, study, and improve our devices to ensure that every patient who relies on a BIOTRONIK product receives safe, effective therapy.",
                icon: "🛡",
              },
              {
                title: "Solutions for Tomorrow",
                text: "We invest heavily in research and development to pioneer the next generation of medical innovations. Our engineers, scientists, and clinicians collaborate to solve challenges that have never been solved before.",
                icon: "💡",
              },
              {
                title: "Excellence for Life",
                text: "Our founding principle is the foundation of everything. We pursue excellence in every product, every service, every interaction — because our patients deserve the very best.",
                icon: "♥",
              },
              {
                title: "Integrity & Trust",
                text: "We act with integrity in all that we do. We are transparent with our partners, our employees, and the communities we serve. Trust is earned through honest, consistent action.",
                icon: "🤝",
              },
              {
                title: "People First",
                text: "We are a people business. Every one of our 6,000+ employees matters and belongs. Diversity of thought, background, and experience drives our innovation and our culture.",
                icon: "👥",
              },
            ].map((value, i) => (
              <div key={i} style={{ borderTop: "3px solid #d73604", paddingTop: "24px" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{value.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#00234c", marginBottom: "12px" }}>{value.title}</h3>
                <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8" }}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 40px", background: "#f2f2f2" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <p style={{ fontSize: "18px", color: "#00234c", fontWeight: "300" }}>
            Want to be part of a company with a mission that matters?
          </p>
          <Link href="/en-us/careers" style={{
            display: "inline-block", background: "#d73604", color: "#fff",
            padding: "12px 32px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
          }}>Explore Careers</Link>
        </div>
      </section>
    </main>
  );
}
