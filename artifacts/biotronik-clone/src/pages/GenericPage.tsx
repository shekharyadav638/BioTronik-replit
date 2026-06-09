import { Link, useLocation } from "wouter";

function titleFromPath(path: string): string {
  const slug = path.split("/").filter(Boolean).pop() || "";
  return slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function breadcrumbsFromPath(path: string): { label: string; href: string }[] {
  const parts = path.split("/").filter(Boolean);
  const crumbs: { label: string; href: string }[] = [];
  let current = "";
  for (const part of parts) {
    current += "/" + part;
    const label = part.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    crumbs.push({ label, href: current });
  }
  return crumbs;
}

function getPageContent(path: string) {
  const lower = path.toLowerCase();
  if (lower.includes("privacy")) return {
    title: "Privacy Statement",
    intro: "BIOTRONIK is committed to protecting your privacy. This Privacy Statement explains how we collect, use, and protect your personal information.",
    body: [
      "BIOTRONIK SE & Co. KG and its affiliates ('BIOTRONIK', 'we', 'our', or 'us') are committed to protecting your privacy and handling your data in an open and transparent manner.",
      "The personal data that we collect and process will depend on your relationship with us and how you interact with our website. We collect data that you provide to us directly, data we collect automatically when you use our website, and data from third-party sources.",
      "We use your personal data to provide and improve our services, communicate with you, comply with legal obligations, and for other legitimate business purposes. We will not sell your personal data to third parties.",
      "You have the right to access, correct, or delete your personal data. You also have the right to object to or restrict certain types of processing. To exercise your rights, please contact our Data Protection Officer.",
    ]
  };
  if (lower.includes("general-terms")) return {
    title: "General Terms and Conditions",
    intro: "These General Terms and Conditions govern the use of BIOTRONIK's website and services.",
    body: [
      "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
      "BIOTRONIK reserves the right to modify these Terms at any time. We will notify you of significant changes by posting the new terms on our website. Your continued use of the website after such changes constitutes your acceptance of the new terms.",
      "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of BIOTRONIK and is protected by applicable intellectual property laws.",
      "This website is provided 'as is' without any warranties, expressed or implied. BIOTRONIK does not warrant that the website will be error-free or uninterrupted.",
    ]
  };
  if (lower.includes("our-history") || lower.includes("history")) return {
    title: "Our History",
    intro: "BIOTRONIK has been pioneering life-saving innovations for over 60 years, since its founding in Berlin in 1963.",
    body: [
      "In 1963, Professor Max Schaldach founded BIOTRONIK in Berlin, Germany, with a bold vision: to develop electronic medical devices that could help people with serious heart conditions live longer and better lives.",
      "In 1967, BIOTRONIK developed its first pacemaker — a breakthrough that established the company as a pioneer in cardiac rhythm management. Over the following decades, we continued to push the boundaries of what was medically possible.",
      "By the 1980s, BIOTRONIK had expanded internationally and was developing implantable cardioverter-defibrillators (ICDs) and other advanced cardiac devices. Our commitment to innovation led to numerous firsts in the field.",
      "Today, BIOTRONIK employs over 6,000 people worldwide and serves patients in more than 100 countries. We remain a family-owned company, and our founding values — a passion for innovation and a commitment to patient outcomes — continue to guide everything we do.",
    ]
  };
  if (lower.includes("faq")) return {
    title: "Frequently Asked Questions",
    intro: "Find answers to the most common questions about BIOTRONIK devices, therapies, and remote monitoring.",
    body: [
      "Q: What is a pacemaker?\nA: A pacemaker is a small device implanted in the chest that sends electrical signals to the heart to regulate its rhythm. BIOTRONIK pacemakers feature advanced diagnostics and remote monitoring capabilities.",
      "Q: How does BIOTRONIK's Home Monitoring work?\nA: Home Monitoring® automatically transmits data from your implanted device to a secure server daily, allowing your physician to monitor your heart without you needing to visit the clinic.",
      "Q: Can I travel with my device?\nA: Yes, most patients with BIOTRONIK cardiac devices can travel normally. Inform airport security staff about your device, and always carry your device identification card.",
      "Q: What activities can I do with a pacemaker or ICD?\nA: Most everyday activities are safe. Your physician will advise you on any specific restrictions based on your condition and the type of device you have.",
    ]
  };

  // Distributor / contact page
  if (lower.includes("biotronik-") && (lower.includes("-ltd") || lower.includes("-inc") || lower.includes("-srl") || lower.includes("-gmbh") || lower.includes("-sas") || lower.includes("-spa") || lower.includes("-aps") || lower.includes("-kft") || lower.includes("-sia"))) {
    const country = titleFromPath(path).replace("Biotronik ", "");
    return {
      title: `BIOTRONIK — ${country}`,
      intro: `Contact information and details for BIOTRONIK ${country}.`,
      body: [
        "BIOTRONIK is represented in over 100 countries worldwide through a network of subsidiaries, affiliated companies, and distribution partners.",
        "For product inquiries, technical support, and clinical assistance, please contact your local BIOTRONIK representative.",
        "All BIOTRONIK products are designed and manufactured to the highest quality standards, in compliance with international medical device regulations.",
      ]
    };
  }

  return {
    title: titleFromPath(path),
    intro: `This page provides information about ${titleFromPath(path).toLowerCase()} from BIOTRONIK.`,
    body: [
      "BIOTRONIK is a global leader in cardiac rhythm management, electrophysiology, endovascular therapy, and neuromodulation. Our products are designed to improve the lives of patients worldwide.",
      "For more than 60 years, we have been committed to developing innovative medical devices that address the most challenging cardiac and neurological conditions.",
      "Our research-driven approach, combined with our close collaboration with clinicians and patients, ensures that our solutions meet the highest standards of clinical performance and patient safety.",
    ]
  };
}

export default function GenericPage() {
  const [location] = useLocation();
  const content = getPageContent(location);
  const crumbs = breadcrumbsFromPath(location);

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section style={{ background: "#00234c", padding: "48px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            {crumbs.map((crumb, i) => (
              <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>›</span>}
                {i === crumbs.length - 1
                  ? <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{crumb.label}</span>
                  : <Link href={crumb.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>{crumb.label}</Link>
                }
              </span>
            ))}
          </nav>
          <h1 style={{ fontSize: "36px", fontWeight: "600", color: "#fff", marginBottom: "8px", lineHeight: "1.2" }}>{content.title}</h1>
          <div style={{ width: "40px", height: "3px", background: "#d73604" }} />
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "60px" }}>
          <div>
            <p style={{ fontSize: "17px", color: "#415d72", lineHeight: "1.9", marginBottom: "32px", fontWeight: "400" }}>
              {content.intro}
            </p>
            {content.body.map((para, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "20px", whiteSpace: "pre-line" }}>
                {para}
              </p>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div style={{ background: "#eaf0f6", padding: "28px", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#00234c", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Quick Links
              </h3>
              {[
                { label: "Products", href: "/en-us/products/cardiac-rhythm-management" },
                { label: "Patients", href: "/en-us/patients" },
                { label: "Professionals", href: "/en-us/professionals" },
                { label: "Newsroom", href: "/en-us/newsroom" },
                { label: "Company", href: "/en-us/company" },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  display: "block", padding: "10px 0", fontSize: "14px",
                  color: "#415d72", borderBottom: "1px solid #d0dce8",
                  transition: "color 0.15s"
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#d73604")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#415d72")}
                >
                  {link.label} →
                </Link>
              ))}
            </div>

            <div style={{ background: "#00234c", padding: "28px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#fff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Contact Us
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "16px" }}>
                Have questions? Our team is here to help.
              </p>
              <Link href="/en-us/company/locations" style={{
                display: "inline-block", background: "#d73604", color: "#fff",
                padding: "10px 20px", fontSize: "13px", fontWeight: "600", textTransform: "uppercase"
              }}>Find Location</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
