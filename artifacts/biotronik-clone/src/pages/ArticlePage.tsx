import { Link, useRoute } from "wouter";
import { newsroomArticles, BASE_IMG } from "../data/siteData";

export default function ArticlePage() {
  const [, params] = useRoute("/en-us/:rest*");
  const slugParam = params ? (params as Record<string, string>)["rest*"] ?? (params as Record<string, string>)["rest"] ?? "" : "";
  const slug = slugParam.split("/").pop() || "";

  const article = newsroomArticles.find(a => a.href.endsWith(slug));

  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Link href="/en-us/newsroom" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            ← Newsroom
          </Link>
          {article && (
            <span style={{ display: "block", fontSize: "12px", color: "#d73604", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
              {article.category} · {article.date}
            </span>
          )}
          <h1 style={{ fontSize: "36px", fontWeight: "600", color: "#fff", lineHeight: "1.3", maxWidth: "780px" }}>
            {article?.title || slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
          </h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginTop: "20px" }} />
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "60px" }}>
          <div>
            {article?.img && (
              <img src={`${BASE_IMG}${article.img}`} alt={article.title} style={{ width: "100%", height: "360px", objectFit: "cover", marginBottom: "40px" }} />
            )}
            <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9", marginBottom: "24px" }}>
              {article?.summary || "BIOTRONIK continues to drive innovation in cardiac rhythm management, neuromodulation, and endovascular therapy. Our commitment to excellence for life guides every product we develop and every solution we bring to market."}
            </p>
            <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9", marginBottom: "24px" }}>
              As a global leader in the medical device industry, BIOTRONIK works closely with physicians, hospitals, and patients to develop technologies that improve outcomes and quality of life. Our research-driven approach ensures that our innovations are clinically validated and built on a foundation of scientific evidence.
            </p>
            <p style={{ fontSize: "16px", color: "#596a76", lineHeight: "1.9" }}>
              BIOTRONIK's portfolio spans the full spectrum of cardiac care — from pacemakers and ICDs to remote monitoring systems and spinal cord stimulation devices. Each product reflects our dedication to precision engineering and patient-centered design.
            </p>
          </div>
          <div>
            <div style={{ background: "#eaf0f6", padding: "32px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#00234c", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Related News</h3>
              {newsroomArticles.slice(0, 4).map(rel => (
                <div key={rel.href} style={{ borderBottom: "1px solid #d0dce8", paddingBottom: "16px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "11px", color: "#d73604", fontWeight: "600", textTransform: "uppercase" }}>{rel.date}</span>
                  <Link href={rel.href} style={{ display: "block", fontSize: "14px", color: "#00234c", marginTop: "6px", lineHeight: "1.5", fontWeight: "500" }}>
                    {rel.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
