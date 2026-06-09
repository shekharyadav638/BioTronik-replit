import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

export default function CareersPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ position: "relative", minHeight: "400px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src={`${BASE}images/img_04_BIO36645_Studenten.jpg`} alt="Careers" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,35,76,0.75)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Careers</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "24px" }} />
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", maxWidth: "600px", lineHeight: "1.7" }}>
            Join a team of passionate professionals dedicated to improving the lives of people with heart diseases and chronic pain.
          </p>
        </div>
      </section>

      {/* Forbes badge */}
      <section style={{ background: "#eaf0f6", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "40px" }}>
          <img src={`${BASE}images/img_09_Forbes_US-NewGrads_2025_Logo_Square_1.jp`} alt="Forbes Best Employer" style={{ width: "120px", height: "120px", objectFit: "cover", flexShrink: 0 }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#00234c", marginBottom: "12px" }}>Forbes Names BIOTRONIK One of the Best Employers for New Grads!</h2>
            <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.8" }}>
              BIOTRONIK has been recognized by Forbes magazine as one of the best employers for new graduates in the United States, reflecting our commitment to nurturing young talent.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Why BIOTRONIK?</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "60px" }}>
          {[
            { icon: "🏥", title: "Meaningful Work", text: "Every day you contribute to improving the lives of patients with cardiac and neurological conditions worldwide." },
            { icon: "🔬", title: "Innovation Culture", text: "We invest heavily in R&D and encourage our employees to think boldly and pursue new ideas." },
            { icon: "🌍", title: "Global Reach", text: "With offices in over 100 countries, BIOTRONIK offers career opportunities and international experiences." },
            { icon: "📚", title: "Learning & Development", text: "We invest in training, mentorship, and continuing education to help you grow professionally." },
            { icon: "🤝", title: "Inclusive Culture", text: "We believe every one of our employees matters and belongs. Diversity drives innovation." },
            { icon: "💰", title: "Competitive Benefits", text: "We offer competitive salaries, health benefits, retirement plans, and work-life balance programs." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "28px", border: "1px solid #e0e8f0" }}>
              <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>{item.icon}</span>
              <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#00234c", marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7" }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#00234c", padding: "48px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Ready to Join Us?</h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>Explore our current job openings and find the right opportunity for you.</p>
          </div>
          <Link href="/en-us/careers/jobs" style={{
            display: "inline-block", background: "#d73604", color: "#fff",
            padding: "14px 36px", fontSize: "14px", fontWeight: "600", textTransform: "uppercase",
            letterSpacing: "0.5px", flexShrink: 0
          }}>View Jobs</Link>
        </div>
      </section>
    </main>
  );
}
