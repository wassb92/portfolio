import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";
import { SeekingContext } from "SeekingContext";

const Routing = () => {
  const seeks = ["fixedTerm", "freelance", "longTerm"];
  const defaultSeek = seeks[2];
  const [seeking, setSeeking] = useState(defaultSeek);

  return (
    <SeekingContext.Provider value={{ seeking, setSeeking, defaultSeek }}>
      <Routes>
        <Route path="/" element={<App />} />
        {/* {seeks.map((seek) => (
          <Route path={`resume_${seek}`} element={<Resume />} key={seek} />
        ))} */}
        <Route path="cv" element={<Resume />} />
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
