import React from "react";
import resumeInternPdf from "assets/resume/intern.pdf";
import resumeFreelancePdf from "assets/resume/freelance.pdf";

const Resume = () => {
  const seeking = window?.location?.href
    ?.split("/")
    ?.pop()
    ?.replace("resume_", "");

  if (!seeking) {
    window.location.href = "/";
    return null;
  }

  return (
    <iframe
      src={seeking === "freelance" ? resumeFreelancePdf : resumeInternPdf}
      className="w-full h-screen"
      title="Resdume"
      name="Resdume"
    />
  );
};

export default Resume;
