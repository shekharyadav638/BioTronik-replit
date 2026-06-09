import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

export default function CompanyPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Company</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
            BIOTRONIK — Excellence for Life. For over 60 years, we have been dedicated to improving the lives of people with heart diseases and chronic pain.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", marginBottom: "80px" }}>
          <div>
            <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>About Us</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
              BIOTRONIK was founded in 1963 by Professor Max Schaldach in Berlin, Germany. Since then, we have grown into a global leader in cardiac rhythm management, electrophysiology, neuromodulation, and endovascular therapy.
            </p>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "28px" }}>
              Today, BIOTRONIK products are used in more than 100 countries worldwide. Our team of over 6,000 employees is dedicated to developing innovative medical devices that save and improve lives every day.
            </p>
            <Link href="/en-us/company/about-us" style={{
              display: "inline-block", background: "#d73604", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px"
            }}>Learn More</Link>
          </div>
          <img src={`${BASE}images/img_02_BIO38828_Mitarbeiter.jpg.webp`} alt="BIOTRONIK employees" style={{ width: "100%", height: "380px", objectFit: "cover" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {[
            { title: "Our History", text: "Since 1963, we have been pioneers in developing life-saving medical devices.", href: "/en-us/company/about-us/our-history", img: `${BASE}images/img_16_Our_20History.jpg.webp` },
            { title: "Corporate Responsibility", text: "We take our responsibility to society, our patients, and the environment seriously.", href: "/en-us/company/corporate-responsibility", img: `${BASE}images/img_04_BIO36645_Studenten.jpg` },
            { title: "Careers", text: "Join a team of over 6,000 passionate professionals dedicated to excellence for life.", href: "/en-us/careers", img: `${BASE}images/img_17_BIO37566_Mitarbeiter_0.jpg.webp` },
          ].map(card => (
            <div key={card.href}>
              <div style={{ height: "200px", overflow: "hidden", marginBottom: "20px" }}>
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#00234c", marginBottom: "12px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7", marginBottom: "16px" }}>{card.text}</p>
              <Link href={card.href} style={{ color: "#d73604", fontWeight: "600", fontSize: "13px", textTransform: "uppercase" }}>More →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
