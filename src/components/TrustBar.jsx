import { Award, BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = {
  ar: [
    { i: ShieldCheck, t: "شفافية تامة", d: "تقارير دورية موثقة" },
    { i: Award, t: "موثوق ومعتمد", d: "مسجل لدى الجهات الرسمية" },
    { i: BadgeCheck, t: "أثر حقيقي", d: "نصل إلى من يحتاج فعلاً" },
    { i: LockKeyhole, t: "تبرع آمن", d: "منصة دفع محمية 100%" },
  ],
  en: [
    { i: ShieldCheck, t: "Fully transparent", d: "Verified regular reports" },
    { i: Award, t: "Trusted and certified", d: "Registered officially" },
    { i: BadgeCheck, t: "Real impact", d: "Reaching those in need" },
    { i: LockKeyhole, t: "Secure donation", d: "100% protected payments" },
  ],
};

export default function TrustBar({ language }) {
  const groupedItems = [
    items[language].slice(0, 2),
    items[language].slice(2, 4),
  ];

  return (
    <section className="trust-wrap">
      <div className="trust-bar">
        {groupedItems.map((group, index) => (
          <div className="trust-pair" key={index}>
            {group.map(({ i: Icon, t, d }, itemIndex) => (
              <ScrollReveal
                className="trust-item"
                delay={(index * 2 + itemIndex) * 0.08}
                key={t}
              >
                <div>
                  <strong>{t}</strong>
                  <small>{d}</small>
                </div>
                <span className="trust-icon">
                  <Icon size={27} />
                </span>
              </ScrollReveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
