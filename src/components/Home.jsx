import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import animatedReact from "../assets/animatedReact.gif";

const UnderlinedText = ({ children }) => {
  return (
    <strong className="inline underline underline-offset-2">{children}</strong>
  );
};

const FreelanceSearchingText = () => {
  return (
    <div>
      <div className="mt-2">
        Actuellement développeur freelance spécialisé dans le{" "}
        <UnderlinedText>développement web Front-End</UnderlinedText>, et plus
        particulièrement sur du <UnderlinedText>React</UnderlinedText>,{" "}
        <UnderlinedText>TailwindCSS</UnderlinedText> et je suis à la recherche
        de nouveaux projets.
      </div>
      <div className="mt-2">
        J'ai également des compétences en{" "}
        <UnderlinedText>Node.js</UnderlinedText>,{" "}
        <UnderlinedText>MongoDB</UnderlinedText>, ma stack préférée étant{" "}
        <UnderlinedText>MERN</UnderlinedText>.
      </div>
      <div className="mt-2">
        Je suis disponible à hauteur de{" "}
        <UnderlinedText>3 jours par semaines</UnderlinedText>, avec une
        préfèrence pour le distanciel.
      </div>
      <div className="mt-2">
        Je reste notamment{" "}
        <UnderlinedText>ouvert à la discussion</UnderlinedText> concernant les
        stacks techniques, le distanciel, les jours de travail, etc.
      </div>
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
          <div className="bg-white rounded-xl border-2 border-main text-main text-lg p-3">
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
        <strong>stage</strong> de début <strong>avril</strong> à fin{" "}
        <strong>août</strong> afin d'appronfondir mes connaissances, d'évoluer
        dans un domaine qui me plait et de pouvoir satisfaire un besoin.{" "}
        <Help text="Je suis également disponible pour de la freelance après cette date" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div name="home" className="w-full">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="pt-16 mt-20">
          <div className="text-secondary font-bold text-xl FromTop">
            Salutations !
          </div>
          <div className="FromLeft text-4xl sm:text-7xl font-bold text-white ">
            <strong>Wassini Bouzidi</strong>
          </div>
        </div>
        <div className="text-4xl text-[#61DBFB] sm:text-6xl font-bold atext-gray-400">
          {global.current === "freelance" ? (
            <div className="flex">
              <strong className="sm:hidden flex">Freelance Frontend</strong>
              <strong className="sm:flex hidden">Freelance Front-End</strong>
              <div className="px-2 rounded-md">
                <img
                  src={animatedReact}
                  alt="react"
                  className="sm:w-20 w-10 sm:-mt-2"
                />
              </div>
            </div>
          ) : (
            <strong>Développeur chez Epitech Paris</strong>
          )}
        </div>
        <div className="text-white py-4 max-w-[700px] mt-6">
          <div>
            {global.current === "freelance" ? (
              <FreelanceSearchingText />
            ) : (
              <InternSearchingText />
            )}
          </div>
          <div className="mt-2">
            Ce portfolio a était coder en React, TailwindCSS et CSS par
            moi-même.
          </div>
          <div className="mt-10 font-semibold">Prêt à me découvrir ?</div>
        </div>
        <div className="text-white grid sm:grid-cols-2 gap-4 items-center">
          <Link to="about" smooth={true} duration={350}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
              C'est parti !
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
          <div className="FromBottom">
            <a
              className="FromRight p-3 border-2 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-main via-black to-secondary bg-size-200 hover:bg-right-bottom"
              href="resume"
              target="_blank"
              rel="noreferrer"
            >
              Accéder directement à mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
