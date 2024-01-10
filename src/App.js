import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Snowfall from "react-snowfall";
import { SeekingContext } from "./SeekingContext";

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
  const { seeking } = useContext(SeekingContext);
  return (
    <div className="overflow-hidden font-sans w-full h-full">
      <Snowfall
        color={seeking === "internship" ? "#4031D9" : "#8A37DC"}
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
