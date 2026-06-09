import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

const sections = [
  {
    title: "Patients and Caregivers",
    description: "Information for patients living with a BIOTRONIK device and for their families and caregivers.",
    href: "/en-us/patients/patients-and-caregivers",
    img: `${BASE}images/img_01_MicrosoftTeams-image_0.png.webp`,
  },
  {
    title: "Conditions",
    description: "Learn about heart conditions such as arrhythmia, heart failure, and coronary artery disease.",
    href: "/en-us/patients/conditions",
    img: `${BASE}images/img_03_BIO38276_Bilder_HP_mockup.jpg`,
  },
  {
    title: "Heart Monitoring",
    description: "Remote monitoring helps your doctor track your heart device without requiring you to visit the clinic.",
    href: "/en-us/patients/patients-and-caregivers/heart-monitoring",
    img: `${BASE}images/img_09_Forbes_US-NewGrads_2025_Logo_Square_1.jp`,
  },
  {
    title: "Therapies",
    description: "BIOTRONIK offers a wide range of therapies for the treatment of cardiac arrhythmias and chronic pain.",
    href: "/en-us/patients/therapies",
    img: `${BASE}images/img_11_BIO34590_Neurostimulationsgeraet_Prosper`,
  },
  {
    title: "Everyday Life",
    description: "Tips and guidance for living everyday life with a cardiac implant — travel, work, leisure and more.",
    href: "/en-us/patients/patients-and-caregivers/everyday-life",
    img: `${BASE}images/img_04_BIO36645_Studenten.jpg`,
  },
  {
    title: "FAQ",
    description: "Answers to the most frequently asked questions about BIOTRONIK devices and therapies.",
    href: "/en-us/patients/faq",
    img: `${BASE}images/img_07_100k_20Highlights.jpg.webp`,
  },
];

const faqItems = [
  { q: "What should I do if I feel unwell with my heart device?", a: "If you experience any unusual symptoms such as dizziness, shortness of breath, or chest pain, contact your physician immediately or call emergency services." },
  { q: "Can I travel by plane with a pacemaker or ICD?", a: "Yes, most patients with cardiac implants can travel by air. Inform security staff about your device as it may trigger metal detectors. Your device will not be affected by the security scan." },
  { q: "How does remote monitoring work?", a: "Your BIOTRONIK device automatically transmits data to a secure server via a small transmitter in your home. Your clinic can then review this data without you needing to come in for a check-up." },
  { q: "Can I use a mobile phone with my heart device?", a: "Modern BIOTRONIK devices are designed to work safely with mobile phones. We recommend keeping your phone at least 15 cm (6 inches) away from your device as a precaution." },
];

export default function PatientsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#fff", marginBottom: "8px" }}>Patients</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "20px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px" }}>
            Information, support, and guidance for patients and caregivers living with BIOTRONIK devices.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "80px" }}>
          {sections.map(s => (
            <Link key={s.href} href={s.href} style={{ display: "flex", flexDirection: "column", color: "inherit" }}>
              <div style={{ height: "200px", overflow: "hidden", marginBottom: "20px" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  onError={e => { e.currentTarget.style.background = "#eaf0f6"; }}
                />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#00234c", marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.7", flexGrow: 1 }}>{s.description}</p>
              <span style={{ display: "inline-block", marginTop: "16px", color: "#d73604", fontWeight: "600", fontSize: "12px", textTransform: "uppercase" }}>More →</span>
            </Link>
          ))}
        </div>

        {/* FAQ Preview */}
        <div style={{ background: "#eaf0f6", padding: "48px 40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "300", color: "#00234c", marginBottom: "8px" }}>Frequently Asked Questions</h2>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "32px" }} />
          {faqItems.map((item, i) => (
            <details key={i} style={{ borderBottom: "1px solid #d0dce8", padding: "16px 0" }}>
              <summary style={{ fontSize: "15px", fontWeight: "600", color: "#00234c", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {item.q}
                <span style={{ color: "#d73604", fontSize: "20px", lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8", marginTop: "12px", paddingLeft: "0" }}>
                {item.a}
              </p>
            </details>
          ))}
          <Link href="/en-us/patients/faq" style={{
            display: "inline-block", marginTop: "32px", background: "#00234c", color: "#fff",
            padding: "12px 28px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
          }}>All FAQs</Link>
        </div>
      </section>
    </main>
  );
}
