import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import MissionVisionGoals from "./components/mission";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

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
        <Hero language={language} />
        <TrustBar language={language} />
        <MissionVisionGoals language={language} />
        <ProjectsSection language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
