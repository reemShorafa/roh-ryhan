import { useState } from "react";
import {
  ChevronDown,
  Layers,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function Footer({ language = "ar" }) {
  const isArabic = language === "ar";
  const [openMobileSection, setOpenMobileSection] = useState("about");

  const content = {
    ar: {
      aboutTitle: "عن الجمعية",
      participationTitle: "مشاركتنا",
      contactTitle: "تواصل معنا",
      about: "من نحن",
      projects: "مشاريعنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      faq: "الأسئلة الشائعة",
      gallery: "معرض الصور",
      videos: "معرض الفيديوهات",
      success: "قصص النجاح",
      volunteer: "تطوع معنا",
      description:
        "جمعية روح وريحان تعمل على تقديم المساعدات الإنسانية والإغاثية للأسر المحتاجة في غزة، لنكون معا جسرا للأمل وحياة أكثر كرامة.",
      copyright: "جميع الحقوق محفوظة © 2025 جمعية روح وريحان",
      slogan: "معا .. نصنع فرقا لأجل أفضل",
      quoteTitle: "ويبقى الأمل ...",
      quoteText: "ما دام في الأرض أناس يبنون الخير",
      gaza: "غزة",
      stays: "ستبقى في قلوبنا",
      brandLabel: "روح وريحان",
      tagline: "من غزة .. إلى قلوبكم",
    },
    en: {
      aboutTitle: "About",
      participationTitle: "Participation",
      contactTitle: "Contact Us",
      about: "About Us",
      projects: "Our Projects",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      faq: "FAQ",
      gallery: "Photo Gallery",
      videos: "Video Gallery",
      success: "Success Stories",
      volunteer: "Volunteer",
      description:
        "Rooh & Rayhan Association provides humanitarian and relief assistance for families in Gaza, building bridges of hope and dignity together.",
      copyright: "All rights reserved © 2025 Rooh & Rayhan Association",
      slogan: "Together .. We create a better future",
      quoteTitle: "Hope remains ...",
      quoteText: "As long as people on earth keep building good",
      gaza: "Gaza",
      stays: "Will remain in our hearts",
      brandLabel: "Rooh & Rayhan",
      tagline: "From Gaza .. to your hearts",
    },
  };

  const t = content[language];
  const aboutLinks = [
    t.about,
    isArabic ? "رؤيتنا ورسالتنا" : "Vision and mission",
    isArabic ? "فريق العمل" : "Our team",
    isArabic ? "الشركاء والداعمون" : "Partners and supporters",
    isArabic ? "التقارير المالية" : "Financial reports",
  ];
  const participationLinks = [t.projects, t.success, t.gallery, t.videos];
  const contactLinks = [
    isArabic ? "معلومات الاتصال" : "Contact information",
    isArabic ? "موقعنا على الخريطة" : "Our location",
    t.faq,
    t.volunteer,
  ];

  const mobileSections = [
    { id: "about", title: t.aboutTitle, links: aboutLinks, Icon: Layers },
    {
      id: "participation",
      title: t.participationTitle,
      links: participationLinks,
      Icon: LinkIcon,
    },
    { id: "contact", title: t.contactTitle, links: contactLinks, Icon: MessageCircle },
  ];

  return (
    <footer
      id="footer"
      className={`footer ${isArabic ? "footer-ar" : "footer-en"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="footer-bg" />

      <div className="footer-wrapper">
        <div className="footer-main">
          <ScrollReveal as="section" className="footer-brand-block">
            <a className="footer-logo" href="#home" aria-label={t.brandLabel}>
              <span>{isArabic ? "روح" : "Rooh"}</span>
              <span>{isArabic ? "وريحان" : "& Rayhan"}</span>
            </a>

            <p className="footer-brand-tagline">{t.tagline}</p>
            <p className="footer-description">{t.description}</p>

            <div className="footer-social">
              <a href="#instagram" aria-label="Instagram">
                in
              </a>
              <a href="#youtube" aria-label="YouTube">
                ▶
              </a>
              <a href="#x" aria-label="X">
                X
              </a>
              <a href="#facebook" aria-label="Facebook">
                f
              </a>
              <a href="#whatsapp" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal as="section" className="footer-links-section" delay={0.08}>
            <FooterLinks title={t.aboutTitle} links={aboutLinks} />
          </ScrollReveal>
          <ScrollReveal as="section" className="footer-links-section" delay={0.16}>
            <FooterLinks title={t.participationTitle} links={participationLinks} />
          </ScrollReveal>
          <ScrollReveal as="section" className="footer-links-section" delay={0.24}>
            <FooterLinks title={t.contactTitle} links={contactLinks} />
          </ScrollReveal>

          <div className="footer-mobile-accordions">
            {mobileSections.map((section) => {
              const isOpen = openMobileSection === section.id;
              const { Icon } = section;

              return (
                <section className="mobile-footer-item" key={section.id}>
                  <button
                    className="mobile-accordion"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenMobileSection(isOpen ? "" : section.id)
                    }
                  >
                    <span className="mobile-accordion-title">
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                      <span>{section.title}</span>
                    </span>
                    <span className="accordion-arrow" aria-hidden="true">
                      <ChevronDown size={19} strokeWidth={2.2} />
                    </span>
                  </button>

                  <div
                    className={`mobile-accordion-content ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    {section.links.map((link) => (
                      <a href={`#${link}`} key={link}>
                        {link}
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

      </div>

      <ScrollReveal className="footer-bottom" amount={0.1}>
        <div className="footer-location">
          <div>
            <strong>{t.gaza}</strong>
            <small>{t.stays}</small>
          </div>
        </div>

        <p>
          {t.copyright}
          <span>{t.slogan}</span>
        </p>

        <div className="footer-policy">
          <a href="#privacy">{t.privacy}</a>
          <a href="#terms">{t.terms}</a>
        </div>
      </ScrollReveal>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <>
      <h3>{title}</h3>
      <div className="footer-links">
        {links.map((link) => (
          <a href={`#${link}`} key={link}>
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export default Footer;
