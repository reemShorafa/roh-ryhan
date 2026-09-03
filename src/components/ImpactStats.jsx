import { Box, HandHeart, UsersRound } from "lucide-react";

const stats = {
  ar: [
    { icon: <Box />, value: "85+", label: "مشروع إغاثي" },
    { icon: <HandHeart />, value: "45,000+", label: "متبرع" },
    { icon: <UsersRound />, value: "120,000+", label: "مستفيد" },
  ],
  en: [
    { icon: <Box />, value: "85+", label: "Relief projects" },
    { icon: <HandHeart />, value: "45,000+", label: "Donors" },
    { icon: <UsersRound />, value: "120,000+", label: "Beneficiaries" },
  ],
};

export default function ImpactStats({ language }) {
  return (
    <aside className="impact-stats">
      {stats[language].map((s) => (
        <div className="stat" key={s.label}>
          <div className="gold-icon">{s.icon}</div>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </aside>
  );
}
