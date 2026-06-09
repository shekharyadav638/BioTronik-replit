import { Link } from "wouter";
import { homeHighlights, productCategories, BASE_IMG } from "../data/siteData";

const BASE = import.meta.env.BASE_URL;

export default function HomePage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "540px", display: "flex", alignItems: "center",
        overflow: "hidden", background: "#e8eef4"
      }}>
        <img
          src={`${BASE}images/hero_main.webp`}
          alt="BIOTRONIK hero"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center right"
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 55%, transparent 100%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px", width: "100%" }}>
          <div style={{ maxWidth: "560px" }}>
            <h1 style={{ fontSize: "52px", fontWeight: "700", color: "#d73604", lineHeight: "1.1", marginBottom: "8px", letterSpacing: "-0.5px" }}>
              BIOTRONIK
            </h1>
            <h2 style={{ fontSize: "40px", fontWeight: "300", color: "#00234c", lineHeight: "1.2", marginBottom: "20px", fontStyle: "italic" }}>
              Excellence for Life
            </h2>
            <div style={{ width: "48px", height: "3px", background: "#d73604", marginBottom: "24px" }} />
            <p style={{ fontSize: "18px", color: "#415d72", lineHeight: "1.7", maxWidth: "480px" }}>
              At BIOTRONIK, we are committed to helping people with heart diseases and chronic pain live fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      {/* Difference We Make */}
      <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>The Difference We Make</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "48px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {[
            {
              title: "What Drives Us",
              text: "Our passion lies in the positive impact we can create in people's lives by excelling in what we do. Learn more about the mission, vision and values that drive us each day.",
              href: "/en-us/company/about-us/mission-vision-values",
              img: `${BASE}images/img_16_Our_20History.jpg.webp`,
            },
            {
              title: "We Continuously Innovate Technology",
              text: "Our solutions help to improve the diagnosis, treatment and prevention of heart diseases as well as chronic pain. Find out how we continue to drive innovation.",
              href: "/en-us/company/innovations",
              img: `${BASE}images/img_02_BIO38828_Mitarbeiter.jpg.webp`,
            },
            {
              title: "We're a People Business",
              text: "We are a global organization, and every one of us matters, belongs. When it comes down to it, we're a people business.",
              href: "/en-us/careers",
              img: `${BASE}images/img_04_BIO36645_Studenten.jpg`,
            },
          ].map((card) => (
            <div key={card.title} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "220px", overflow: "hidden", marginBottom: "24px" }}>
                <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#00234c", marginBottom: "12px", lineHeight: "1.3" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7", flexGrow: 1, marginBottom: "20px" }}>{card.text}</p>
              <Link href={card.href} style={{
                display: "inline-block", color: "#d73604", fontWeight: "600", fontSize: "13px",
                letterSpacing: "0.5px", textTransform: "uppercase",
                borderBottom: "2px solid #d73604", paddingBottom: "2px", alignSelf: "flex-start"
              }}>More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section style={{ background: "#f2f2f2", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Highlights</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "48px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {homeHighlights.map((item) => (
              <Link key={item.href} href={item.href} style={{ display: "flex", flexDirection: "column", background: "#fff", overflow: "hidden", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={`${BASE_IMG}${item.img}`}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onError={e => { e.currentTarget.style.background = "#eaf0f6"; }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "16px", flexGrow: 1 }}>
                  <span style={{ fontSize: "11px", color: "#d73604", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.date}</span>
                  <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#00234c", lineHeight: "1.5", marginTop: "8px" }}>{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Our Products</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "48px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
            {productCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} style={{
                display: "grid", gridTemplateColumns: "200px 1fr", overflow: "hidden",
                background: "#eaf0f6", transition: "box-shadow 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ overflow: "hidden", height: "160px" }}>
                  <img src={`${BASE_IMG}${cat.img}`} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#00234c", marginBottom: "10px", lineHeight: "1.3" }}>{cat.title}</h3>
                  <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7" }}>{cat.description}</p>
                  <span style={{ display: "inline-block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* History Banner */}
      <section style={{ position: "relative", background: "#00234c", overflow: "hidden" }}>
        <img
          src={`${BASE}images/img_16_Our_20History.jpg.webp`}
          alt="Our History"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }}
        />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Advancing Health and Well-Being Since 1963</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "16px 0 24px" }} />
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8" }}>
              For over 60 years, BIOTRONIK has been pioneering life-saving innovations in cardiac care, neuromodulation, and endovascular therapy. Our founding principle remains unchanged: Excellence for Life.
            </p>
            <Link href="/en-us/company/about-us/our-history" style={{
              display: "inline-block", marginTop: "32px", padding: "12px 28px",
              border: "2px solid #fff", color: "#fff", fontSize: "13px", fontWeight: "600",
              textTransform: "uppercase", letterSpacing: "0.5px", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00234c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            >
              More
            </Link>
          </div>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Making a Difference with Heart</h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", margin: "16px 0 24px" }} />
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8" }}>
              We take our responsibility seriously — to our patients, our employees, our partners, and the communities we serve. Corporate responsibility is at the heart of everything we do.
            </p>
            <Link href="/en-us/company/corporate-responsibility" style={{
              display: "inline-block", marginTop: "32px", padding: "12px 28px",
              border: "2px solid #fff", color: "#fff", fontSize: "13px", fontWeight: "600",
              textTransform: "uppercase", letterSpacing: "0.5px", transition: "all 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#00234c"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            >
              More
            </Link>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section style={{ padding: "80px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "300", color: "#00234c" }}>Press Releases</h2>
          <Link href="/en-us/newsroom" style={{ color: "#d73604", fontWeight: "600", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            All News →
          </Link>
        </div>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "48px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {homeHighlights.slice(0, 3).map((item) => (
            <div key={item.href} style={{ borderBottom: "2px solid #d73604", paddingBottom: "24px" }}>
              <span style={{ fontSize: "11px", color: "#8396ad", textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.date}</span>
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#00234c", margin: "10px 0 14px", lineHeight: "1.5" }}>{item.title}</h4>
              <Link href={item.href} style={{ color: "#d73604", fontWeight: "600", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
