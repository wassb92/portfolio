import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { HiArrowNarrowRight } from "react-icons/hi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import animatedReact from "assets/animatedReact.gif";
import animatedNode from "assets/animatedNode.gif";
import { SeekingContext } from "SeekingContext";
import BruinGif from "assets/bruin.gif";

import { TypeAnimation } from "react-type-animation";

import SwitchLanguage from "./SwitchLanguage";

const UnderlinedText = ({ children, className = "" }) => {
  return (
    <strong className="inline underline underline-offset-2">
      <span className={className}>{children}</span>
    </strong>
  );
};

const FreelanceSearchingText = ({ t }) => {
  return (
    <div>
      <div className="mt-2">
        {t("Home.Freelance.intro.university")}{" "}
        <UnderlinedText>{t("Home.Freelance.intro.ucla")}</UnderlinedText> (
        {t("Home.Freelance.intro.universityFullName")}),{" "}
        {t("Home.Freelance.intro.sameTime")}{" "}
        <UnderlinedText>{t("Common.fullStack")}</UnderlinedText>{" "}
        {t("Home.Freelance.intro.withExperience")}{" "}
        <UnderlinedText>
          {t("Home.Freelance.intro.freelanceMissions")}
        </UnderlinedText>
        .
      </div>
      <div className="mt-2">
        {t("Home.Freelance.skills.webMobileDevelopment")}{" "}
        <UnderlinedText>{t("Home.Freelance.skills.react")}</UnderlinedText>,{" "}
        <UnderlinedText>
          {t("Home.Freelance.skills.tailwindCSS")}
        </UnderlinedText>
        , <UnderlinedText>{t("Home.Freelance.skills.nodeJS")}</UnderlinedText>,{" "}
        {t("Home.Freelance.skills.and")}{" "}
        <UnderlinedText>{t("Home.Freelance.skills.mongoDB")}</UnderlinedText>,{" "}
        {t("Home.Freelance.skills.preferMERNStack")}{" "}
        <UnderlinedText>MERN</UnderlinedText>,{" "}
        {t("Home.Freelance.skills.andMore")}
      </div>
      <div className="mt-2">{t("Home.Freelance.lookingFor")}</div>
    </div>
  );
};

const Help = ({ text }) => {
  const [open, setOpen] = useState(false);
  const CloseButton = () => {
    return (
      <div className="absolute top-0 right-0 -mt-3 -mr-2">
        <CloseIcon
          style={{ fontSize: 30, color: "red" }}
          onClick={() => setOpen(false)}
        />
      </div>
    );
  };
  return (
    <button type="button" className="cursor-pointer">
      <HelpOutlineIcon onClick={() => setOpen(!open)} />
      {open && (
        <div className="z-40 absolute">
          <CloseButton />
          <div className="bg-white rounded-xl border-2 border-main text-main text-lg p-3 max-w-sm">
            {text}
          </div>
        </div>
      )}
    </button>
  );
};

