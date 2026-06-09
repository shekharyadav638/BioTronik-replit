import { Link } from "wouter";
import { newsroomArticles, BASE_IMG } from "../data/siteData";

export default function NewsroomPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Hero */}
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Newsroom</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
            Stay up to date with the latest news, press releases, and announcements from BIOTRONIK.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", marginBottom: "60px" }}>
          <div style={{ overflow: "hidden", height: "340px" }}>
            <img
              src={`${BASE_IMG}${newsroomArticles[0].img}`}
              alt={newsroomArticles[0].title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#d73604", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {newsroomArticles[0].category} · {newsroomArticles[0].date}
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#00234c", margin: "16px 0 20px", lineHeight: "1.3" }}>
              {newsroomArticles[0].title}
            </h2>
            <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.8", marginBottom: "28px" }}>
              {newsroomArticles[0].summary}
            </p>
            <Link href={newsroomArticles[0].href} style={{
              display: "inline-block", background: "#d73604", color: "#fff",
              padding: "12px 28px", fontSize: "13px", fontWeight: "600",
              textTransform: "uppercase", letterSpacing: "0.5px", transition: "background 0.2s"
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#a22702")}
              onMouseLeave={e => (e.currentTarget.style.background = "#d73604")}
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Article grid */}
        <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Latest News</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "60px" }}>
          {newsroomArticles.slice(1).map((article) => (
            <Link key={article.href} href={article.href} style={{ display: "flex", flexDirection: "column", color: "inherit" }}>
              <div style={{ height: "200px", overflow: "hidden", marginBottom: "20px" }}>
                <img
                  src={`${BASE_IMG}${article.img}`}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <span style={{ fontSize: "11px", color: "#d73604", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {article.category} · {article.date}
              </span>
              <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#00234c", margin: "10px 0 12px", lineHeight: "1.5" }}>
                {article.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7", flexGrow: 1 }}>{article.summary}</p>
              <span style={{ display: "inline-block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
