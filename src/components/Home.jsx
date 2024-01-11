import React, { useState, useContext } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import animatedReact from "assets/animatedReact.gif";
import animatedNode from "assets/animatedNode.gif";
import { SeekingContext } from "SeekingContext";
import rakuten from "assets/projets/rakuten.png";
import BruinGif from "assets/bruin.gif";

import { TypeAnimation } from "react-type-animation";

import resumeInternPdf from "assets/resume/intern.pdf";
import resumeFreelancePdf from "assets/resume/freelance.pdf";

const UnderlinedText = ({ children, className = "" }) => {
  return (
    <strong className="inline underline underline-offset-2">
      <span className={className}>{children}</span>
    </strong>
  );
};

const FreelanceSearchingText = () => {
  {
    /* Text without underline and without div mt-2 */
  }
  {
    /* Actuellement étudiant à UCLA, je suis en parallèle développeur Full-Stack
      avec une solide expérience le domaine du développement web/mobile. Je
      recherche de nouvelles missions freelance. Si vous avez besoin d'un
      professionnel expérimenté pour vos projets, n'hésitez pas à me contacter.
      Mon adaptabilité et mon engagement à répondre aux besoins spécifiques du
      projet font de moi un choix idéal.
    </> */
  }

  // Text with underline and with div mt-2
  return (
    <div>
      <div className="mt-2">
        Actuellement étudiant à <UnderlinedText>UCLA</UnderlinedText>{" "}
        (University of California, Los Angeles), je suis en parallèle
        développeur <UnderlinedText>Full-Stack</UnderlinedText> avec une solide
        expérience le domaine du développement web/mobile. Je suis à la
        recherche de nouvelles{" "}
        <UnderlinedText>missions freelance</UnderlinedText>.
      </div>
      <div className="mt-2">
        Mes compétences en développement web/mobile incluent{" "}
        <UnderlinedText>React</UnderlinedText>,{" "}
        <UnderlinedText>TailwindCSS</UnderlinedText>,{" "}
        <UnderlinedText>Node.js</UnderlinedText>, et{" "}
        <UnderlinedText>MongoDB</UnderlinedText>, avec une préférence pour la
        stack <UnderlinedText>MERN</UnderlinedText>, et bien d'autres.
      </div>
      <div className="mt-2">
        Si vous cherchez un développeur web/mobile fiable et compétent pour vos
        projets, n'hésitez pas à me contacter. Je suis flexible sur les stacks
        techniques et les modalités de travail, et je serai heureux de discuter
        avec vous pour trouver la solution la plus adaptée à vos besoins.
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="mt-2">
  //       Actuellement développeur Front-End chez{" "}
  //       <img src={"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJvcmgwdWZveTBraDUyN2s5cnlhOTF2OG9wcWg1Ymh3czFkeXZ3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1Rhz7GhtPDSFwO4Otd/giphy.gif"} alt="Rakuten" className="h-5 inline" />
  //       plein, je suis également disponible pour des missions freelance en
  //       dehors de mes heures de travail.
  //     </div>
  //     <div className="mt-2">
  //       Mes compétences en développement web incluent{" "}
  //       <UnderlinedText>React</UnderlinedText>,{" "}
  //       <UnderlinedText>TailwindCSS</UnderlinedText>,{" "}
  //       <UnderlinedText>Node.js</UnderlinedText>, et{" "}
  //       <UnderlinedText>MongoDB</UnderlinedText>, avec une préférence pour la
  //       stack <UnderlinedText>MERN</UnderlinedText>.
  //     </div>
  //     <div className="mt-2">
  //       Si vous cherchez un développeur web fiable et compétent pour vos
  //       projets, n'hésitez pas à me contacter. Je suis flexible sur les stacks
  //       techniques et les modalités de travail, et je serai heureux de discuter
  //       avec vous pour trouver la solution la plus adaptée à vos besoins.
  //     </div>
  //   </div>
  // );
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

const InternSearchingText = () => {
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

const AccessResume = () => {
  const { seeking } = useContext(SeekingContext);

  return (
    <div className="FromBottom flex items-center">
      <a
        className="FromRight p-3 border-2 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-main via-black to-secondary bg-size-200 hover:bg-right-bottom"
        href={`resume_${seeking}`}
        target="_blank"
        rel="noreferrer"
      >
        Accéder directement à mon CV
      </a>
    </div>
  );
};

const Home = () => {
  const { seeking, setSeeking, defaultSeek } = useContext(SeekingContext);
  const [textColor, setTextColor] = useState("61DBFB");

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
          C'est parti !
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
    <div name="home" className="w-full h-full sm:pt-40 pt-28">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className=" xs:pt-0 xs:mt-0">
          <div className="text-secondary font-bold text-xl FromTop">
            Salutations !
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
          {seeking === "freelance" ? (
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
                      "Développeur Front-End",
                      1000,
                      () => setTextColor("#68A063"),
                      "Développeur Back-End",
                      1000,
                      () => setTextColor("#8A37DC"),
                      "Développeur Full-Stack",
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
          ) : (
            <strong className="FromRight flex h-full mb-10">
              Développeur chez Epitech Paris
            </strong>
          )}
        </div>
        <div className="text-white py-4 max-w-[700px] mt-6">
          <div>
            {seeking === "freelance" ? (
              <FreelanceSearchingText />
            ) : (
              <InternSearchingText />
            )}
          </div>
          <div className="mt-2">
            Ce portfolio a été codé en React, TailwindCSS et CSS par moi-même.
          </div>
          <div className="mt-10 font-semibold">Prêt à me découvrir ?</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-white space-x-2">
            <GoAbout />
            <div className="sm:flex hidden">
              <AccessResume />
            </div>
            <div className="sm:flex hidden">
              {defaultSeek !== "freelance" && <SwitchSeeking />}
            </div>
            <div className="sm:hidden flex">
              {defaultSeek !== "freelance" && <SwitchSeeking />}
            </div>
          </div>
          <div className="sm:hidden flex">
            <AccessResume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
