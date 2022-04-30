import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";

const EndIntern = () => {
  const [open, setOpen] = useState(false);

  const Help = () => {
    return (
      <div class="absolute">
        <button class="absolute top-0 right-0 -mt-3 -mr-2">
          <CloseIcon
            style={{ fontSize: 30, color: "red" }}
            onClick={() => setOpen(false)}
          />
        </button>
        <div class="bg-white rounded-xl border-2 border-main text-main text-lg p-3">
          La date de fin dépend de la date de rentrée de ma 4ème année.
        </div>
      </div>
    );
  };

  return (
    <button type="button" class="cursor-pointer">
      <HelpOutlineIcon onClick={() => setOpen(!open)} />
      {open && <Help />}
    </button>
  );
};

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div class="pt-24">
          <div class="text-secondary font-bold text-xl">Salutations !</div>
          <div class="text-4xl sm:text-7xl font-bold text-white ">
            Wassini Bouzidi
          </div>
        </div>
        <div class="text-4xl sm:text-6xl font-bold text-gray-400">
          Développeur chez Epitech Paris
        </div>
        <div class="text-white py-4 max-w-[700px] mt-6">
          <p class="inline">
            Passionné par le développement de jeux vidéo, de système automatisé
          </p>{" "}
          <p class="inline underline underline-offset-2">(C / C++)</p> mais
          également du développement web{" "}
          <p class="inline underline underline-offset-2">
            (JS, TS, React, Node, TailwindCSS)
          </p>
          .
          <div class="mt-2">
            Pour ma 3ème année je suis à la recherche d'un part-time de deux
            jours par semaine d'octobre à avril, suivi d'un stage d'avril aux
            environ d'août <EndIntern /> afin d'appronfondir mes connaissances,
            d'évoluer dans un domaine qui me plait et de pourvoir satisfaire un
            besoin.
          </div>
          <div class="mt-10 font-semibold">Prêt à me découvrir ?</div>
        </div>
        <div class="text-white grid sm:grid-cols-2 gap-4 items-center">
          <Link to="about" smooth={true} duration={350}>
            <button class="group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary rounded-xl">
              C'est parti !
              <span class="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight class="ml-3 " />
              </span>
            </button>
          </Link>
          <div>
            <a
              class="p-3 border-2 font-semibold text-white rounded-xl transition-all duration-500 bg-gradient-to-br from-main via-black to-secondary bg-size-200 hover:bg-right-bottom"
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
