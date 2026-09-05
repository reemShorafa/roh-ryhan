import { useState } from "react";

function Footer({ language = "ar" }) {
  const isArabic = language === "ar";

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const content = {
    ar: {
      quickLinks: "روابط سريعة",
      importantLinks: "روابط مهمة",
      contact: "تواصل معنا",

      home: "الرئيسية",
      about: "من نحن",
      projects: "مشاريعنا",
      news: "أخبارنا",
      donate: "تبرع الآن",
      volunteer: "تطوع معنا",
      contactLink: "اتصل بنا",

      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      licenses: "تراخيص الجمعية",
      donations: "سياسة التبرعات",
      faq: "الأسئلة الشائعة",

      phone: "00 000 9200",
      email: "info@rooh.org",
      location: "فلسطين - غزة",

      map: "شاهد موقعنا على الخريطة",

      description:
        "جمعية روح وريحان تعمل على تقديم المساعدات الإنسانية والإغاثية والتنموية لأهلنا في غزة، من خلال مشاريع نوعية وشراكات فاعلة ومجتمع داعم.",

      copyright: "جميع الحقوق محفوظة © 2025 جمعية روح وريحان",
      slogan: "معًا .. نصنع أثرًا يدوم",

      badge: "مسجلة ومعتمدة",
      badge2: "لدى الجهات الرسمية",

      gaza1: "غزة",
      gaza2: "ستبقى",

      life: "حياة",
      dignity: "أكثر كرامة",

      future: "مستقبل",
      hope: "أكثر أملًا",

      community: "مجتمع",
      connected: "أكثر تماسكًا",

      hashtag: "#معًا_لأجلهم",
    },

    en: {
      quickLinks: "Quick Links",
      importantLinks: "Important Links",
      contact: "Contact Us",

      home: "Home",
      about: "About Us",
      projects: "Our Projects",
      news: "News",
      donate: "Donate Now",
      volunteer: "Volunteer",
      contactLink: "Contact Us",

      privacy: "Privacy Policy",
      terms: "Terms of Use",
      licenses: "Organization Licenses",
      donations: "Donation Policy",
      faq: "FAQ",

      phone: "00 000 9200",
      email: "info@rooh.org",
      location: "Palestine - Gaza",

      map: "View us on the map",

      description:
        "Rooh & Rayhan Association works to provide humanitarian, relief and development assistance to our people in Gaza through impactful projects, active partnerships and a supportive community.",

      copyright: "All rights reserved © 2025 Rooh & Rayhan Association",
      slogan: "Together .. We create a lasting impact",

      badge: "Registered & Accredited",
      badge2: "By official authorities",

      gaza1: "Gaza",
      gaza2: "Will Remain",

      life: "Life",
      dignity: "More Dignified",

      future: "Future",
      hope: "More Hope",

      community: "Community",
      connected: "More Connected",

      hashtag: "#Together_ForThem",
    },
  };

  const t = content[language];

  return (
    <footer
      className={`footer ${isArabic ? "footer-ar" : "footer-en"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="footer-wrapper">
        {/* =========================
            MOBILE ACCORDIONS
        ========================== */}

        <div className="footer-mobile-accordions">
          <div className="mobile-footer-item">
            <button
              className="mobile-accordion"
              onClick={() => toggleSection("quick")}
            >
              <span>{t.quickLinks}</span>
              <span className="accordion-arrow">
                {openSection === "quick" ? "⌃" : "⌄"}
              </span>
            </button>

            <div
              className={`mobile-accordion-content ${
                openSection === "quick" ? "open" : ""
              }`}
            >
              <a href="#home">{t.home}</a>
              <a href="#about">{t.about}</a>
              <a href="#projects">{t.projects}</a>
              <a href="#news">{t.news}</a>
              <a href="#donate">{t.donate}</a>
              <a href="#volunteer">{t.volunteer}</a>
              <a href="#contact">{t.contactLink}</a>
            </div>
          </div>

          <div className="mobile-footer-item">
            <button
              className="mobile-accordion"
              onClick={() => toggleSection("important")}
            >
              <span>{t.importantLinks}</span>
              <span className="accordion-arrow">
                {openSection === "important" ? "⌃" : "⌄"}
              </span>
            </button>

            <div
              className={`mobile-accordion-content ${
                openSection === "important" ? "open" : ""
              }`}
            >
              <a href="#privacy">{t.privacy}</a>
              <a href="#terms">{t.terms}</a>
              <a href="#licenses">{t.licenses}</a>
              <a href="#donations">{t.donations}</a>
              <a href="#faq">{t.faq}</a>
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP TOP
        ========================== */}

        <div className="footer-top">
          {/* ABOUT / LOGO */}

          <div className="footer-section footer-about">
            <div className="footer-logo-placeholder">
              <span>LOGO</span>
            </div>

            <h4>
              {isArabic
                ? "معًا .. نعيد الأمل إلى غزة"
                : "Together .. We Bring Hope to Gaza"}
            </h4>

            <p>{t.description}</p>

            {/* SOCIAL */}

            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook">
                f
              </a>

              <a href="#x" aria-label="X">
                𝕏
              </a>

              <a href="#youtube" aria-label="YouTube">
                ▶
              </a>

              <a href="#instagram" aria-label="Instagram">
                ◎
              </a>

              <a href="#whatsapp" aria-label="WhatsApp">
                ◉
              </a>
            </div>

            <div className="footer-hashtag">{t.hashtag}</div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-section footer-links-section">
            <h3>
              <span className="footer-heading-icon">🔗</span>
              {t.quickLinks}
            </h3>

            <div className="footer-links">
              <a href="#home">{t.home}</a>
              <a href="#about">{t.about}</a>
              <a href="#projects">{t.projects}</a>
              <a href="#news">{t.news}</a>
              <a href="#donate">{t.donate}</a>
              <a href="#volunteer">{t.volunteer}</a>
              <a href="#contact">{t.contactLink}</a>
            </div>
          </div>

          {/* IMPORTANT LINKS */}

          <div className="footer-section footer-links-section">
            <h3>
              <span className="footer-heading-icon">▤</span>
              {t.importantLinks}
            </h3>

            <div className="footer-links">
              <a href="#privacy">{t.privacy}</a>
              <a href="#terms">{t.terms}</a>
              <a href="#licenses">{t.licenses}</a>
              <a href="#donations">{t.donations}</a>
              <a href="#faq">{t.faq}</a>
            </div>
          </div>

          {/* CONTACT */}

          <div className="footer-section footer-contact">
            <h3>
              <span className="footer-heading-icon">♧</span>
              {t.contact}
            </h3>

            <div className="contact-row">
              <span>☎</span>
              <p>{t.phone}</p>
            </div>

            <div className="contact-row">
              <span>✉</span>
              <p>{t.email}</p>
            </div>

            <div className="contact-row">
              <span>⌖</span>
              <p>{t.location}</p>
            </div>

            {/* MAP */}

            <a href="#map" className="map-button">
              <div className="map-placeholder">⌖</div>

              <span>{t.map}</span>

              <b>{isArabic ? "←" : "→"}</b>
            </a>
          </div>
        </div>

        {/* =========================
            VALUES
        ========================== */}

        <div className="footer-values">
          <div className="value-item">
            <span className="value-icon">♡</span>

            <strong>{t.life}</strong>

            <small>{t.dignity}</small>
          </div>

          <div className="value-item">
            <span className="value-icon">❋</span>

            <strong>{t.future}</strong>

            <small>{t.hope}</small>
          </div>

          <div className="value-item">
            <span className="value-icon">♧</span>

            <strong>{t.community}</strong>

            <small>{t.connected}</small>
          </div>
        </div>

        {/* =========================
            SKYLINE
        ========================== */}

        <div className="footer-skyline">
          <div className="footer-skyline-content">
            <div className="footer-gaza">
              <span>{t.gaza1}</span>
              <span>{t.gaza2}</span>
              <b>♡</b>
            </div>

            <div className="footer-copyright">
              <p>{t.copyright}</p>
              <span>{t.slogan}</span>
            </div>

            <div className="footer-badge">
              <div className="badge-circle">❋</div>

              <div>
                <strong>{t.badge}</strong>
                <small>{t.badge2}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
