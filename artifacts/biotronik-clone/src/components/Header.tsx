import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";

const BASE = import.meta.env.BASE_URL;

const navItems = [
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/en-us/company/about-us" },
      { label: "Innovations", href: "/en-us/company/innovations" },
      { label: "Our History", href: "/en-us/company/about-us/our-history" },
      { label: "Mission, Vision, Values", href: "/en-us/company/about-us/mission-vision-values" },
      { label: "Corporate Responsibility", href: "/en-us/company/corporate-responsibility" },
      { label: "Sustainability", href: "/en-us/company/sustainability" },
      { label: "Locations", href: "/en-us/company/locations" },
    ],
  },
  {
    label: "Patients",
    children: [
      { label: "Patients and Caregivers", href: "/en-us/patients/patients-and-caregivers" },
      { label: "Conditions", href: "/en-us/patients/conditions" },
      { label: "Heart Monitoring", href: "/en-us/patients/patients-and-caregivers/heart-monitoring" },
      { label: "Therapies", href: "/en-us/patients/therapies" },
      { label: "Everyday Life", href: "/en-us/patients/patients-and-caregivers/everyday-life" },
      { label: "Hospital Search", href: "/en-us/patients/hospital-search" },
      { label: "FAQ", href: "/en-us/patients/faq" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Cardiac Rhythm Management", href: "/en-us/products/cardiac-rhythm-management" },
      { label: "Electrophysiology", href: "/en-us/products/electrophysiology" },
      { label: "Endovascular", href: "/en-us/products/endovascular" },
      { label: "Neuromodulation", href: "/en-us/products/neuromodulation" },
      { label: "Pacemakers", href: "/en-us/products/cardiac-rhythm-management/pacemakers" },
      { label: "ICD Systems", href: "/en-us/products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems" },
      { label: "Remote Monitoring", href: "/en-us/products/cardiac-rhythm-management/remote-patient-monitoring-systems" },
    ],
  },
  {
    label: "Professionals",
    children: [
      { label: "Clinical Studies", href: "/en-us/professionals/clinical-studies" },
      { label: "Featured Technologies", href: "/en-us/professionals/featured-technologies" },
      { label: "Events", href: "/en-us/professionals/events" },
      { label: "Education", href: "/en-us/professionals/education" },
      { label: "DX Technology", href: "/en-us/professionals/featured-technologies/dx-technology" },
      { label: "Remote Patient Monitoring", href: "/en-us/professionals/remote-patient-monitoring" },
    ],
  },
  {
    label: "Newsroom",
    children: [
      { label: "Press Releases", href: "/en-us/newsroom/press-releases" },
      { label: "News & Events", href: "/en-us/newsroom" },
      { label: "Media Center", href: "/en-us/newsroom/media-center" },
    ],
  },
  {
    label: "Careers",
    children: [
      { label: "Why BIOTRONIK", href: "/en-us/careers/why-biotronik" },
      { label: "Job Openings", href: "/en-us/careers/jobs" },
      { label: "Students & Graduates", href: "/en-us/careers/students-graduates" },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header ref={headerRef} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "#fff", borderBottom: "1px solid #e0e6ed",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 40px",
        display: "flex", alignItems: "center", height: "72px", gap: "40px"
      }}>
        {/* Logo */}
        <Link href="/en-us" style={{ flexShrink: 0 }}>
          <img src={`${BASE}logo.svg`} alt="BIOTRONIK - Excellence for Life" style={{ height: "42px", width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0", flexGrow: 1 }} className="desktop-nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button style={{
                padding: "0 18px", height: "72px", fontSize: "14px", fontWeight: "500",
                color: openMenu === item.label ? "#d73604" : "#00234c",
                letterSpacing: "0.3px", background: "none", border: "none",
                cursor: "pointer", display: "flex", alignItems: "center", gap: "4px",
                borderBottom: openMenu === item.label ? "3px solid #d73604" : "3px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
                textTransform: "uppercase"
              }}>
                {item.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: "2px" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {openMenu === item.label && (
                <div style={{
                  position: "absolute", top: "72px", left: 0, minWidth: "240px",
                  background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  borderTop: "3px solid #d73604", zIndex: 200
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block", padding: "12px 20px",
                        fontSize: "14px", color: "#00234c",
                        borderBottom: "1px solid #f0f4f8",
                        transition: "background 0.15s, color 0.15s"
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.background = "#eaf0f6";
                        (e.target as HTMLElement).style.color = "#d73604";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.background = "";
                        (e.target as HTMLElement).style.color = "#00234c";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search + Region */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "auto" }}>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#00234c" }}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          <div style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "13px", color: "#00234c", fontWeight: "500"
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            US
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#00234c" }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M18 6 6 18M6 6l12 12"/>
                : <path d="M3 12h18M3 6h18M3 18h18"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div style={{ background: "#00234c", padding: "16px 40px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", gap: "12px" }}>
            <input
              autoFocus
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              style={{
                flex: 1, padding: "12px 16px", fontSize: "15px",
                border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)",
                color: "#fff", outline: "none"
              }}
            />
            <button style={{
              background: "#d73604", color: "#fff", padding: "12px 24px",
              border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500"
            }}>Search</button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid #e0e6ed",
          maxHeight: "80vh", overflowY: "auto"
        }}>
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                style={{
                  width: "100%", padding: "14px 20px", textAlign: "left",
                  fontSize: "14px", fontWeight: "600", color: "#00234c",
                  background: "none", border: "none", cursor: "pointer",
                  borderBottom: "1px solid #f0f4f8", textTransform: "uppercase",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
              >
                {item.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d={openMenu === item.label ? "M9 5L5 1 1 5" : "M1 1l4 4 4-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openMenu === item.label && (
                <div style={{ background: "#f8fafc" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block", padding: "11px 32px",
                        fontSize: "14px", color: "#415d72",
                        borderBottom: "1px solid #edf2f7"
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1025px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 1024px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
