import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

import cursor from "./assets/cursors/Normal_Select.cur";

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
    <div
      className="overflow-hidden font-sans w-full h-full"
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <Navbar />
      <div className="bg-gradient-to-br from-main via-black to-secondary ">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
