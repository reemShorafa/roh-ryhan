import logo from "../img/logo (2).png";
export default function Brand({ light = false, language = "ar" }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="#top"
      aria-label={language === "ar" ? "روح وريحان" : "Rooh and Rayhan"}
    >
      <img
        src={logo}
        alt={language === "ar" ? "روح وريحان" : "Rooh and Rayhan"}
      />
    </a>
  );
}
