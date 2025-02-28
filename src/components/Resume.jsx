import React from "react";
import resume_en from "assets/resume/wassini_bouzidi_cv_en.pdf";
import resume_fr from "assets/resume/wassini_bouzidi_cv_fr.pdf";

const Resume = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const language = params.get("lang");

  return (
    <iframe
      src={language === "fr" ? resume_fr : resume_en}
      className="w-full h-screen"
      title="CV Wassini Bouzidi"
      name={`CV Wassini Bouzidi`}
      download={`wassini_bouzidi_cv.pdf`}
    />
  );
};

export default Resume;
