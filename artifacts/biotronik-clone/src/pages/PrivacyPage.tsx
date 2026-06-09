import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>Privacy Statement</span>
          </nav>
          <h1 style={{ fontSize: "38px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>Privacy Statement</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604" }} />
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        <p style={{ fontSize: "14px", color: "#8396ad", marginBottom: "32px" }}>Last updated: January 2024</p>

        {[
          {
            title: 'Privacy Statement by BIOTRONIK SE & Co KG (\u201cBIOTRONIK\u201d)',
            content: `BIOTRONIK SE & Co. KG and its affiliates ("BIOTRONIK", "we", "our", or "us") are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Statement explains how we collect, use, disclose, and protect your personal information when you use our website and services.`,
          },
          {
            title: "Available Privacy Documents",
            content: null,
            list: [
              "Privacy Statement by BIOTRONIK SE & Co KG (English)",
              "Allgemeine Datenschutzerklärung der BIOTRONIK SE & Co. KG (Deutsch)",
              "Déclaration de confidentialité de BIOTRONIK SE & Co. KG (Français)",
              "Declaración de privacidad de BIOTRONIK SE & Co. KG (Español)",
              "Dichiarazione sulla protezione dei dati della BIOTRONIK SE & Co. KG (Italiano)",
            ],
          },
          {
            title: "What Information Do We Collect?",
            content: `We collect information that you provide to us directly, such as when you create an account, contact us, or use our services. We also collect information automatically when you visit our website, including your IP address, browser type, pages visited, and the time and date of your visit. We may also receive information about you from third parties, such as business partners and publicly available sources.`,
          },
          {
            title: "How Do We Use Your Information?",
            content: `We use your personal information to: provide and improve our products and services; communicate with you about products, services, and events; process transactions and send related information; respond to your comments and questions; send you technical notices, updates, and security alerts; and comply with legal obligations. We will not sell your personal data to third parties.`,
          },
          {
            title: "International Fellows Program",
            content: `The International Fellows Program has its own specific privacy notice that governs the collection and use of personal information submitted through that program. Please review the International Fellows Program Privacy Notice before submitting your application.`,
          },
          {
            title: "Embrace One Provider Portal",
            content: `The Embrace One Provider Portal has its own specific privacy notice. Healthcare professionals accessing the portal should review the Embrace One Provider Portal Privacy Notice, which governs the collection and use of information submitted through that platform.`,
          },
          {
            title: "Patient App Privacy Notice",
            content: `If you use the BIOTRONIK Patient App, your use is governed by the Patient App Privacy Notice and, where applicable, the Patient App Consent for Health Data. These documents explain how your health data is collected, processed, and protected when you use the Patient App.`,
          },
          {
            title: "Your Rights",
            content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal data; the right to object to or restrict certain types of processing; the right to data portability; and the right to withdraw consent. To exercise your rights, please contact our Data Protection Officer at datenschutz@biotronik.com.`,
          },
          {
            title: "Contact",
            content: `If you have any questions about this Privacy Statement or our data protection practices, please contact: BIOTRONIK SE & Co. KG, Woermannkehre 1, 12359 Berlin, Germany. Data Protection Officer: datenschutz@biotronik.com`,
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: "36px", paddingBottom: "36px", borderBottom: i < 8 ? "1px solid #e0e8f0" : "none" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#00234c", marginBottom: "16px" }}>{section.title}</h2>
            {section.content && (
              <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9" }}>{section.content}</p>
            )}
            {section.list && (
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.list.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#415d72" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d73604", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
