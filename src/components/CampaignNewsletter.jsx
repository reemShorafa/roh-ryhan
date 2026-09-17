import { Leaf, Mail, Quote } from "lucide-react";
import bgImage from "../img/5555555555.png";
import childImage from "../img/newsletter-child.png";
import ScrollReveal from "./ScrollReveal";

const copy = {
  ar: {
    dir: "rtl",
    eyebrow: "ابق على اطلاع",
    heading: "النشرة البريدية",
    headingSubtitle: "تابع أخبار الحملات والمشاريع الإنسانية أولا بأول",
    title: "كن جزءا من الأثر",
    subtitle:
      "اشترك في نشرتنا البريدية ليصلك كل جديد عن مشاريعنا وحملاتنا الإنسانية",
    placeholder: "أدخل بريدك الإلكتروني",
    button: "اشترك الآن",
    quoteLines: ["وما تقدموا لأنفسكم من خير", "تجدوه عند الله"],
  },
  en: {
    dir: "ltr",
    eyebrow: "Stay updated",
    heading: "Newsletter",
    headingSubtitle: "Follow our humanitarian campaigns and project updates",
    title: "Be part of the impact",
    subtitle:
      "Subscribe to our newsletter for updates on our projects and humanitarian campaigns",
    placeholder: "Enter your email",
    button: "Subscribe now",
    quoteLines: [
      "Whatever good you put forward for yourselves,",
      "you will find it with Allah",
    ],
  },
};

export default function CampaignNewsletter({ language = "ar" }) {
  const t = copy[language];

  return (
    <section
      className="campaign-newsletter"
      id="news"
      dir={t.dir}
      aria-labelledby="campaign-newsletter-heading"
    >
      <ScrollReveal className="campaign-newsletter-heading">
        <span>{t.eyebrow}</span>
        <h2 id="campaign-newsletter-heading">{t.heading}</h2>
        <p>{t.headingSubtitle}</p>
      </ScrollReveal>

      <ScrollReveal className="campaign-newsletter-card" delay={0.12}>
        <img className="campaign-newsletter-bg" src={bgImage} alt="" />

        <div className="campaign-newsletter-visual" aria-hidden="true">
          <img src={childImage} alt="" />
        </div>

        <div className="campaign-newsletter-content">
          <h3>
            {t.title}
            <Leaf size={42} strokeWidth={1.7} />
          </h3>
          <p>{t.subtitle}</p>

          <form
            className="campaign-newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="sr-only" htmlFor="campaign-email">
              {t.placeholder}
            </label>
            <div className="campaign-input-wrap">
              <Mail size={22} />
              <input
                id="campaign-email"
                type="email"
                inputMode="email"
                placeholder={t.placeholder}
              />
            </div>
            <button type="submit">
              {t.button}
              <Mail size={20} />
            </button>
          </form>
        </div>

        <blockquote className="campaign-newsletter-quote">
          <Quote
            className="campaign-quote-mark campaign-quote-mark-top"
            size={32}
            fill="currentColor"
          />
          <p>
            {t.quoteLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <Quote
            className="campaign-quote-mark campaign-quote-mark-bottom"
            size={32}
            fill="currentColor"
          />
        </blockquote>
      </ScrollReveal>
    </section>
  );
}
