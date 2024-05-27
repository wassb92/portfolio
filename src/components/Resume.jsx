import React from "react";
import resumeFixedTermEN from "assets/resume/fixedTerm_en.pdf";
import resumeFixedTermFR from "assets/resume/fixedTerm_fr.pdf";
import resumeFreelanceEN from "assets/resume/freelance_en.pdf";
import resumeFreelanceFR from "assets/resume/freelance_fr.pdf";

const Resume = () => {
  const url = new URL(window.location.href);

  const pathArray = new URL(url).pathname.split("/");
  const seeking = pathArray[1].replace("resume_", "");

  const params = new URLSearchParams(url.search);
  const language = params.get("language");

  if (!seeking) {
    window.location.href = "/";
    return null;
  }

  return (
    <iframe
      src={
        seeking === "freelance"
          ? language === "fr"
            ? resumeFreelanceFR
            : resumeFreelanceEN
          : language === "fr"
          ? resumeFixedTermFR
          : resumeFixedTermEN
      }
      className="w-full h-screen"
      title={`CV ${seeking}`}
      name={`CV ${seeking}`}
      download={`wassini_bouzidi_${seeking}_cv.pdf`}
    />
  );
};

export default Resume;
