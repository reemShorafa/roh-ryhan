import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const copy = {
  ar: {
    logoLabel: "مكان شعار روح وريحان",
    contact: "تواصل معنا",
    address: "فلسطين",
    quickLinks: "روابط سريعة",
    links: [
      ["من نحن", "#top"],
      ["مشاريعنا", "#projects"],
      ["أخبارنا", "#top"],
      ["تبرع الآن", "#donate"],
      ["تطوع معنا", "#top"],
      ["اتصل بنا", "#contact"],
    ],
    importantLinksTitle: "روابط مهمة",
    importantLinks: [
      ["سياسة الخصوصية", "#"],
      ["تراخيص الجمعية", "#"],
      ["شروط الاستخدام", "#"],
      ["سياسة التبرعات", "#"],
    ],
    newsletterTitle: "النشرة البريدية والتواصل",
    newsletterPlaceholder: "بريدك الإلكتروني",
    newsletterButton: "اشترك",
    follow: "تابعونا على",
    copyright: "© 2026 روح وريحان — جميع الحقوق محفوظة",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
  },
  en: {
    logoLabel: "Roh & Ryhan logo placeholder",
    contact: "Contact Us",
    address: "Palestine",
    quickLinks: "Quick Links",
    links: [
      ["About Us", "#top"],
      ["Our Projects", "#projects"],
      ["News", "#top"],
      ["Donate Now", "#donate"],
      ["Volunteer With Us", "#top"],
      ["Contact Us", "#contact"],
    ],
    importantLinksTitle: "Important Links",
    importantLinks: [
      ["Privacy Policy", "#"],
      ["Association Licenses", "#"],
      ["Terms of Use", "#"],
      ["Donation Policy", "#"],
    ],
    newsletterTitle: "Newsletter & Follow Us",
    newsletterPlaceholder: "Your email",
    newsletterButton: "Subscribe",
    follow: "Follow us on",
    copyright: "© 2026 Roh & Ryhan — All Rights Reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};

// أيقونات سوشال ميديا مخصصة (SVG) لأن lucide-react ما فيها أيقونات براندات
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.25A3.25 3.25 0 1112 8.75a3.25 3.25 0 010 6.5zm5.2-8.475a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { name: "X", icon: XIcon, href: "#top" },
  { name: "Instagram", icon: InstagramIcon, href: "#top" },
  { name: "Facebook", icon: FacebookIcon, href: "#top" },
  { name: "YouTube", icon: YoutubeIcon, href: "#top" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#top" },
];

export default function Footer({ language }) {
  const t = copy[language];
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: ربط الفورم بخدمة النشرة البريدية الفعلية
    console.log("Newsletter subscribe:", email);
    setEmail("");
  };

  return (
    <footer id="contact">
      <div className="footer-inner">
        <section className="footer-about">
          <div
            className="footer-logo-placeholder"
            aria-label={t.logoLabel}
            role="img"
          />
          <h3>{t.contact}</h3>
          <a href="tel:920000000">
            <Phone size={16} />
            9200 000 00
          </a>
          <a href="mailto:info@rooh.org">
            <Mail size={16} />
            info@rooh.org
          </a>
          <span>
            <MapPin size={16} />
            {t.address}
          </span>
        </section>

        <nav className="footer-links" aria-label={t.quickLinks}>
          <h3>{t.quickLinks}</h3>
          {t.links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <nav
          className="footer-important-links"
          aria-label={t.importantLinksTitle}
        >
          <h3>{t.importantLinksTitle}</h3>
          {t.importantLinks.map(([label, href]) => (
            <a
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </nav>

        <section className="footer-newsletter-follow">
          <h3>{t.newsletterTitle}</h3>
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletterPlaceholder}
              aria-label={t.newsletterPlaceholder}
              className="footer-newsletter-input"
            />
            <button type="submit" className="footer-newsletter-submit">
              {t.newsletterButton}
            </button>
          </form>
          <p className="footer-follow-label">{t.follow}</p>
          <div className="social-badges">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                href={href}
                aria-label={name}
                key={name}
                className="social-icon"
              >
                <Icon />
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <span>{t.copyright}</span>
        <nav aria-label={language === "ar" ? "روابط قانونية" : "Legal links"}>
          <a href="#top">{t.privacy}</a>
          <a href="#top">{t.terms}</a>
        </nav>
      </div>
    </footer>
  );
}
