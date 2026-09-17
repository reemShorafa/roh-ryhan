import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import TrustBar from "./components/TrustBar";
import MissionVisionGoals from "./components/mission";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Hero2 from "./components/hero2";
import CampaignNewsletter from "./components/CampaignNewsletter";
import UrgentCasesSection from "./components/UrgentCasesSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ar");

  return (
    <div
      className="site-shell"
      dir={language === "ar" ? "rtl" : "ltr"}
      lang={language}
    >
      <Navbar
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero2 language={language} />
        <MissionVisionGoals language={language} />
        <TrustBar language={language} />
        <ProjectsSection language={language} />
        <UrgentCasesSection language={language} />
        <CampaignNewsletter language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
