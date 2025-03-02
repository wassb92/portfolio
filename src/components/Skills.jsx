import React, { useState, useEffect } from "react";
import HTML from "assets/langages/html.png";
import CSS from "assets/langages/css.png";
import JavaScript from "assets/langages/javascript.png";
import TypeScript from "assets/langages/typescript.png";
import Nextjs from "assets/langages/nextjs.png";
import Nuxtjs from "assets/langages/nuxtjs.png";
import tRCP from "assets/langages/tRCP.png";
import Vuejs from "assets/langages/vuejs.png";
import Flutter from "assets/langages/flutter.png";
import ReactImg from "assets/langages/react.png";
import Node from "assets/langages/node.png";
import Python from "assets/langages/python.png";
import Stripe from "assets/langages/stripe.png";
import OOP from "assets/langages/OOP.png";
import Cpp from "assets/langages/cpp.png";
import C from "assets/langages/c.png";
import C_CPP from "assets/langages/c_cpp.png";
import Bash from "assets/langages/bash.png";
import GitHub from "assets/langages/github.png";
import Tailwind from "assets/langages/tailwind.png";
import Mongo from "assets/langages/mongo.png";
import Linux from "assets/langages/linux.png";
import PostgreSQL from "assets/langages/postgresql.png";
import VSCode from "assets/langages/vscode.png";
import Netlify from "assets/langages/netlify.png";
import Heroku from "assets/langages/heroku.png";
import Docker from "assets/langages/docker.png";
import MUI from "assets/langages/MUI.png";
import NestJS from "assets/langages/nestjs.png";
import Golang from "assets/langages/golang.png";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import { useTranslation } from "react-i18next";

const Skill = (props) => {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative z-10 rounded-lg overflow-hidden shadow-lg shadow-secondary hover:scale-110 duration-300 hover:shadow-main group ${props.className} cursor-pointer`}
      onClick={() => props.link && window.open(props.link, "_blank")}
    >
      <p
        className="px-3 font-semibold rounded-t-lg text-white transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, hsl(${hue}, 100%, 40%), hsl(${
            (hue + 60) % 360
          }, 100%, 40%))`,
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 0",
          textShadow: `0 0 5px #4031D9, 0 0 10px #4031D9, 0 0 15px #4031D9`,
          transition: "background 0.5s ease-in-out, text-shadow 0.1s linear",
        }}
      >
        {props.name}
      </p>
      <img className="my-3 w-20 mx-auto" src={props.logo} alt={props.name} />
    </div>
  );
};
const SkillsList = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  return (
    <div className="w-full grid grid-cols-3 xs:grid-cols-5 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
      <Skill name="Next.js" logo={Nextjs} link="https://nextjs.org/" />
      <Skill name="Nuxt.js" logo={Nuxtjs} link="https://nuxt.com/" />
      <Skill
        name="React"
        logo={ReactImg}
        link={
          currentLanguage === "en"
            ? "https://react.dev/"
            : "https://fr.react.dev/"
        }
      />
      <Skill
        name="Node.js"
        logo={Node}
        link={`https://nodejs.org/${currentLanguage}/`}
      />
      <Skill name="NestJS" logo={NestJS} link="https://nestjs.com/" />
      <Skill name="tRCP" logo={tRCP} link="https://trpc.io/" />
      <Skill
        name="Vue.js"
        logo={Vuejs}
        link={
          currentLanguage === "fr"
            ? "https://fr.vuejs.org/"
            : "https://vuejs.org/"
        }
      />
      <Skill
        name="TailwindCSS"
        logo={Tailwind}
        link="https://tailwindcss.com/"
      />
      <Skill name="Flutter" logo={Flutter} link="https://flutter.dev/" />
      <Skill name="Golang" logo={Golang} link="https://go.dev/" />
      <Skill name="Python" logo={Python} link="https://www.python.org/" />
      <Skill
        name="MongoDB"
        logo={Mongo}
        link={
          currentLanguage === "fr"
            ? "https://www.mongodb.com/fr-fr"
            : "https://www.mongodb.com/"
        }
      />
      <Skill
        name="PostgreSQL"
        logo={PostgreSQL}
        link={`https://www.postgresql.${
          currentLanguage === "fr" ? "fr" : "org"
        }/`}
      />
      <Skill name="Docker" logo={Docker} link="https://www.docker.com/" />
      <Skill name="GitHub" logo={GitHub} link="https://github.com/" />
      <Skill
        name="C / C++"
        logo={C_CPP}
        link={`https://${currentLanguage}.cppreference.com/`}
      />
      <Skill
        name="Bash"
        logo={Bash}
        link={
          currentLanguage === "fr"
            ? "https://fr.wikipedia.org/wiki/Bourne-Again_shell"
            : "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
        }
      />
      <Skill
        name="Linux"
        logo={Linux}
        link={`https://${
          currentLanguage === "fr" ? "fr" : "en"
        }.wikipedia.org/wiki/Linux`}
      />
      <Skill
        name="Stripe"
        logo={Stripe}
        link={
          currentLanguage === "fr"
            ? "https://stripe.com/fr"
            : "https://stripe.com/"
        }
      />
      <Skill
        name="OOP"
        logo={OOP}
        link={
          currentLanguage === "fr"
            ? "https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet"
            : "https://en.wikipedia.org/wiki/Object-oriented_programming"
        }
      />
      <Skill
        name="VSCode"
        logo={VSCode}
        className="sm:hidden"
        link="https://code.visualstudio.com/"
      />
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div name="skills" className="w-full sm:h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <div className="text-4xl font-bold inline border-b-4 border-secondary">
            {t("Skills.skills")}
          </div>
        </div>
        <SkillsList />
        <div className="flex justify-between">
          <DownButtonRedirect to="work" />
          <UpButtonRedirect to="about" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
