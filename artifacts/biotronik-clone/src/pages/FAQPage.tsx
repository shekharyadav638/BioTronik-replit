import { useState } from "react";
import { Link } from "wouter";

const faqs = [
  {
    category: "Electromagnetic Compatibility",
    items: [
      {
        q: "Can I use a mobile phone if I have a BIOTRONIK device?",
        a: "Modern BIOTRONIK pacemakers and ICDs are designed to be resistant to interference from mobile phones used in everyday life. We recommend keeping your phone at least 15 cm (6 inches) away from your device as a precaution. Do not carry your phone in a breast pocket directly over the device.",
      },
      {
        q: "Are household appliances safe to use?",
        a: "Most household electrical appliances are safe to use with your BIOTRONIK device. This includes microwave ovens, televisions, radios, computers, hair dryers and electric blankets. Avoid holding the appliance directly over your device implant site.",
      },
      {
        q: "What about anti-theft devices and security systems?",
        a: "Anti-theft devices (electronic article surveillance systems) found in retail stores may interfere with your pacemaker or ICD. Walk through these systems at a normal pace rather than standing next to them. Airport security metal detectors and body scanners should not harm your device but may trigger an alarm. Always carry your device identification card.",
      },
    ],
  },
  {
    category: "MRI Scanning Conditions",
    items: [
      {
        q: "Can I have an MRI scan with a pacemaker or ICD?",
        a: "Many BIOTRONIK devices are MR-conditional, meaning they can be used safely under specific MRI conditions. The ability to have an MRI depends on your specific device model. Your physician will verify whether your device is MR-conditional and what conditions apply. Always inform the MRI team about your device before any scan.",
      },
      {
        q: "What is 'MR-conditional' mean?",
        a: "MR-conditional means that the device has been demonstrated to pose no known hazards in a specified MRI environment when used under specific conditions. These conditions include scanner field strength, specific absorption rate, and scan duration limitations. Your physician and the MRI team will work together to ensure safe scanning conditions.",
      },
    ],
  },
  {
    category: "Patient Identification Card",
    items: [
      {
        q: "Do I need to carry my patient identification card?",
        a: "Yes. You should always carry your BIOTRONIK patient identification card with you. This card contains important information about your device including the device type, model, serial number, and implant date. In an emergency, medical personnel can use this information to provide appropriate treatment.",
      },
      {
        q: "What do I do if I lose my patient identification card?",
        a: "If you lose your patient identification card, contact your clinic or physician who implanted your device. They can provide you with a replacement card or the device details you need to request a new card from BIOTRONIK.",
      },
    ],
  },
  {
    category: "BIOTRONIK Home Monitoring",
    items: [
      {
        q: "What is BIOTRONIK Home Monitoring (CardioMessenger)?",
        a: "BIOTRONIK Home Monitoring® is a remote monitoring service that automatically transmits data from your implanted BIOTRONIK device to a secure server daily. Your physician can then view this information through a web portal without you needing to come to the clinic for a check-up. The system can alert your care team if it detects any changes in your device or health status.",
      },
      {
        q: "How does the CardioMessenger work?",
        a: "The CardioMessenger is a small device that you keep near you while you sleep. It communicates wirelessly with your implanted device and sends daily reports to the BIOTRONIK Home Monitoring Center over a mobile network. The process is automatic — you do not need to press any buttons.",
      },
      {
        q: "Is Home Monitoring safe and private?",
        a: "Yes. The data transmitted by your Home Monitoring system is encrypted and handled in compliance with applicable data protection regulations. Only your authorized healthcare team can access your monitoring data. BIOTRONIK does not share your personal health information with third parties without your consent.",
      },
      {
        q: "Does Home Monitoring replace my regular clinic visits?",
        a: "No. Home Monitoring supplements your regular clinic visits — it does not replace them. Your physician will continue to schedule in-clinic follow-up appointments. However, Home Monitoring may allow your physician to extend the time between visits if your device data is stable. In some cases, it may also allow your physician to detect issues earlier.",
      },
    ],
  },
  {
    category: "Product or Clinical Queries",
    items: [
      {
        q: "How do I find information about a specific BIOTRONIK product?",
        a: "Product information can be found in the Products section of our website. For detailed technical specifications, instructions for use, or clinical data, please contact your BIOTRONIK representative or your physician. Product labeling and instructions for use are always the definitive source of information.",
      },
      {
        q: "Where can I find BIOTRONIK clinical studies?",
        a: "An overview of BIOTRONIK's clinical studies in cardiac rhythm management and related fields can be found in the Professionals section under Clinical Studies. BIOTRONIK has been dedicated to advancing the clinical evidence base for its technologies for decades.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link href="/en-us/patients" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Patients</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>FAQ</span>
          </nav>
          <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>FAQ</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604", marginBottom: "16px" }} />
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "640px", lineHeight: "1.7" }}>
            Patient Queries — Do you have a question about your BIOTRONIK device? Find answers to frequently asked questions below.
          </p>
        </div>
      </section>

      <section style={{ padding: "16px 40px 16px", background: "#eaf0f6" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", color: "#596a76", lineHeight: "1.7", padding: "20px 0" }}>
            <strong style={{ color: "#d73604" }}>Important:</strong> The general information contained in this website is for patients who have enquiries about BIOTRONIK products. In the event of a medical emergency, please contact your local emergency services immediately. The information provided here is for general guidance only and does not replace professional medical advice.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 40px 80px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "48px" }}>
          {/* Sidebar nav */}
          <aside>
            <div style={{ position: "sticky", top: "96px" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "700", color: "#00234c", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "16px" }}>Categories</h3>
              {faqs.map(section => (
                <a key={section.category} href={`#${section.category.replace(/\s+/g, '-')}`} style={{
                  display: "block", padding: "10px 16px", fontSize: "14px", color: "#415d72",
                  borderLeft: "3px solid #d0dce8", marginBottom: "4px", transition: "all 0.15s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#d73604"; e.currentTarget.style.color = "#d73604"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0dce8"; e.currentTarget.style.color = "#415d72"; }}
                >
                  {section.category}
                </a>
              ))}
            </div>
          </aside>

          {/* FAQ content */}
          <div>
            {faqs.map(section => (
              <div key={section.category} id={section.category.replace(/\s+/g, '-')} style={{ marginBottom: "48px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#00234c", marginBottom: "8px" }}>{section.category}</h2>
                <div style={{ width: "32px", height: "2px", background: "#d73604", marginBottom: "24px" }} />
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={i} style={{ borderBottom: "1px solid #e0e8f0", marginBottom: "0" }}>
                      <button
                        onClick={() => toggle(key)}
                        style={{
                          width: "100%", textAlign: "left", padding: "18px 0",
                          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                          background: "none", border: "none", cursor: "pointer", gap: "16px"
                        }}
                      >
                        <span style={{ fontSize: "15px", fontWeight: "600", color: "#00234c", lineHeight: "1.5" }}>{item.q}</span>
                        <span style={{ color: "#d73604", fontSize: "22px", lineHeight: 1, flexShrink: 0, fontWeight: "300" }}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 0 20px", fontSize: "15px", color: "#596a76", lineHeight: "1.8" }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Contact */}
            <div style={{ background: "#00234c", padding: "32px", marginTop: "32px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#fff", marginBottom: "12px" }}>Contact Us</h3>
              <div style={{ width: "32px", height: "2px", background: "#d73604", marginBottom: "16px" }} />
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", marginBottom: "20px" }}>
                Couldn't find the answer you were looking for? Get in touch with your local BIOTRONIK representative or contact your clinic directly.
              </p>
              <Link href="/en-us/company/locations" style={{
                display: "inline-block", background: "#d73604", color: "#fff",
                padding: "10px 24px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
              }}>Find a Location</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
