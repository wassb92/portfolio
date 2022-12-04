import React from "react";
import resumeInternPng from "assets/resume/intern.png";
import resumeInternPdf from "assets/resume/intern.pdf";
import resumeFreelancePng from "assets/resume/freelance.png";
import resumeFreelancePdf from "assets/resume/freelance.pdf";

const DownloadResume = (props) => {
  const seekingTrad = props?.seeking === "freelance" ? "freelance" : "stage";
  return (
    <div className="inline-flex space-x-10 p-10 hover:scale-125">
      <a
        href={props.file}
        className="text-2xl p-4 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-secondary via-black from-main bg-size-200 hover:bg-right-bottom"
        download={`wassini_bouzidi_${seekingTrad}_cv`}
      >
        Télécharger en {props.ext}
      </a>
    </div>
  );
};

const Resume = ({ seeking }) => {
  return (
    <div className="w-full h-full text-center bg-gradient-to-br from-main to-secondary">
      <div className="flex justify-center p-4 md:px-80">
        <img
          src={seeking === "freelance" ? resumeFreelancePng : resumeInternPng}
          className="rounded-xl object-cover w-full h-full"
          alt="resume"
        />
      </div>
      <DownloadResume
        ext="PDF"
        file={seeking === "freelance" ? resumeFreelancePdf : resumeInternPdf}
        seeking={seeking}
      />
      <DownloadResume
        ext="PNG"
        file={seeking === "freelance" ? resumeFreelancePng : resumeInternPng}
        seeking={seeking}
      />
    </div>
  );
};

export default Resume;
