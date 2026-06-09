import { Link } from "wouter";

export default function GTCPage() {
  const items = [
    "General Terms and Conditions for the Use of the BIOTRONIK Patient App (English)",
    "Allgemeine Geschäftsbedingungen für die Verwendung der BIOTRONIK Patient App (Deutsch)",
    "Termini e condizioni generali per l'uso della Patient App di BIOTRONIK (Italiano)",
    "Algemene Voorwaarden voor het gebruik van de BIOTRONIK Patient App (Nederlands)",
    "Všeobecné obchodní podmínky pro používání aplikace BIOTRONIK Patient App (čeština)",
    "Ogólne warunki korzystania z aplikacji pacjenta BIOTRONIK (Polski)",
    "Allmänna villkor för användning av BIOTRONIK Patient App (Svenska)",
    "Términos y condiciones generales para el uso de la App del paciente BIOTRONIK (Español)",
  ];

  return (
    <main style={{ paddingTop: "72px" }}>
      <section style={{ background: "#00234c", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px" }}>
            <Link href="/en-us" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>General Terms and Conditions</span>
          </nav>
          <h1 style={{ fontSize: "38px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>General Terms and Conditions</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604" }} />
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#00234c", marginBottom: "16px" }}>General Terms and Conditions of Purchase</h2>
          <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px" }}>
            The General Terms and Conditions of Purchase govern the business relationship between BIOTRONIK SE & Co. KG and its suppliers and business partners. These terms apply to all orders and purchase agreements unless otherwise agreed in writing.
          </p>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#d73604", color: "#fff", padding: "12px 24px",
            fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download GTC (PDF)
          </a>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#00234c", marginBottom: "16px" }}>Terms of Use — Patient App</h2>
          <p style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "24px" }}>
            The following terms of use govern the use of the BIOTRONIK Patient App. Please select your language:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {items.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px",
                border: "1px solid #d0dce8", transition: "all 0.15s", cursor: "pointer"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#d73604"; e.currentTarget.style.background = "#fef8f6"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#d0dce8"; e.currentTarget.style.background = "#fff"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d73604" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <span style={{ fontSize: "14px", color: "#415d72" }}>{item}</span>
                <span style={{ marginLeft: "auto", color: "#d73604", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", flexShrink: 0 }}>Download →</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#eaf0f6", padding: "28px", borderLeft: "4px solid #d73604" }}>
          <p style={{ fontSize: "14px", color: "#596a76", lineHeight: "1.8" }}>
            <strong style={{ color: "#00234c" }}>Questions?</strong> For questions about these terms and conditions, please contact your local BIOTRONIK representative or reach us at <a href="mailto:info@biotronik.com" style={{ color: "#d73604" }}>info@biotronik.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
