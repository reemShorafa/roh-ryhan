import { Heart, Languages, Menu, X } from "lucide-react";
import Brand from "./Brand";
const links = {
  ar: [
    "الرئيسية",
    "عن الجمعية",
    "مشاريعنا",
    "تقاريرنا",
    "الأخبار",
    "تواصل معنا",
  ],
  en: ["Home", "About us", "Our projects", "Reports", "News", "Contact us"],
};

export default function Navbar({
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <header className="navbar" id="top">
      <div className="nav-inner">
        <Brand language={language} />
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links[language].map((x, i) => (
            <a
              className={i === 0 ? "active" : ""}
              href={i === 2 ? "#projects" : "#top"}
              key={x}
              onClick={() => setMenuOpen(false)}
            >
              {x}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="account"
            type="button"
            onClick={() => {
              setLanguage(language === "ar" ? "en" : "ar");
              setMenuOpen(false);
            }}
          >
            <Languages size={18} />
            {language === "ar" ? "English" : "العربية"}
          </button>
          <a className="donate-button" href="#donate">
            <Heart size={18} />
            {language === "ar" ? "تبرع الآن" : "Donate now"}
          </a>
        </div>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={language === "ar" ? "القائمة" : "Menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
