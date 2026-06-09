import { Link } from "wouter";
import { productCategories, BASE_IMG } from "../data/siteData";

const BASE = import.meta.env.BASE_URL;

const crmProducts = [
  { title: "Pacemakers", href: "/en-us/products/cardiac-rhythm-management/pacemakers", desc: "Single- and dual-chamber pacemakers with advanced diagnostic capabilities." },
  { title: "ICD Systems", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems", desc: "Implantable cardioverter-defibrillators for life-threatening arrhythmia management." },
  { title: "CRT Systems", href: "/en-us/products/cardiac-rhythm-management/cardiac-resynchronization-therapy-systems", desc: "Cardiac resynchronization therapy for heart failure patients." },
  { title: "Remote Monitoring", href: "/en-us/products/cardiac-rhythm-management/remote-patient-monitoring-systems", desc: "Home Monitoring® for automatic, daily device and patient data transmission." },
  { title: "ICD Leads", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems/icd-leads/plexa", desc: "High-performance leads designed for long-term reliability." },
  { title: "Lead Delivery Systems", href: "/en-us/products/cardiac-rhythm-management/lead-delivery-systems", desc: "Innovative delivery systems for precise lead implantation." },
];

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Products</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
            BIOTRONIK develops innovative medical devices for cardiac rhythm management, electrophysiology, endovascular therapy, and neuromodulation.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        {/* Product categories */}
        <h2 style={{ fontSize: "32px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Product Areas</h2>
        <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", marginBottom: "80px" }}>
          {productCategories.map(cat => (
            <Link key={cat.href} href={cat.href} style={{
              display: "grid", gridTemplateColumns: "240px 1fr",
              background: "#eaf0f6", overflow: "hidden",
              transition: "box-shadow 0.2s", color: "inherit"
            }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img src={`${BASE_IMG}${cat.img}`} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => { e.currentTarget.style.background = "#c5d5e5"; }}
                />
              </div>
              <div style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#00234c", marginBottom: "12px", lineHeight: "1.3" }}>{cat.title}</h3>
                <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7" }}>{cat.description}</p>
                <span style={{ display: "inline-block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>
                  View Products →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CRM detail */}
        <div style={{ borderTop: "1px solid #e0e8f0", paddingTop: "60px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Cardiac Rhythm Management</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "40px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {crmProducts.map(p => (
              <Link key={p.href} href={p.href} style={{
                display: "block", padding: "24px", border: "1px solid #d0dce8",
                color: "inherit", transition: "all 0.2s"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#d73604"; e.currentTarget.style.background = "#fef8f6"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0dce8"; e.currentTarget.style.background = ""; }}
              >
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#00234c", marginBottom: "10px" }}>{p.title}</h4>
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
