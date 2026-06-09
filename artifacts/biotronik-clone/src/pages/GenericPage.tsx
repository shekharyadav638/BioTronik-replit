import { Link, useLocation } from "wouter";
import { lookupPage, getDistributorContent, type PageContent } from "../data/pageContentDB";

const CDN = "https://www.biotronik.com";

function titleFromSlug(slug: string): string {
  return slug.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function breadcrumbsFromPath(path: string): { label: string; href: string }[] {
  const parts = path.split("/").filter(Boolean);
  const crumbs: { label: string; href: string }[] = [];
  let current = "";
  for (const part of parts) {
    current += "/" + part;
    const label = titleFromSlug(part);
    crumbs.push({ label, href: current });
  }
  return crumbs;
}

function getFallbackContent(path: string): PageContent {
  const slug = path.split("/").filter(Boolean).pop() || "";
  const title = titleFromSlug(slug);
  const lower = path.toLowerCase();

  // Article / press release pages
  const articleSlugs: Record<string, { title: string; date: string; body: string[] }> = {
    "biotronik-achieves-first-human-implantations-liviq-leadless-pacemaker": {
      title: "BIOTRONIK Achieves First Human Implantations of LivIQ Leadless Pacemaker",
      date: "May 2026",
      body: [
        "BIOTRONIK has achieved first human implantations of its investigational LivIQ leadless pacemaker as part of the LEADLESS IV clinical study. This milestone marks a significant step forward in the development of next-generation leadless pacing technology.",
        "The LivIQ is designed to provide safe, effective single-chamber pacing without the need for transvenous leads or a subcutaneous device pocket — reducing procedural complexity and potential complication risks associated with traditional pacing systems.",
        "\"This represents a major milestone for our company and for patients who may benefit from leadless pacing in the future,\" said a BIOTRONIK spokesperson. \"The LivIQ builds on our decades of pacing expertise and our commitment to continuous innovation.\"",
        "The LEADLESS IV study is evaluating the safety and performance of the LivIQ system in a carefully selected patient population. BIOTRONIK will continue to enroll patients across multiple sites as the study progresses.",
      ],
    },
    "biotronik-announces-fda-approval-acticor-sky-and-rivacor-sky-icd-and-crt-d-systems": {
      title: "BIOTRONIK Announces FDA Approval of Acticor Sky and Rivacor Sky ICD and CRT-D Systems",
      date: "2026",
      body: [
        "BIOTRONIK has received FDA approval for its Acticor Sky and Rivacor Sky implantable cardioverter-defibrillator (ICD) and cardiac resynchronization therapy defibrillator (CRT-D) systems.",
        "The Acticor Sky and Rivacor Sky systems feature BIOTRONIK's DX technology for comprehensive atrial diagnostics, advanced arrhythmia detection algorithms, and seamless connectivity with BIOTRONIK Home Monitoring® for remote patient management.",
        "The approval follows a robust clinical development program demonstrating the safety and effectiveness of these next-generation systems. Both devices are now commercially available in the United States.",
        "The Acticor Sky is a single-chamber ICD and the Rivacor Sky is a CRT-D, both offering enhanced therapy delivery with the unique DX single-lead atrial sensing capability.",
      ],
    },
    "biotronik-announces-first-us-commercial-implant-solia-csp-s-worlds-first-pacing-lead-specifically": {
      title: "BIOTRONIK Announces First US Commercial Implant of Solia CSP-S: World's First Pacing Lead Specifically Designed for Conduction System Pacing",
      date: "2026",
      body: [
        "BIOTRONIK has announced the first US commercial implant of the Solia CSP-S, the world's first pacing lead specifically designed for conduction system pacing (CSP). This milestone represents a significant advance in the evolving field of physiologic cardiac pacing.",
        "Conduction system pacing — including His bundle pacing and left bundle branch area pacing — has emerged as a more physiologic alternative to traditional right ventricular pacing. The Solia CSP-S was designed from the ground up to facilitate consistent, reproducible conduction system capture.",
        "The Solia CSP-S features a unique coil design and specialized fixation mechanism optimized for the specific requirements of conduction system pacing. It is compatible with BIOTRONIK's full portfolio of pacemakers and CRT systems.",
      ],
    },
    "biotronik-announces-first-us-implant-investigational-next-generation-leadless-pacemaker": {
      title: "BIOTRONIK Announces First US Implant of Investigational Next-Generation Leadless Pacemaker",
      date: "2026",
      body: [
        "BIOTRONIK has announced the first US implant of its investigational next-generation leadless pacemaker as part of the LEADLESS IV first-in-human clinical study.",
        "The procedure was performed at a leading US cardiac center by an experienced electrophysiology team. The patient is reported to be recovering well.",
        "BIOTRONIK's leadless pacemaker program represents several years of intensive engineering and preclinical development. The investigational device is designed to address the known limitations of existing leadless pacemakers while delivering reliable, long-term pacing therapy.",
        "The LEADLESS IV study will enroll patients at multiple sites in the US and internationally. BIOTRONIK expects to build on these initial results as the study progresses toward a potential pivotal trial.",
      ],
    },
    "biotronik-and-micare-path-announce-first-its-kind-partnership": {
      title: "BIOTRONIK and MiCare Path Announce First-of-Its-Kind Partnership",
      date: "2025",
      body: [
        "BIOTRONIK and MiCare Path have announced a first-of-its-kind partnership to integrate BIOTRONIK's Home Monitoring® remote cardiac monitoring platform with MiCare Path's digital care coordination platform.",
        "The partnership combines BIOTRONIK's industry-leading remote monitoring data with MiCare Path's AI-powered care pathway management, enabling proactive, personalized follow-up for patients with implanted cardiac devices.",
        "\"This partnership represents a new model for connected cardiac care,\" said a BIOTRONIK executive. \"By combining our monitoring data with MiCare Path's care coordination capabilities, we can help clinicians act on device alerts more quickly and efficiently.\"",
        "The integrated solution is designed to reduce alert fatigue, streamline clinical workflows, and improve patient outcomes through more timely and targeted interventions.",
      ],
    },
    "biotronik-and-university-sydney-partner-transform-cardiac-care-through-digital-innovation": {
      title: "BIOTRONIK and University of Sydney Partner to Transform Cardiac Care Through Digital Innovation",
      date: "2025",
      body: [
        "BIOTRONIK and the University of Sydney have announced a research partnership focused on using digital health and artificial intelligence to transform cardiac care.",
        "The collaboration will leverage BIOTRONIK's unique Home Monitoring® dataset — the world's largest longitudinal remote cardiac monitoring dataset — together with the University of Sydney's expertise in machine learning and clinical research.",
        "Research areas include predictive models for heart failure decompensation, early detection of atrial fibrillation, and optimization of device therapy delivery. The partnership aims to generate new clinical insights that can improve patient outcomes.",
        "\"We are excited to work with the University of Sydney on this ground-breaking research,\" said a BIOTRONIK spokesperson. \"The combination of our real-world data and their analytical capabilities creates a powerful foundation for innovation.\"",
      ],
    },
  };

  for (const [key, data] of Object.entries(articleSlugs)) {
    if (lower.includes(key)) {
      return {
        title: data.title,
        heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
        heroImageAlt: data.title,
        sections: [
          { body: [`Published: ${data.date}`] },
          { body: data.body },
        ],
        relatedLinks: [
          { label: "Back to Newsroom", href: "/en-us/newsroom" },
          { label: "Products", href: "/en-us/products/cardiac-rhythm-management" },
          { label: "Clinical Studies", href: "/en-us/professionals/clinical-studies" },
        ],
      };
    }
  }

  // Distributor / subsidiary pages
  if (lower.match(/\/biotronik-[a-z]/)) {
    const dist = getDistributorContent(path);
    if (dist) return dist;
  }

  // Other generic pages by section
  if (lower.includes("/patients/")) {
    return {
      title,
      heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-11/BIO38762_Patienten.jpg.webp`,
      heroImageAlt: title,
      sections: [
        { body: [`Information for patients and caregivers about ${title.toLowerCase()} from BIOTRONIK.`] },
        {
          heading: "About This Topic",
          body: [
            "BIOTRONIK's patient information hub provides clear, accessible information on cardiac conditions, therapies, and device management. Our goal is to empower patients and their families with the knowledge they need to participate in their own care.",
            "If you have specific questions about your BIOTRONIK device or therapy, please speak with your physician or contact your local BIOTRONIK representative.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Patient FAQ", href: "/en-us/patients/faq" },
        { label: "Heart Monitoring", href: "/en-us/patients/patients-and-caregivers/heart-monitoring" },
        { label: "Contact Us", href: "/en-us/company/locations" },
      ],
    };
  }

  if (lower.includes("/products/")) {
    return {
      title,
      heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
      heroImageAlt: title,
      sections: [
        { body: [`Product information for ${title} from BIOTRONIK.`] },
        {
          heading: "Product Overview",
          body: [
            "BIOTRONIK designs and manufactures medical devices that meet the most stringent quality and performance standards. All products are developed with the patient's safety and quality of life as the primary consideration.",
            "For detailed technical specifications, instructions for use, or to request product information, please contact your local BIOTRONIK representative.",
          ],
        },
        {
          heading: "Clinical Support",
          body: [
            "BIOTRONIK provides comprehensive clinical support and training for all its products. Our clinical team works alongside physicians to ensure optimal device selection, implantation, and follow-up for each patient.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Cardiac Rhythm Management", href: "/en-us/products/cardiac-rhythm-management" },
        { label: "Clinical Studies", href: "/en-us/professionals/clinical-studies" },
        { label: "Professionals", href: "/en-us/professionals" },
      ],
    };
  }

  if (lower.includes("/professionals/")) {
    return {
      title,
      heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
      heroImageAlt: title,
      sections: [
        { body: [`Resources and information for healthcare professionals from BIOTRONIK.`] },
        {
          heading: "Clinical Resources",
          body: [
            "BIOTRONIK provides a comprehensive range of clinical resources for healthcare professionals working with our cardiac rhythm management, electrophysiology, and neuromodulation products.",
            "Access clinical studies, product training materials, and technical documentation through our professional portal. Our clinical support team is available to assist with implantation support, device programming, and troubleshooting.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Clinical Studies", href: "/en-us/professionals/clinical-studies" },
        { label: "DX Technology", href: "/en-us/professionals/featured-technologies/dx-technology" },
        { label: "Remote Monitoring", href: "/en-us/professionals/remote-patient-monitoring" },
      ],
    };
  }

  if (lower.includes("/careers/")) {
    return {
      title,
      heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
      heroImageAlt: title,
      sections: [
        { body: ["Join BIOTRONIK — a global medical device leader with a mission that matters."] },
        {
          heading: "About Our Culture",
          body: [
            "At BIOTRONIK, we are united by our mission: to save and improve lives through pioneering innovation. Our 6,000+ employees in more than 100 countries share this purpose every day.",
            "We value diversity, collaboration, and continuous learning. Whether you are early in your career or an experienced professional, BIOTRONIK offers an environment where you can grow and make a real difference.",
          ],
        },
      ],
      relatedLinks: [
        { label: "Open Positions", href: "/en-us/careers/jobs" },
        { label: "Why BIOTRONIK", href: "/en-us/careers/why-biotronik" },
        { label: "Working With Us", href: "/en-us/careers/working-with-us" },
      ],
    };
  }

  if (lower.includes("/company/")) {
    return {
      title,
      heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
      heroImageAlt: title,
      sections: [
        { body: ["BIOTRONIK — Excellence for Life. For over 60 years, dedicated to improving the lives of people with heart diseases and chronic pain."] },
        {
          heading: "About BIOTRONIK",
          body: [
            "BIOTRONIK was founded in 1963 by Professor Max Schaldach in Berlin, Germany. Since then, we have grown into a global leader in cardiac rhythm management, electrophysiology, neuromodulation, and digital health.",
            "Today, BIOTRONIK products are used in more than 100 countries worldwide. Our team of over 6,000 employees is dedicated to developing innovative medical devices that save and improve lives every day.",
          ],
        },
      ],
      relatedLinks: [
        { label: "About Us", href: "/en-us/company/about-us" },
        { label: "Our History", href: "/en-us/company/about-us/our-history" },
        { label: "Mission, Vision, Values", href: "/en-us/company/about-us/mission-vision-values" },
      ],
    };
  }

  // Default
  return {
    title,
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: title,
    sections: [
      {
        body: [
          "BIOTRONIK — Excellence for Life. For over 60 years, we have been dedicated to improving the lives of people with heart diseases and chronic pain.",
          "BIOTRONIK is a global leader in cardiac rhythm management, electrophysiology, neuromodulation, and digital health. Our products are used in more than 100 countries worldwide.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Products", href: "/en-us/products/cardiac-rhythm-management" },
      { label: "Patients", href: "/en-us/patients" },
      { label: "Professionals", href: "/en-us/professionals" },
    ],
  };
}

export default function GenericPage() {
  const [location] = useLocation();
  const crumbs = breadcrumbsFromPath(location);

  // Look up in database, fall back to generated content
  const content: PageContent = lookupPage(location) || getFallbackContent(location);

  const defaultSidebarLinks = content.sidebarLinks || [
    { label: "Products", href: "/en-us/products/cardiac-rhythm-management" },
    { label: "Patients", href: "/en-us/patients" },
    { label: "Professionals", href: "/en-us/professionals" },
    { label: "Newsroom", href: "/en-us/newsroom" },
    { label: "Company", href: "/en-us/company" },
  ];

  return (
    <main style={{ paddingTop: "72px" }}>
      {/* ── Split Hero matching real BIOTRONIK layout ── */}
      <section style={{ background: "#00234c", minHeight: "340px", display: "flex", alignItems: "stretch", overflow: "hidden" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: content.heroImage ? "1fr 1fr" : "1fr", padding: "0 40px" }}>
          {/* Left: text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 0 64px" }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              {crumbs.map((crumb, i) => (
                <span key={crumb.href} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {i > 0 && <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>›</span>}
                  {i === crumbs.length - 1
                    ? <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{crumb.label}</span>
                    : <Link href={crumb.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                      >{crumb.label}</Link>
                  }
                </span>
              ))}
            </nav>

            {/* Title */}
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700", color: "#fff", lineHeight: "1.1", marginBottom: "0", maxWidth: "560px" }}>
              {content.title}
            </h1>
            {content.subtitle && (
              <p style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "300", color: "rgba(255,255,255,0.85)", marginTop: "8px", maxWidth: "520px" }}>
                {content.subtitle}
              </p>
            )}
            <div style={{ width: "48px", height: "3px", background: "#d73604", marginTop: "20px" }} />

            {/* Lead paragraph from first section */}
            {content.sections[0]?.body[0] && (
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.8", marginTop: "20px", maxWidth: "500px" }}>
                {content.sections[0].body[0]}
              </p>
            )}
          </div>

          {/* Right: hero image */}
          {content.heroImage && (
            <div style={{ overflow: "hidden", margin: "0 -40px 0 40px", minHeight: "340px" }}>
              <img
                src={content.heroImage}
                alt={content.heroImageAlt || content.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Body content + sidebar ── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "56px", alignItems: "start" }}>

          {/* Main content */}
          <div>
            {content.sections.map((section, si) => {
              // Skip first section — already shown in hero
              if (si === 0 && !section.heading) return null;

              const hasImage = !!section.image;
              const imageRight = section.imagePosition !== "left";

              return (
                <div key={si} style={{ marginBottom: "48px" }}>
                  {section.heading && (
                    <>
                      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#00234c", marginBottom: "8px" }}>{section.heading}</h2>
                      <div style={{ width: "32px", height: "2px", background: "#d73604", marginBottom: "20px" }} />
                    </>
                  )}

                  {hasImage ? (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
                      {!imageRight && (
                        <img src={section.image} alt={section.imageAlt || ""} style={{ width: "100%", maxHeight: "280px", objectFit: "cover" }}
                          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                      <div>
                        {section.body.map((para, pi) => (
                          <p key={pi} style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
                            {para}
                          </p>
                        ))}
                      </div>
                      {imageRight && (
                        <img src={section.image} alt={section.imageAlt || ""} style={{ width: "100%", maxHeight: "280px", objectFit: "cover" }}
                          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                    </div>
                  ) : (
                    section.body.map((para, pi) => (
                      <p key={pi} style={{ fontSize: "15px", color: "#596a76", lineHeight: "1.9", marginBottom: "16px" }}>
                        {para}
                      </p>
                    ))
                  )}
                </div>
              );
            })}

            {/* Related links at bottom */}
            {content.relatedLinks && content.relatedLinks.length > 0 && (
              <div style={{ borderTop: "1px solid #d0dce8", paddingTop: "32px", marginTop: "16px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#00234c", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>Related</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {content.relatedLinks.map(link => (
                    <Link key={link.href} href={link.href} style={{
                      display: "inline-block", border: "1px solid #d73604", color: "#d73604",
                      padding: "8px 16px", fontSize: "13px", fontWeight: "500", transition: "all 0.15s"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#d73604"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#d73604"; }}
                    >{link.label} →</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "88px" }}>
            <div style={{ background: "#eaf0f6", padding: "24px", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "12px", fontWeight: "700", color: "#00234c", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                Quick Links
              </h3>
              {defaultSidebarLinks.map(link => (
                <Link key={link.href} href={link.href} style={{
                  display: "block", padding: "10px 0", fontSize: "14px",
                  color: "#415d72", borderBottom: "1px solid #d0dce8",
                  transition: "color 0.15s"
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#d73604")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#415d72")}
                >{link.label} →</Link>
              ))}
            </div>

            <div style={{ background: "#00234c", padding: "24px" }}>
              <h3 style={{ fontSize: "12px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                Contact Us
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "16px" }}>
                Have questions? Our team is here to help.
              </p>
              <Link href="/en-us/company/locations" style={{
                display: "inline-block", background: "#d73604", color: "#fff",
                padding: "10px 20px", fontSize: "12px", fontWeight: "600", textTransform: "uppercase"
              }}>Find Location</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
