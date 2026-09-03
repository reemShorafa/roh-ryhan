import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

const copy = {
  ar: {
    eyebrow: "🌿 معًا... نعيد الأمل إلى غزة",
    title: "نسهم اليوم",
    titleAccent: "لنحيي غدًا",
    description:
      "في ظل الظروف الصعبة التي يمر بها أهلنا في غزة، نعمل على تقديم المساعدات الإنسانية والإغاثية العاجلة لهم.",
    donate: "تبرع الآن",
    projects: "استكشف المشاريع",
  },
  en: {
    eyebrow: "🌿 Together... restoring hope to Gaza",
    title: "Giving today",
    titleAccent: "for a brighter tomorrow",
    description:
      "Amid the difficult circumstances facing families in Gaza, we provide urgent humanitarian and relief assistance.",
    donate: "Donate now",
    projects: "Explore projects",
  },
};

export default function Hero({ language }) {
  const t = copy[language];
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="hero">
      <div className="hero-media">
        <div className="hero-overlay" />
        {/* <div className="leaf leaf-one" />
        <div className="leaf leaf-two" /> */}
      </div>
      <div className="hero-content">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>
          {t.title}
          <br />
          <span>{t.titleAccent}</span>
        </h1>
        <p className="hero-copy">{t.description}</p>
        <div className="hero-actions">
          <a className="donate-button big" href="#donate">
            <Heart size={20} />
            {t.donate}
          </a>
          <a className="outline-button" href="#projects">
            {t.projects} <Arrow size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
