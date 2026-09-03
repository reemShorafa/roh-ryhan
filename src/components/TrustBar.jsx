import { Award, BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react";

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
  return (
    <section className="trust-wrap">
      <div className="trust-bar">
        {items[language].map(({ i: Icon, t, d }) => (
          <div className="trust-item" key={t}>
            <div>
              <strong>{t}</strong>
              <small>{d}</small>
            </div>
            <span className="trust-icon">
              <Icon size={27} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
