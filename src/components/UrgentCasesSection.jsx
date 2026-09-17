import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Flame,
  Gift,
  HeartPulse,
  Heart,
  Home,
  MapPin,
  Sprout,
  Soup,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    key: "water",
    icon: Droplet,
    ar: "توفير مياه نظيفة",
    en: "Clean water supply",
    percent: 45,
    raised: "8,900",
    goal: "20,000",
  },
  {
    key: "student",
    icon: BookOpen,
    ar: "كفالة تعليم طالب",
    en: "Student education",
    percent: 30,
    raised: "4,500",
    goal: "15,000",
  },
  {
    key: "medical",
    icon: HeartPulse,
    ar: "علاج حالة مرضية",
    en: "Medical treatment",
    percent: 77,
    raised: "11,500",
    goal: "15,000",
  },
  {
    key: "food",
    icon: Soup,
    ar: "سلة غذائية لأسر محتاجة",
    en: "Food basket",
    percent: 52,
    raised: "5,200",
    goal: "10,000",
  },
];

const copy = {
  ar: {
    dir: "rtl",
    eyebrow: "بادر بالخير",
    title: "حالات بحاجة لدعم",
    subtitle: "معا نصل إلى من هم في أمس الحاجة",
    sideTitle: "بصمتك اليوم قد تغيّر حياة",
    sideText: "هنا حالات واقعية لأفراد وأسر يحتاجون إلى دعمكم العاجل",
    urgent: "حالة عاجلة",
    mainTitle: "ترميم منزل أسرة متضررة",
    mainText:
      "أسرة مكونة من 6 أفراد فقدت منزلها وتعيش حاليا في ظروف صعبة. نهدف إلى ترميم منزل آمن وكريم لهم.",
    donate: "ساهم الآن",
    percentLabel: "تم جمعه",
    required: "المبلغ المطلوب",
    raised: "المبلغ المتجمع",
    family: "أفراد الأسرة",
    projectType: "نوع المشروع",
    projectTypeValue: "ترميم منزل",
    location: "الموقع الجغرافي",
    locationValue: "غزة",
    bottomText: "كل مساهمة، مهما كانت صغيرة، تصنع فرقا كبيرا.",
    viewAll: "عرض جميع الحالات",
    currency: "$",
    of: "من",
  },
  en: {
    dir: "ltr",
    eyebrow: "Start good",
    title: "Cases need support",
    subtitle: "Together we reach those most in need",
    sideTitle: "Your impact today can change a life",
    sideText: "Real cases of people and families who need urgent support",
    urgent: "Urgent case",
    mainTitle: "Repair a damaged family home",
    mainText:
      "A family of 6 lost their home and now lives in difficult conditions. We aim to restore a safe and dignified home for them.",
    donate: "Contribute now",
    percentLabel: "Raised",
    required: "Required amount",
    raised: "Raised amount",
    family: "Family members",
    projectType: "Project type",
    projectTypeValue: "Home repair",
    location: "Location",
    locationValue: "Gaza",
    bottomText: "Every contribution, however small, makes a big difference.",
    viewAll: "View all cases",
    currency: "$",
    of: "of",
  },
};

function CaseProgress({ item, t }) {
  const Icon = item.icon;

  return (
    <article className="urgent-case-item">
      <div className="urgent-case-icon">
        <Icon size={30} strokeWidth={1.8} />
      </div>
      <div className="urgent-case-item-content">
        <h3>{item[t.dir === "rtl" ? "ar" : "en"]}</h3>
        <div className="urgent-case-progress-row">
          <div className="urgent-case-progress">
            <span style={{ width: `${item.percent}%` }} />
          </div>
          <strong>{item.percent}%</strong>
        </div>
        <p>
          {t.currency} {item.raised} {t.of} {t.currency} {item.goal}
        </p>
      </div>
      {t.dir === "rtl" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </article>
  );
}

export default function UrgentCasesSection({ language = "ar" }) {
  const t = copy[language];
  const isArabic = language === "ar";
  const sectionRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`urgent-cases-section ${
        hasEnteredViewport ? "is-visible" : ""
      }`}
      dir={t.dir}
      ref={sectionRef}
    >
      <ScrollReveal className="urgent-cases-heading">
        <span>{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
      </ScrollReveal>

      <div className="urgent-cases-layout">
        <ScrollReveal as="aside" className="urgent-cases-intro" delay={0.08}>
          <div className="urgent-cases-intro-icon">
            <Sprout size={38} strokeWidth={1.7} />
          </div>
          <h3>{t.sideTitle}</h3>
          <p>{t.sideText}</p>
          <div className="urgent-cases-nav">
            <button type="button" aria-label="Previous">
              {isArabic ? <ChevronRight size={21} /> : <ChevronLeft size={21} />}
            </button>
            <button type="button" aria-label="Next">
              {isArabic ? <ChevronLeft size={21} /> : <ChevronRight size={21} />}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal as="article" className="urgent-case-featured" delay={0.16}>
          <span className="urgent-case-badge">
            <Flame size={16} fill="currentColor" />
            {t.urgent}
          </span>

          <div className="urgent-case-featured-grid">
            <div className="urgent-case-featured-copy">
              <h3>{t.mainTitle}</h3>
              <p>{t.mainText}</p>
              <a href="#donate">
                <Heart size={19} />
                {t.donate}
              </a>
            </div>

            <div className="urgent-case-ring" aria-label={`${t.percentLabel} 68%`}>
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="48" />
                <circle cx="60" cy="60" r="48" pathLength="100" />
              </svg>
              <div className="urgent-case-ring-label">
                <strong>68%</strong>
                <span>{t.percentLabel}</span>
              </div>
            </div>
          </div>

          <div className="urgent-case-amounts">
            <div>
              <span>{t.required}</span>
              <strong>18,000 {t.currency}</strong>
            </div>
            <div>
              <span>{t.raised}</span>
              <strong>12,250 {t.currency}</strong>
            </div>
          </div>

          <div className="urgent-case-meta">
            <div>
              <UsersRound size={32} />
              <strong>6</strong>
              <span>{t.family}</span>
            </div>
            <div>
              <Home size={32} />
              <strong>{t.projectTypeValue}</strong>
              <span>{t.projectType}</span>
            </div>
            <div>
              <MapPin size={32} fill="currentColor" />
              <strong>{t.locationValue}</strong>
              <span>{t.location}</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="urgent-cases-list">
          {cases.map((item, index) => (
            <ScrollReveal delay={0.08 * index} key={item.key}>
              <CaseProgress item={item} t={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="urgent-cases-footer" delay={0.1}>
        <div>
          <span>
            <Gift size={34} />
          </span>
          <strong>{t.bottomText}</strong>
        </div>
        <a href="#projects">
          {t.viewAll}
          {isArabic ? <ArrowLeft size={22} /> : <ArrowRight size={22} />}
        </a>
      </ScrollReveal>
    </section>
  );
}
