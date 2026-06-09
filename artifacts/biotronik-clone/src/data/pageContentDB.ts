// Comprehensive content database for all BIOTRONIK pages
// Images from the BIOTRONIK CDN: https://www.biotronik.com + path

const CDN = "https://www.biotronik.com";

export interface PageContent {
  title: string;
  subtitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  sections: PageSection[];
  relatedLinks?: { label: string; href: string }[];
  sidebarLinks?: { label: string; href: string }[];
}

export interface PageSection {
  heading?: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  isList?: boolean;
}

const db: Record<string, PageContent> = {

  // ──────────────── PATIENTS ────────────────

  "patients/patients-and-caregivers": {
    title: "Patients and Caregivers",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-11/BIO38762_Patienten.jpg.webp`,
    heroImageAlt: "Patients and Caregivers",
    sections: [
      {
        body: [
          "Welcome to the BIOTRONIK information hub for patients, their families, friends and caregivers. You will find information on health conditions, therapy options and useful tips for your everyday life with a BIOTRONIK device. You can either browse our suggestions, find your way via the navigation or jump straight into the search bar if you are looking for something specific.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Heart Monitoring", href: "/en-us/patients/patients-and-caregivers/heart-monitoring" },
      { label: "Pacemaker Therapy", href: "/en-us/patients/patients-and-caregivers/pacemaker" },
      { label: "ICD Therapy", href: "/en-us/patients/patients-and-caregivers/icd-therapy" },
      { label: "CRT Therapy", href: "/en-us/patients/patients-and-caregivers/crt-therapy" },
      { label: "Neuromodulation", href: "/en-us/patients/patients-and-caregivers/neuromodulation" },
      { label: "FAQ", href: "/en-us/patients/faq" },
    ],
  },

  "patients/patients-and-caregivers/heart-monitoring": {
    title: "Heart Monitoring",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-11/BIO15764_Arzt_und_Patient.jpg.webp`,
    heroImageAlt: "Heart Monitoring",
    sections: [
      {
        body: [
          "BIOTRONIK's cardiac devices aim to keep your heart beating at the right frequency and rhythm. On top of that, our heart monitoring products and services aim to provide you and your physician with a constant data flow, easier communication and the chance to adapt therapy early on.",
        ],
      },
      {
        heading: "Implantable Heart Monitor",
        body: [
          "Sometimes, your heart's activity needs to be monitored over a longer period. Find out more about why this may be necessary, how insertable cardiac monitors are implanted and how they transmit data to your physician.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-12/BIO39006_Patienten.jpg.webp`,
        imageAlt: "Implantable Heart Monitor",
      },
      {
        heading: "Home Monitoring",
        body: [
          "BIOTRONIK Home Monitoring® automatically transmits data from your implanted device to a secure server daily. Your physician can then review this information without you needing to attend a clinic visit.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-05/BIO35039_Patient.jpg.webp`,
        imageAlt: "Home Monitoring",
      },
      {
        heading: "Patient App",
        body: [
          "The BIOTRONIK Patient App allows you to view your own device and monitoring data, giving you greater insight and involvement in your own cardiac care.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-06/BIO37085_Patientin_nutzt_die_Patient_App_1.jpg.webp`,
        imageAlt: "Patient App",
      },
    ],
  },

  "patients/patients-and-caregivers/heart-monitoring/implantable-heart-monitor": {
    title: "Implantable Heart Monitor:",
    subtitle: "Basic Knowledge",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-12/BIO39006_Patienten.jpg.webp`,
    heroImageAlt: "Implantable Heart Monitor patient consultation",
    sections: [
      {
        body: [
          "Sometimes, your heart's activity needs to be monitored over a longer period. Find out more about why this may be necessary, how insertable cardiac monitors are implanted and how they transmit data to your physician.",
        ],
      },
      {
        heading: "Why Do I Need A Heart Monitor?",
        body: [
          "Insertable cardiac monitors (ICM), sometimes also referred to as insertable loop recorders, help your physician to monitor your heart rhythm over months or years. They provide the time needed to diagnose the most difficult-to-detect heart conditions behind, for instance, recurrent and unexplained fainting, heart palpitations, unexplained stroke or atrial fibrillation.",
          "Since irregular heartbeats may occur infrequently, they would otherwise go undetected by a normal ECG. Sometimes, an ICM is also used to make sure that your prescribed heart treatment is doing what it is supposed to do.",
        ],
      },
      {
        heading: "What Is An Implantable Cardiac Monitor (ICM)?",
        body: [
          "Implantable cardiac monitors, like the BIOMONITOR, are mini-electrocardiogram (ECG) devices which are implanted just under the skin in the left chest area. They continuously record the heart's rhythm and automatically detect any irregularities.",
          "All clinically relevant data is stored on the device and transmitted daily via the BIOTRONIK Home Monitoring® system. As a result, your physician will be able to see whether and what kind of irregular heartbeats occur. This information is crucial to identify the cause of the symptoms you experience and decide on the best course of treatment.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd_scale/public/2023-11/BIO32712_BIOMONITOR_IIIm.jpg.webp`,
        imageAlt: "BIOMONITOR device",
      },
      {
        heading: "Injection Procedure",
        body: [
          "The procedure to inject a BIOMONITOR is minimally invasive as it is inserted just beneath the skin of the chest. It is performed in a hospital or medical office under local anesthesia and only takes a few minutes. You are awake and will be able to communicate to the healthcare team performing the procedure.",
          "To inject the BIOMONITOR, a physician will make a very small cut in the upper chest. The physician will insert the heart monitor with a specially designed tool. After the cardiac monitor is placed successfully, the physician will remove the injection tool and will close the incision with medical tape or with a few stitches.",
        ],
      },
      {
        heading: "After the Implantation",
        body: [
          "Recovery from this procedure tends to be minimal. After the short and simple procedure, you may stay in the hospital overnight but usually leave the same day. Listen carefully to your physician and follow their instructions.",
          "At home, monitor how the incision is healing. Minor discomfort near the incision site is perfectly normal. BIOMONITOR is a tiny device with a flexible antenna that adapts to your body's natural shape. Most patients get used to it quickly and soon cease to notice it.",
          "Your physician may give you a 'Remote Assistant' that allows you to store an ECG whenever you experience symptoms. Place it over the implanted device, press the button, and BIOMONITOR will store the event. The BIOMONITOR will also recognize arrhythmias automatically and store their ECGs for evaluation.",
          "BIOMONITOR is protected against magnetic fields and electromagnetic radiation from other devices, so you may use usual household tools and devices without hesitation. BIOMONITOR includes ProMRI® technology, so you may undergo magnetic resonance imaging (MRI) scans. Nevertheless, and as with any medical examination, please inform medical staff that you have an insertable cardiac monitor.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd_scale/public/2023-11/BIO16862_Patienten.jpg.webp`,
        imageAlt: "Patient recovery",
      },
    ],
    relatedLinks: [
      { label: "Home Monitoring", href: "/en-us/patients/patients-and-caregivers/heart-monitoring" },
      { label: "Patient FAQ", href: "/en-us/patients/faq" },
      { label: "BIOMONITOR Product", href: "/en-us/products/cardiac-rhythm-management" },
    ],
  },

  "patients/patients-and-caregivers/pacemaker": {
    title: "Pacemaker",
    subtitle: "Therapy Information",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
    heroImageAlt: "Pacemaker system",
    sections: [
      {
        body: [
          "A pacemaker is a small device that is implanted in your chest to help control your heartbeat. It sends electrical pulses to your heart to keep it beating regularly and at an appropriate rate.",
        ],
      },
      {
        heading: "Pacemaker Therapy: Basic Knowledge",
        body: [
          "Your heart has its own natural pacemaker — the sinoatrial (SA) node — which generates electrical impulses that cause your heart muscle to contract. Sometimes, this natural pacemaker doesn't work correctly, or the electrical pathway is blocked, causing your heart to beat too slowly, too fast, or irregularly.",
          "An implanted pacemaker takes over or assists this natural function. The device continuously monitors your heart rate and, when needed, sends tiny electrical pulses to make your heart beat at the correct rate.",
          "BIOTRONIK pacemakers use advanced algorithms to provide therapy only when needed, preserving your heart's natural rhythm as much as possible. This 'rate-adaptive pacing' allows the device to adjust your heart rate based on your activity level.",
        ],
      },
      {
        heading: "The Pacemaker Implantation",
        body: [
          "Pacemaker implantation is a relatively simple surgical procedure usually performed under local anesthesia. The procedure typically takes one to two hours.",
          "The surgeon makes a small incision near your shoulder or chest and guides thin, flexible wires (leads) through a vein to your heart. The leads are attached to the heart muscle and the other end is connected to the pacemaker, which is placed in a small pocket created under the skin.",
          "Most patients go home the same day or after one night in hospital. Recovery is usually straightforward, and most people return to normal activities within a few weeks.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO34575_Selectra_3D.jpg.webp`,
        imageAlt: "Pacemaker lead system",
      },
      {
        heading: "Living With a Pacemaker",
        body: [
          "Most people with pacemakers can live normal, active lives. Your pacemaker is designed to last for many years. BIOTRONIK pacemakers include Home Monitoring® technology that automatically transmits device data to your physician daily.",
          "You will need regular check-ups to ensure your pacemaker is working properly. With BIOTRONIK Home Monitoring, many routine checks can be done remotely, reducing the number of clinic visits you need.",
        ],
      },
    ],
  },

  "patients/patients-and-caregivers/icd-therapy": {
    title: "ICD Therapy",
    subtitle: "Basic Knowledge",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "ICD therapy",
    sections: [
      {
        body: [
          "An implantable cardioverter-defibrillator (ICD) is a device that monitors your heart rhythm and delivers therapy if a dangerous arrhythmia is detected. It is designed to protect you from sudden cardiac death.",
        ],
      },
      {
        heading: "What Is An ICD?",
        body: [
          "An ICD is similar to a pacemaker but has the added capability of delivering a strong electrical shock (defibrillation) to restore a normal heart rhythm if your heart goes into ventricular fibrillation (VF) or ventricular tachycardia (VT). These are potentially life-threatening arrhythmias that can cause sudden cardiac arrest.",
          "The ICD continuously monitors your heart rhythm. If it detects a dangerous arrhythmia, it can deliver a series of therapeutic responses, from pacing pulses to a defibrillation shock, depending on the type and severity of the arrhythmia.",
        ],
      },
      {
        heading: "DX Technology",
        body: [
          "BIOTRONIK's DX technology provides your physician with comprehensive atrial diagnostics using just a single ICD lead. The DX lead features an additional sensing dipole that picks up atrial signals, allowing detection of atrial fibrillation (AF) without a second lead.",
          "More than 100,000 patients worldwide are living with a BIOTRONIK DX system, supported by over a decade of clinical evidence.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
        imageAlt: "BIOTRONIK ICD system",
      },
    ],
  },

  "patients/patients-and-caregivers/crt-therapy": {
    title: "CRT Therapy",
    subtitle: "Cardiac Resynchronization Therapy",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
    heroImageAlt: "CRT therapy",
    sections: [
      {
        body: [
          "Cardiac resynchronization therapy (CRT) is a treatment for heart failure. A CRT device coordinates the contractions of the heart's lower chambers, improving the heart's pumping efficiency.",
        ],
      },
      {
        heading: "What Is CRT?",
        body: [
          "In some people with heart failure, the two lower chambers of the heart (the ventricles) don't beat in sync. CRT uses a special pacemaker or ICD with three leads — one in the right atrium, one in the right ventricle, and one on the outside of the left ventricle — to resynchronize the heart's contractions.",
          "By making the heart beat more efficiently, CRT can improve your symptoms, increase your exercise capacity and quality of life, and in some cases even reverse the damage caused by heart failure.",
        ],
      },
      {
        heading: "BIOTRONIK CRT Systems",
        body: [
          "BIOTRONIK offers a range of CRT pacemakers (CRT-P) and CRT defibrillators (CRT-D). Our systems include advanced features such as AutoLeft for automatic left ventricular output management and SonR for hemodynamic optimization of AV and VV delays.",
          "BIOTRONIK CRT devices are compatible with our Home Monitoring® technology, allowing your physician to remotely review your device data and adjust therapy settings if needed.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
        imageAlt: "BIOTRONIK CRT system",
      },
    ],
  },

  "patients/patients-and-caregivers/neuromodulation": {
    title: "Neuromodulation",
    subtitle: "Pain Therapy",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Neuromodulation therapy",
    sections: [
      {
        body: [
          "Neuromodulation uses electrical stimulation to modify nerve activity and can provide effective pain relief for patients suffering from chronic conditions such as back and leg pain, complex regional pain syndrome, and other neuropathic pain.",
        ],
      },
      {
        heading: "Spinal Cord Stimulation",
        body: [
          "Spinal cord stimulation (SCS) is a type of neuromodulation therapy. A small device is implanted in your body that sends mild electrical pulses to the spinal cord, interfering with the pain signals traveling to your brain.",
          "BIOTRONIK spinal cord stimulation systems offer multiple stimulation waveforms that can be tailored to your individual pain pattern, including conventional stimulation, high-density stimulation, and burst stimulation.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
        imageAlt: "Spinal cord stimulation",
      },
    ],
  },

  "patients/living-with-device": {
    title: "Living With Your Device",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-11/BIO38762_Patienten.jpg.webp`,
    heroImageAlt: "Living with a BIOTRONIK device",
    sections: [
      {
        body: [
          "Living with a BIOTRONIK cardiac device means you have reliable protection and monitoring around the clock. Here you will find practical guidance for your everyday life with your device.",
        ],
      },
      {
        heading: "Everyday Activities",
        body: [
          "Most patients with BIOTRONIK devices can resume normal activities shortly after implantation. You can travel, exercise, work, and enjoy leisure activities as your physician advises.",
          "Avoid activities that involve strong magnetic or electromagnetic fields in close proximity to your device. When in doubt, consult your physician or contact BIOTRONIK's patient support.",
        ],
      },
      {
        heading: "Travelling",
        body: [
          "You can travel with your BIOTRONIK device. Always carry your device identification card and inform airport security and medical staff about your implant.",
          "Metal detectors and body scanners at airports are generally safe for BIOTRONIK device patients. If you are concerned, request a manual security check instead.",
        ],
      },
      {
        heading: "BIOTRONIK Home Monitoring",
        body: [
          "BIOTRONIK Home Monitoring® transmits data from your device automatically every day, allowing your physician to monitor your heart health without requiring frequent clinic visits.",
          "If your monitoring system detects anything that requires attention, your care team will be notified promptly.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-05/BIO35039_Patient.jpg.webp`,
        imageAlt: "Home Monitoring",
      },
    ],
  },

  // ──────────────── PRODUCTS ────────────────

  "products/cardiac-rhythm-management": {
    title: "Cardiac Rhythm Management (CRM)",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Cardiac Rhythm Management",
    sections: [
      {
        body: [
          "Innovative Technologies That Help the Human Heart Beat Optimally. Cardiac rhythm management focuses on innovative therapies and technologies that help the human heart beat optimally. Our products, services and solutions help physicians treat and manage arrhythmia-related diseases.",
        ],
      },
      {
        heading: "Pacing Systems",
        body: [
          "The aim of implanting a pacemaker system is to restore regular sinus rhythm and heart rate by using small electrical impulses. BIOTRONIK offers a comprehensive range of pacing systems including single-chamber, dual-chamber, and cardiac resynchronization therapy pacemakers.",
          "Our newest platforms — Amvia Sky and LivIQ — represent the next generation of pacing technology, offering advanced diagnostics, remote connectivity, and exceptional longevity.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
        imageAlt: "BIOTRONIK pacemaker system",
      },
      {
        heading: "Implantable Cardioverter Defibrillator Systems",
        body: [
          "Tachycardia is a very fast heart rate — sometimes so fast that the heart cannot pump blood effectively. The only effective way to stop ventricular fibrillation is through defibrillation. An implantable cardioverter-defibrillator (ICD) monitors the heart rhythm continuously and delivers therapy when needed.",
          "BIOTRONIK ICDs feature DX technology — the world's first single-chamber ICD with complete atrial diagnostics using a single-pass lead.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
        imageAlt: "BIOTRONIK ICD system",
      },
      {
        heading: "Remote Patient Management",
        body: [
          "BIOTRONIK Home Monitoring® is the world's most widely used remote cardiac monitoring platform, with data transmitted automatically every day. The system enables proactive patient management, early detection of clinical events, and reduced hospital visits.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2024-05/BIOMONITOR%20IV.jpg.webp`,
        imageAlt: "BIOMONITOR IV",
      },
    ],
  },

  "products/cardiac-rhythm-management/pacemakers": {
    title: "Pacemakers",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
    heroImageAlt: "BIOTRONIK pacemaker systems",
    sections: [
      {
        body: [
          "BIOTRONIK's pacemaker portfolio includes single-chamber, dual-chamber, and cardiac resynchronization therapy devices. All are designed for exceptional longevity, advanced diagnostics, and seamless connectivity through Home Monitoring®.",
        ],
      },
      {
        heading: "Amvia Sky",
        body: [
          "The Amvia Sky pacing system features the unique SonR sensor for hemodynamic optimization and advanced AutoLeft technology. Available in DR, SR, HF-T, QP, and DX configurations, Amvia Sky represents the pinnacle of BIOTRONIK's decades of pacing innovation.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
        imageAlt: "Amvia Sky pacemaker",
      },
      {
        heading: "LivIQ — Leadless Pacemaker",
        body: [
          "BIOTRONIK's LivIQ is a next-generation leadless pacemaker. First human implantations took place in 2026 as part of the LEADLESS IV clinical study. The LivIQ represents a new paradigm in pacing — no leads, no pocket, minimal invasion.",
        ],
      },
      {
        heading: "Solia Lead Family",
        body: [
          "The Solia lead family provides reliable, low-threshold pacing and sensing across a broad range of patient anatomies. Solia leads are compatible with all BIOTRONIK pacing systems and feature the unique Closed Loop Stimulation (CLS) technology.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO34575_Selectra_3D.jpg.webp`,
        imageAlt: "Solia lead",
      },
    ],
  },

  "products/cardiac-rhythm-management/pacemakers/liviq": {
    title: "LivIQ",
    subtitle: "Leadless Pacemaker",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
    heroImageAlt: "LivIQ leadless pacemaker",
    sections: [
      {
        body: [
          "The BIOTRONIK LivIQ is a next-generation leadless pacemaker system. It is designed to provide safe, effective single-chamber pacing without the need for transvenous leads or a device pocket.",
        ],
      },
      {
        heading: "First Human Implantations",
        body: [
          "BIOTRONIK achieved first human implantations of the LivIQ leadless pacemaker in 2026 as part of the LEADLESS IV clinical study. This milestone marks an important step in the development of leadless cardiac pacing.",
          "The LivIQ is the result of years of engineering and clinical research. It builds on BIOTRONIK's deep expertise in pacing technology and remote monitoring.",
        ],
      },
      {
        heading: "Technology",
        body: [
          "The LivIQ features BIOTRONIK's proprietary sensing and stimulation technology in a compact, self-contained capsule. It is designed for implantation via a minimally invasive transcatheter approach and is compatible with BIOTRONIK Home Monitoring® for remote follow-up.",
          "Longer battery life, improved sensing, and next-generation diagnostics distinguish the LivIQ from previous generations of leadless technology.",
        ],
      },
    ],
  },

  "products/cardiac-rhythm-management/implantable-cardioverter-defibrillator-systems": {
    title: "Implantable Cardioverter Defibrillator Systems",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
    heroImageAlt: "BIOTRONIK ICD system",
    sections: [
      {
        body: [
          "BIOTRONIK implantable cardioverter-defibrillators (ICDs) protect patients from life-threatening ventricular arrhythmias. Our ICD portfolio combines advanced arrhythmia detection algorithms with the unique DX technology for comprehensive atrial diagnostics.",
        ],
      },
      {
        heading: "Acticor Sky & Rivacor Sky",
        body: [
          "FDA approved in 2026, Acticor Sky and Rivacor Sky represent the latest generation of BIOTRONIK ICD and CRT-D systems. They feature DX technology, advanced AF diagnostics, and seamless Home Monitoring® connectivity.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
        imageAlt: "Acticor Sky ICD",
      },
      {
        heading: "DX Technology",
        body: [
          "BIOTRONIK's patented DX technology enables complete atrial diagnostics with a standard single-chamber ICD system. The DX lead features a specially designed sensing dipole that picks up atrial signals, providing your physician with detailed information about atrial fibrillation events without requiring a second lead.",
          "Over 100,000 patients worldwide have been implanted with DX-enabled devices, supported by more than a decade of rigorous clinical evidence.",
        ],
      },
    ],
  },

  "products/cardiac-rhythm-management/cardiac-resynchronization-therapy-systems": {
    title: "Cardiac Resynchronization Therapy Systems",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36802_Amvia_Sky_HF_T_QP__Solia_S__Sentus_OTW_QP_L_XX_49.jpg.webp`,
    heroImageAlt: "BIOTRONIK CRT system",
    sections: [
      {
        body: [
          "BIOTRONIK Cardiac Resynchronization Therapy (CRT) systems are designed to treat heart failure by resynchronizing the contractions of the heart's ventricles, improving cardiac output and patient quality of life.",
        ],
      },
      {
        heading: "CRT-P and CRT-D Systems",
        body: [
          "BIOTRONIK offers both CRT pacemakers (CRT-P) and CRT defibrillators (CRT-D). Our systems include advanced features such as SonR for hemodynamic optimization and AutoLeft for automatic left ventricular output management.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO36826_Amvia_Sky_DR_T__Solia_S.jpg.webp`,
        imageAlt: "CRT system",
      },
      {
        heading: "Left Ventricular Leads",
        body: [
          "Effective CRT therapy depends on reliable left ventricular (LV) lead placement. BIOTRONIK's Sentus family of coronary sinus leads provides stable, low-threshold LV pacing with a variety of shapes for different anatomies.",
        ],
      },
    ],
  },

  "products/cardiac-rhythm-management/remote-patient-management": {
    title: "Remote Patient Management",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-05/BIO35039_Patient.jpg.webp`,
    heroImageAlt: "Remote Patient Management",
    sections: [
      {
        body: [
          "BIOTRONIK Remote Patient Management allows physicians to monitor their patients' cardiac devices from anywhere in the world. At the heart of the system is BIOTRONIK Home Monitoring® — the world's most widely used remote cardiac monitoring platform.",
        ],
      },
      {
        heading: "Home Monitoring®",
        body: [
          "BIOTRONIK Home Monitoring® automatically transmits data from a patient's implanted device to a secure server every day. The transmission happens automatically during sleep and requires no action from the patient.",
          "Physicians access the data through a secure web portal, enabling proactive patient management, early detection of device or clinical events, and a reduction in unnecessary clinic visits.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2024-05/BIOMONITOR%20IV.jpg.webp`,
        imageAlt: "Home Monitoring system",
      },
      {
        heading: "Proven Clinical Benefits",
        body: [
          "Multiple large-scale clinical studies — including At-Home, RAPIDO, and TRUST — have demonstrated that BIOTRONIK Home Monitoring reduces hospitalizations, enables earlier detection of clinical events, and supports improved patient outcomes.",
        ],
      },
    ],
  },

  "products/neuromodulation": {
    title: "Neuromodulation",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Neuromodulation",
    sections: [
      {
        body: [
          "BIOTRONIK's neuromodulation portfolio is focused on spinal cord stimulation (SCS) for the treatment of chronic pain. Our systems offer multiple stimulation waveforms and remote monitoring capabilities.",
        ],
      },
      {
        heading: "Spinal Cord Stimulation",
        body: [
          "Spinal cord stimulation (SCS) is an evidence-based treatment for chronic neuropathic pain that has not responded to conservative therapies. BIOTRONIK SCS systems deliver precisely targeted electrical stimulation to the spinal cord, modulating pain signals before they reach the brain.",
          "Our Prosper and Hykon SCS systems feature multiple stimulation programs, rechargeable and non-rechargeable options, and MRI-conditional designs.",
        ],
      },
    ],
  },

  "products/electrophysiology": {
    title: "Electrophysiology",
    heroImage: `${CDN}/sites/default/bio_files/styles/one_third_large/public/2023-04/BIO38276_Bilder_HP_mockup.jpg.webp`,
    heroImageAlt: "Electrophysiology",
    sections: [
      {
        body: [
          "BIOTRONIK's electrophysiology portfolio supports the diagnosis and treatment of complex cardiac arrhythmias. Our catheters, mapping systems and accessories are designed for precision and reproducibility.",
        ],
      },
      {
        heading: "Ablation Catheters",
        body: [
          "BIOTRONIK ablation catheters deliver targeted radiofrequency energy to ablate the sources of cardiac arrhythmias. Our portfolio includes irrigated-tip and contact force-sensing catheters for pulmonary vein isolation and complex substrate ablation.",
        ],
      },
      {
        heading: "Diagnostic Catheters",
        body: [
          "BIOTRONIK diagnostic catheters are used for high-density mapping and electrogram recording during EP studies. Our multielectrode catheters allow comprehensive characterization of arrhythmia circuits.",
        ],
      },
    ],
  },

  "products/vascular-intervention": {
    title: "Vascular Intervention",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Vascular Intervention",
    sections: [
      {
        heading: "Change of Ownership",
        body: [
          "BIOTRONIK has divested its Vascular Intervention business. The vascular intervention portfolio — including coronary and peripheral stents, drug-eluting balloons, and related products — has been transferred to a new owner.",
          "For information about the transferred products and services, please contact the new owners directly. Existing BIOTRONIK vascular intervention customers will be contacted with full transition information.",
          "BIOTRONIK remains fully committed to its core cardiac rhythm management, electrophysiology, and neuromodulation businesses. This transaction allows us to focus our resources and expertise on these core areas.",
        ],
      },
    ],
  },

  // ──────────────── PROFESSIONALS ────────────────

  "professionals/featured-technologies": {
    title: "Unique Technologies",
    subtitle: "Featured Technologies",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Featured Technologies",
    sections: [
      {
        body: [
          "BIOTRONIK has pioneered several technologies that have become standard of care in cardiac rhythm management. From DX technology to Home Monitoring, our innovations are driven by a commitment to better outcomes for patients.",
        ],
      },
      {
        heading: "DX Technology",
        body: [
          "The BIOTRONIK DX system provides complete atrial diagnostics with a single-chamber ICD lead — no additional lead required. More than 100,000 patients have been implanted with DX devices worldwide.",
        ],
      },
      {
        heading: "Home Monitoring®",
        body: [
          "The world's most widely used remote cardiac monitoring platform. Home Monitoring® transmits device data automatically every night, enabling proactive patient management and earlier detection of clinical events.",
        ],
      },
      {
        heading: "Closed Loop Stimulation (CLS)",
        body: [
          "BIOTRONIK's Closed Loop Stimulation technology adapts pacing rate to the patient's actual physiological need — including emotional stress and mental activity — providing more natural, physiological heart rate responses than traditional activity sensors.",
        ],
      },
      {
        heading: "SonR",
        body: [
          "SonR is BIOTRONIK's unique intracardiac accelerometer sensor for hemodynamic optimization in CRT patients. It automatically optimizes AV and VV intervals based on continuous measurements of myocardial contractility.",
        ],
      },
    ],
  },

  "professionals/remote-patient-monitoring": {
    title: "Remote Patient Monitoring",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-05/BIO35039_Patient.jpg.webp`,
    heroImageAlt: "Remote Patient Monitoring",
    sections: [
      {
        body: [
          "BIOTRONIK Home Monitoring® is the world's leading remote cardiac monitoring platform. It enables physicians to proactively manage their patients and detect clinical events early — all without requiring additional patient effort.",
        ],
      },
      {
        heading: "How It Works",
        body: [
          "Patients with BIOTRONIK cardiac devices are provided with a small CardioMessenger unit that communicates wirelessly with the implanted device. Each night, the device transmits recorded data via the mobile network to BIOTRONIK's secure data center.",
          "Physicians access this data through the BIOTRONIK Home Monitoring portal. The system presents device status, therapy delivery events, arrhythmia episodes, and trend data in a clear, actionable format.",
        ],
        image: `${CDN}/sites/default/bio_files/styles/half_hd/public/2024-05/BIOMONITOR%20IV.jpg.webp`,
        imageAlt: "CardioMessenger",
      },
      {
        heading: "Clinical Evidence",
        body: [
          "Multiple randomized controlled trials including At-Home, IN-TIME, and TRUST have demonstrated significant benefits for Home Monitoring patients including reduced hospitalizations, earlier detection of AF, and improved survival.",
        ],
      },
    ],
  },

  "professionals/electrophysiology": {
    title: "Electrophysiology",
    subtitle: "For Healthcare Professionals",
    heroImage: `${CDN}/sites/default/bio_files/styles/one_third_large/public/2023-04/BIO38276_Bilder_HP_mockup.jpg.webp`,
    heroImageAlt: "Electrophysiology professionals",
    sections: [
      {
        body: [
          "BIOTRONIK provides electrophysiologists with a comprehensive portfolio of diagnostic and therapeutic catheters, mapping accessories, and support tools for the treatment of complex cardiac arrhythmias.",
        ],
      },
      {
        heading: "Ablation",
        body: [
          "Our ablation catheter portfolio includes standard and irrigated-tip catheters for pulmonary vein isolation (PVI), cavotricuspid isthmus ablation, and substrate-based VT ablation. The Qiona ablation system delivers consistent, predictable lesions.",
        ],
      },
      {
        heading: "Mapping & Diagnostics",
        body: [
          "High-density mapping catheters allow comprehensive characterization of arrhythmia substrate. BIOTRONIK's Orion and Constellation catheters support complex 3D electroanatomical mapping workflows.",
        ],
      },
    ],
  },

  // ──────────────── CAREERS ────────────────

  "careers/why-biotronik": {
    title: "Why BIOTRONIK",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK team",
    sections: [
      {
        body: [
          "At BIOTRONIK, we work for a purpose that truly matters: to save and improve lives through pioneering innovation in cardiac and pain care. Every day, our products protect and treat millions of patients around the world.",
        ],
      },
      {
        heading: "A Mission You Can Believe In",
        body: [
          "When you join BIOTRONIK, you become part of something bigger than yourself. Our founding mission — to harmonize technology with the human body — has driven every innovation since 1963. You'll work on products that directly save lives.",
        ],
      },
      {
        heading: "Global Impact, Family Values",
        body: [
          "BIOTRONIK is a family-owned company with a global footprint. We combine the agility and culture of a family business with the scale and resources of a global medical device leader. This means faster decisions, closer collaboration, and a genuine sense of belonging.",
        ],
      },
      {
        heading: "Forbes Best Employers",
        body: [
          "BIOTRONIK has been consistently recognized by Forbes as one of the best employers in the medical device industry. Our commitment to people — their growth, wellbeing, and inclusion — is reflected in everything we do.",
        ],
      },
    ],
  },

  "careers/jobs": {
    title: "Jobs & Careers",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK careers",
    sections: [
      {
        body: [
          "Join over 6,000 colleagues across more than 100 countries in our shared mission to save and improve lives. BIOTRONIK offers careers across engineering, clinical, regulatory, commercial, and corporate functions.",
        ],
      },
      {
        heading: "Open Positions",
        body: [
          "We are hiring across multiple disciplines and geographies. Use the search below to find roles that match your skills and interests. We welcome applications from all qualified candidates regardless of background.",
        ],
      },
      {
        heading: "Student & Graduate Programs",
        body: [
          "BIOTRONIK offers internships, thesis projects, and graduate programs for students and recent graduates in engineering, life sciences, business, and other disciplines. Start your career at a company where your work makes a real difference.",
        ],
      },
    ],
  },

  "careers/working-with-us": {
    title: "Working With Us",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Working at BIOTRONIK",
    sections: [
      {
        body: [
          "At BIOTRONIK, we invest in our people. From competitive compensation and benefits to professional development and a culture of inclusion, we are committed to making BIOTRONIK a great place to work.",
        ],
      },
      {
        heading: "Benefits",
        body: [
          "BIOTRONIK offers competitive salaries, comprehensive health benefits, retirement plans, flexible working arrangements, and generous parental leave. Our benefits packages are designed to support you at every stage of life.",
        ],
      },
      {
        heading: "Development",
        body: [
          "We believe in growing our people. BIOTRONIK provides extensive training, mentoring, and development opportunities — from on-the-job learning to formal programs, tuition support, and leadership development.",
        ],
      },
      {
        heading: "Inclusion & Diversity",
        body: [
          "BIOTRONIK's strength comes from the diversity of our teams. We are committed to building an inclusive workplace where every employee can thrive, and where diverse perspectives drive better innovation.",
        ],
      },
    ],
  },

  // ──────────────── NEWSROOM ────────────────

  "newsroom/press-releases": {
    title: "Press Releases",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK Press Releases",
    sections: [
      {
        body: [
          "Find the latest news and announcements from BIOTRONIK. Our press releases cover product approvals, clinical milestones, partnership announcements, and company updates.",
        ],
      },
    ],
  },

  // ──────────────── COMPANY ────────────────

  "company/sustainability": {
    title: "Sustainability",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK Sustainability",
    sections: [
      {
        body: [
          "BIOTRONIK is committed to conducting business in a sustainable, responsible, and ethical manner. Our sustainability strategy encompasses environmental stewardship, social responsibility, and strong governance.",
        ],
      },
      {
        heading: "Environmental Responsibility",
        body: [
          "We are working to reduce the environmental impact of our manufacturing processes and supply chain. This includes investments in energy efficiency, waste reduction, and responsible sourcing of materials.",
        ],
      },
      {
        heading: "Social Responsibility",
        body: [
          "BIOTRONIK is committed to improving health outcomes globally, with a particular focus on expanding access to cardiac care in underserved regions. We support charitable medical programs and work with healthcare systems worldwide to improve patient access.",
        ],
      },
    ],
  },

  "company/innovations": {
    title: "Innovations",
    subtitle: "Pioneering the Future of Medicine",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK Innovations",
    sections: [
      {
        body: [
          "Innovation is in BIOTRONIK's DNA. Since creating Germany's first pacemaker in 1963, we have consistently introduced technologies that have changed the standard of care in cardiac and pain medicine.",
        ],
      },
      {
        heading: "Research & Development",
        body: [
          "BIOTRONIK invests significantly in research and development — a higher proportion of revenue than many peers in the medical device industry. Our R&D centers in Berlin, Bülach, and Lake Oswego develop the next generation of cardiac and neuromodulation therapies.",
        ],
      },
      {
        heading: "Micro Systems Technologies",
        body: [
          "BIOTRONIK's Micro Systems Technologies (MST) division develops and manufactures the precision micro-electronic components at the heart of our devices. MST's capabilities include hermetic sealing, ASIC design, and advanced manufacturing processes.",
        ],
      },
    ],
  },

  "company/compliance": {
    title: "Compliance",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "Compliance",
    sections: [
      {
        body: [
          "BIOTRONIK is committed to the highest standards of legal compliance and ethical business conduct. Our compliance program covers anti-bribery, data privacy, quality systems, and interactions with healthcare professionals.",
        ],
      },
      {
        heading: "Quality Management",
        body: [
          "All BIOTRONIK products are developed and manufactured under a certified quality management system compliant with ISO 13485, FDA QSR, and applicable EU MDR requirements. Our quality commitment spans the entire product lifecycle.",
        ],
      },
      {
        heading: "Healthcare Professional Interactions",
        body: [
          "BIOTRONIK's interactions with healthcare professionals comply with the strictest industry codes of conduct including MedTech Europe, AdvaMed, and applicable national regulations. We maintain transparency in all consulting and educational relationships.",
        ],
      },
    ],
  },

  "company/locations": {
    title: "Locations",
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: "BIOTRONIK locations worldwide",
    sections: [
      {
        body: [
          "BIOTRONIK is headquartered in Berlin, Germany, with manufacturing facilities, regional offices, and subsidiaries in more than 100 countries worldwide.",
        ],
      },
      {
        heading: "Headquarters",
        body: [
          "BIOTRONIK SE & Co. KG\nWoermannkehre 1\n12359 Berlin, Germany\nPhone: +49 30 68905-0\nEmail: info@biotronik.com",
        ],
      },
      {
        heading: "Manufacturing",
        body: [
          "BIOTRONIK operates precision manufacturing facilities in Berlin (Germany), Bülach (Switzerland), and Lake Oswego (Oregon, USA). These facilities produce cardiac rhythm management devices to the most stringent international quality standards.",
        ],
      },
    ],
  },
};

// Build lookup with normalized keys
const normalizedDB: Record<string, PageContent> = {};
for (const [key, val] of Object.entries(db)) {
  normalizedDB[key.toLowerCase()] = val;
}

export function lookupPage(path: string): PageContent | null {
  // Remove /en-us/ prefix
  const normalized = path.replace(/^\/en-us\//, "").replace(/\/$/, "").toLowerCase();

  // Exact match
  if (normalizedDB[normalized]) return normalizedDB[normalized];

  // Prefix match (longest prefix wins)
  const parts = normalized.split("/");
  for (let len = parts.length; len > 0; len--) {
    const prefix = parts.slice(0, len).join("/");
    if (normalizedDB[prefix]) return normalizedDB[prefix];
  }

  return null;
}

export function getDistributorContent(path: string): PageContent | null {
  const lower = path.toLowerCase();
  // Distributor/subsidiary pages are flat /en-us/biotronik-XXX slugs
  if (!lower.match(/\/en-us\/biotronik-[a-z]/)) return null;

  const slug = path.split("/").pop() || "";
  const name = slug.replace(/^biotronik-/, "BIOTRONIK ").split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // Guess country from slug keywords
  const countryMap: Record<string, string> = {
    france: "France", germany: "Germany", "deutschland": "Germany",
    austria: "Austria", schweiz: "Switzerland", switzerland: "Switzerland",
    italy: "Italy", italia: "Italy", spain: "Spain", espana: "Spain",
    poland: "Poland", polska: "Poland", czech: "Czech Republic",
    hungary: "Hungary", romania: "Romania", bulgaria: "Bulgaria",
    serbia: "Serbia", croatia: "Croatia", slovenia: "Slovenia",
    slovakia: "Slovakia", ukraine: "Ukraine", russia: "Russia",
    turkey: "Turkey", greece: "Greece",
    usa: "USA", inc: "USA", canada: "Canada",
    brazil: "Brazil", brasil: "Brazil", argentina: "Argentina",
    mexico: "Mexico", colombia: "Colombia", chile: "Chile",
    china: "China", beijing: "China", japan: "Japan",
    korea: "South Korea", india: "India", australia: "Australia",
    singapore: "Singapore", asia: "Asia Pacific", pacific: "Asia Pacific",
    "middle-east": "Middle East", saudi: "Saudi Arabia",
    netherlands: "Netherlands", belgium: "Belgium", denmark: "Denmark",
    sweden: "Sweden", norway: "Norway", finland: "Finland",
    portugal: "Portugal", ireland: "Ireland", "uk": "United Kingdom",
    baltija: "Baltic States", latvia: "Latvia", estonia: "Estonia", lithuania: "Lithuania",
    bih: "Bosnia & Herzegovina", nordics: "Nordic Countries",
  };

  let country = "";
  for (const [kw, c] of Object.entries(countryMap)) {
    if (lower.includes(kw)) { country = c; break; }
  }

  return {
    title: name,
    subtitle: country ? `BIOTRONIK Representative — ${country}` : undefined,
    heroImage: `${CDN}/sites/default/bio_files/styles/half_hd/public/2023-09/BIO35029_AErzte_und_Klinikpersonal_crop.jpg.webp`,
    heroImageAlt: `BIOTRONIK office`,
    sections: [
      {
        body: [
          `${name} is the local BIOTRONIK representative${country ? ` in ${country}` : ""}. BIOTRONIK is represented in over 100 countries worldwide through a network of wholly owned subsidiaries, affiliated companies, and authorized distribution partners.`,
        ],
      },
      {
        heading: "Products & Services",
        body: [
          "BIOTRONIK's full portfolio of cardiac rhythm management, electrophysiology, neuromodulation, and digital health products is available through this representative. Our local teams provide clinical, technical, and regulatory support.",
          "For product inquiries, technical support, training, or clinical assistance, please contact your local BIOTRONIK representative directly.",
        ],
      },
      {
        heading: "Quality & Compliance",
        body: [
          "All BIOTRONIK products are manufactured to the highest international quality standards and comply with applicable local regulatory requirements. BIOTRONIK is committed to patient safety and clinical excellence in every market we serve.",
        ],
      },
    ],
    sidebarLinks: [
      { label: "Products", href: "/en-us/products/cardiac-rhythm-management" },
      { label: "Find a Physician", href: "/en-us/patients" },
      { label: "Professionals", href: "/en-us/professionals" },
      { label: "Company", href: "/en-us/company" },
    ],
  };
}
