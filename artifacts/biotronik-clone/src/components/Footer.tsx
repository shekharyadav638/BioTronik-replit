import { Link } from "wouter";

const BASE = import.meta.env.BASE_URL;

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/en-us/company/about-us" },
      { label: "Our History", href: "/en-us/company/about-us/our-history" },
      { label: "Mission, Vision, Values", href: "/en-us/company/about-us/mission-vision-values" },
      { label: "Corporate Responsibility", href: "/en-us/company/corporate-responsibility" },
      { label: "Sustainability", href: "/en-us/company/sustainability" },
      { label: "Locations", href: "/en-us/company/locations" },
      { label: "Careers", href: "/en-us/careers" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Patients and Caregivers", href: "/en-us/patients/patients-and-caregivers" },
      { label: "Conditions", href: "/en-us/patients/conditions" },
      { label: "Heart Monitoring", href: "/en-us/patients/patients-and-caregivers/heart-monitoring" },
      { label: "Therapies", href: "/en-us/patients/therapies" },
      { label: "Everyday Life", href: "/en-us/patients/patients-and-caregivers/everyday-life" },
      { label: "FAQ", href: "/en-us/patients/faq" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Cardiac Rhythm Management", href: "/en-us/products/cardiac-rhythm-management" },
      { label: "Pacemakers", href: "/en-us/products/cardiac-rhythm-management/pacemakers" },
      { label: "ICD Systems", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems" },
      { label: "CRT Systems", href: "/en-us/products/cardiac-rhythm-management/cardiac-resynchronization-therapy-systems" },
      { label: "Remote Monitoring", href: "/en-us/products/cardiac-rhythm-management/remote-patient-monitoring-systems" },
      { label: "Neuromodulation", href: "/en-us/products/neuromodulation" },
      { label: "Electrophysiology", href: "/en-us/products/electrophysiology" },
    ],
  },
  {
    title: "Professionals",
    links: [
      { label: "Clinical Studies", href: "/en-us/professionals/clinical-studies" },
      { label: "Featured Technologies", href: "/en-us/professionals/featured-technologies" },
      { label: "DX Technology", href: "/en-us/professionals/featured-technologies/dx-technology" },
      { label: "Events", href: "/en-us/professionals/events" },
      { label: "Education", href: "/en-us/professionals/education" },
      { label: "Remote Monitoring", href: "/en-us/professionals/remote-patient-monitoring" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#00234c", color: "#fff", marginTop: "auto" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px 40px" }}>
        {/* Logo row */}
        <div style={{ marginBottom: "48px" }}>
          <img src={`${BASE}logo.svg`} alt="BIOTRONIK" style={{ height: "40px", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
          <p style={{ marginTop: "16px", fontSize: "14px", color: "#8396ad", maxWidth: "360px", lineHeight: "1.7" }}>
            BIOTRONIK – Excellence for Life. We are committed to helping people with heart diseases and chronic pain live fulfilling lives.
          </p>
        </div>

        {/* Link columns */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px"
        }}>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: "12px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", color: "#d73604", marginBottom: "16px"
              }}>
                {col.title}
              </h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "13px", color: "#8396ad",
                        transition: "color 0.15s", display: "block"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8396ad")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "48px",
          paddingTop: "24px", display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "16px"
        }}>
          <p style={{ fontSize: "13px", color: "#8396ad" }}>
            © {new Date().getFullYear()} BIOTRONIK SE &amp; Co. KG. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "General Terms and Conditions", href: "/en-us/general-terms-and-conditions" },
              { label: "Privacy Statement", href: "/en-us/privacy-statement" },
              { label: "Imprint", href: "/en-us/imprint" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: "13px", color: "#8396ad", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8396ad")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