const InternSearchingText = ({ t }) => {
  const isIntern = true;

  if (isIntern) {
    return (
      <div>
        {/* Actuellement etudiant a UCLA, je suis a la recherche d'un CDD de debut */}
        {/* septembre a fin fevrier pour la rentree 2024 en ile de France. */}
        <div className="mt-2">
          {t("Home.Internship.intro.university")}{" "}
          <UnderlinedText>{t("Home.Internship.intro.ucla")}</UnderlinedText> (
          {t("Home.Internship.intro.universityFullName")}),{" "}
          {t("Home.Internship.intro.sameTime")}{" "}
          <UnderlinedText>{t("Common.fullStack")}</UnderlinedText>{" "}
          {t("Home.Internship.intro.withExperience")}{" "}
          <UnderlinedText>
            {t("Home.Internship.intro.internship")}
          </UnderlinedText>
          .
        </div>
        <div className="mt-2">
          {t("Home.Internship.skills.webMobileDevelopment")}{" "}
          <UnderlinedText>{t("Home.Internship.skills.react")}</UnderlinedText>,{" "}
          <UnderlinedText>
            {t("Home.Internship.skills.tailwindCSS")}
          </UnderlinedText>
          ,{" "}
          <UnderlinedText>{t("Home.Internship.skills.nodeJS")}</UnderlinedText>,{" "}
          {t("Home.Internship.skills.and")}{" "}
          <UnderlinedText>{t("Home.Internship.skills.mongoDB")}</UnderlinedText>
          , {t("Home.Internship.skills.preferMERNStack")}{" "}
          <UnderlinedText>MERN</UnderlinedText>,{" "}
          {t("Home.Internship.skills.andMore")}
        </div>
        <div className="mt-2">{t("Home.Internship.lookingFor")}</div>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-2">
        {t("Home.Internship.intro.university")}{" "}
        <UnderlinedText>{t("Home.Internship.intro.ucla")}</UnderlinedText> (
        {t("Home.Internship.intro.universityFullName")}),{" "}
        {t("Home.Internship.intro.sameTime")}{" "}
        <UnderlinedText>{t("Common.fullStack")}</UnderlinedText>{" "}
        {t("Home.Internship.intro.withExperience")}{" "}
        <UnderlinedText>
          {t("Home.Internship.intro.freelanceMissions")}
        </UnderlinedText>
        .
      </div>
      <div className="mt-2">
        {t("Home.Internship.skills.webMobileDevelopment")}{" "}
        <UnderlinedText>{t("Home.Internship.skills.react")}</UnderlinedText>,{" "}
        <UnderlinedText>
          {t("Home.Internship.skills.tailwindCSS")}
        </UnderlinedText>
        , <UnderlinedText>{t("Home.Internship.skills.nodeJS")}</UnderlinedText>,{" "}
        {t("Home.Internship.skills.and")}{" "}
        <UnderlinedText>{t("Home.Internship.skills.mongoDB")}</UnderlinedText>,{" "}
        {t("Home.Internship.skills.preferMERNStack")}{" "}
        <UnderlinedText>MERN</UnderlinedText>,{" "}
        {t("Home.Internship.skills.andMore")}
      </div>
      <div className="mt-2">{t("Home.Internship.lookingFor")}</div>
    </div>
  );
  return (
    <div>
      <p className="inline">
        Passionné par le développement de jeux vidéo, de système automatisé
      </p>{" "}
      (
      <p className="inline underline underline-offset-2">
        <strong>C / C++</strong>
      </p>
      ) mais également du développement web (
      <p className="inline underline underline-offset-2">
        <strong>JS, TS, React, Node.js, MongoDB, TailwindCSS</strong>
      </p>
      ).
      <div className="mt-2">
        Actuellement en 3ème année je suis à la recherche d'un{" "}
        <strong>stage</strong> débutant en{" "}
        <strong className="underline underline-offset-2">avril</strong> à{" "}
        <strong className="underline underline-offset-2">fin août</strong>, mais
        je suis également disposé à{" "}
        <strong className="underline underline-offset-2">
          commencer immédiatement
        </strong>{" "}
        sous forme de contrat <strong>freelance</strong>. Ce contrat n'inclurait{" "}
        <strong>pas un TJM élevé</strong> et me permettra de{" "}
        <strong className="underline underline-offset-2">
          débuter le stage immédiatement.
        </strong>{" "}
        <Help text="La charge de travail imposée par mon école me permet d'être libre toute la semaine." />
      </div>
    </div>
  );
};

const AccessResume = ({ t }) => {
  const { seeking } = useContext(SeekingContext);
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  return (
    <div className="FromBottom flex items-center">
      <a
        className="FromRight p-3 border-2 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-main via-black to-secondary bg-size-200 hover:bg-right-bottom"
        href={`resume_${seeking}?language=${selectedLanguage}`}
        target="_blank"
        rel="noreferrer"
      >
        {t("Home.Freelance.accessResume")}
      </a>
    </div>
  );
};

const Home = () => {
  const { seeking, setSeeking, defaultSeek } = useContext(SeekingContext);
  const [textColor, setTextColor] = useState("61DBFB");
  const { t } = useTranslation();

  const GoAbout = () => {
    return (
      <button className="text-white">
        <Link
          to="about"
          smooth={true}
          duration={350}
          className={`group border-2 sm:px-6 px-2 py-3 my-2 flex items-center rounded-xl
          ${
            seeking === "internship"
              ? "hover:border-secondary"
              : "hover:border-main"
          }
          sm:hover:cursor-pointer sm:hover:shadow-[0px_0px_25px_0px]
          ${
            seeking === "internship"
              ? "sm:hover:shadow-secondary"
              : "sm:hover:shadow-main"
          }`}
        >
          {t("Home.Freelance.letsGo")}
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </Link>
      </button>
    );
  };

  const SwitchSeeking = () => {
    const handleClick = () => {
      if (seeking === "internship") {
        setSeeking("freelance");
      } else if (seeking === "freelance") {
        setSeeking("internship");
      }
    };

    return (
      <button
        className={`text-white group border-2 sm:px-6 px-2 py-3 my-2 flex items-center rounded-xl
          ${
            seeking === "internship"
              ? "hover:border-main"
              : "hover:border-secondary"
          }
          sm:hover:cursor-pointer sm:hover:shadow-[0px_0px_25px_0px]
          ${
            seeking === "internship"
              ? "sm:hover:shadow-main"
              : "sm:hover:shadow-secondary"
          }`}
        onClick={handleClick}
      >
        {seeking === "freelance"
          ? "Voir le profil Stagiaire"
          : "Voir le profil Freelance"}
      </button>
    );
  };

  return (
    <div name="home" className="w-full h-full sm:pt-24 pt-24">
      <div className="flex justify-end mr-4">
        <SwitchLanguage />
      </div>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className=" xs:pt-0 xs:mt-0">
          <div className="text-secondary font-bold text-xl FromTop">
            {t("Home.Freelance.greetings")}
          </div>
          <div className="FromLeft text-4xl sm:text-7xl font-bold text-white flex items-center">
            <strong className="mr-2">Wassini Bouzidi</strong>{" "}
            <img
              src={BruinGif}
              alt="UCLA_Bruin"
              className="sm:w-20 w-10 -mt-4 ml-2"
            />
          </div>
        </div>
        <div
          className={
            "text-4xl " +
            // (seeking === "freelance" ? "text-[#61DBFB]" : "text-[#006ab3]") +
            " sm:text-6xl font-bold"
          }
        >
          <div className="flex h-full mt-2">
            <div className="px-2 rounded-md FromFrontHard">
              <img
                src={animatedReact}
                alt="react"
                className="sm:w-20 w-10 sm:-mt-2 BackFlip"
              />
            </div>
            <strong className="FromRight text-xl sm:text-4xl lg:text-6xl">
              <div
                style={{
                  color: textColor,
                }}
              >
                <TypeAnimation
                  sequence={[
                    () => setTextColor("#61DBFB"),
                    t("Common.frontEndDeveloper"),
                    1000,
                    () => setTextColor("#68A063"),
                    t("Common.backEndDeveloper"),
                    1000,
                    () => setTextColor("#8A37DC"),
                    t("Common.fullStackDeveloper"),
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </strong>
            <div className="px-2 rounded-md FromFrontHard">
              <img
                src={animatedNode}
                alt="node"
                className="sm:w-20 w-10 sm:-mt-2 BackFlip"
              />
            </div>
          </div>
        </div>
        <div className="text-white py-4 max-w-[700px] mt-6">
          <div>
            {seeking === "freelance" ? (
              <FreelanceSearchingText t={t} />
            ) : (
              <InternSearchingText t={t} />
            )}
          </div>
          <div className="mt-2">{t("Home.Freelance.portfolioInfo")}</div>
          <div className="mt-10 font-semibold">
            {t("Home.Freelance.discoverMe")}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-white space-x-2">
            <GoAbout />
            <div className="sm:flex hidden">
              <AccessResume t={t} />
            </div>
            <div className="sm:flex hidden">
              {/* DISABLED FOR NOW */}
              {/* {defaultSeek !== "freelance" && <SwitchSeeking />} */}
            </div>
            <div className="sm:hidden flex">
              {/* DISABLED FOR NOW */}
              {/* {defaultSeek !== "freelance" && <SwitchSeeking />} */}
            </div>
          </div>
          <div className="sm:hidden flex">
            <AccessResume t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
