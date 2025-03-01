import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./translations/en.json";
import frTranslation from "./translations/fr.json";

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
};

const lng = "en";

i18n.use(initReactI18next).init({
  resources,
  lng,
  interpolation: {
    escapeValue: false,
  },
});

const reveal = () => {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; ++i) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const posElementVisible = 70;

    if (elementTop < windowHeight - posElementVisible)
      reveals[i].classList.add("active");
    else reveals[i].classList.remove("active");
  }
};

window.addEventListener("scroll", reveal);

const App = () => {
  return (
    <div className="overflow-hidden font-sans w-full h-full">
      <Snowfall
        color="#8A37DC"
        style={{ position: "fixed" }}
        snowflakeCount={200}
      />
      <Navbar />
      <div className="bg-gradient-to-br from-main via-black to-secondary ">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
