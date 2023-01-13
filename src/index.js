import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";

import { SeekingContext } from "SeekingContext";

const Routing = () => {
  const [seeking, setSeeking] = useState("internship");
  return (
    <SeekingContext.Provider value={{ seeking, setSeeking }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/resume_internship"
          element={<Resume seeking="internship" />}
        />
        <Route
          path="/resume_freelance"
          element={<Resume seeking="freelance" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SeekingContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root"),
  document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
      elements[i].oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
          e.target.setCustomValidity("Ce champ doit être complété");
        }
      };
      elements[i].oninput = function (e) {
        e.target.setCustomValidity("");
      };
    }
  })
);
