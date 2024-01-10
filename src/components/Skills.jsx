import React, { useContext } from "react";
import HTML from "assets/langages/html.png";
import CSS from "assets/langages/css.png";
import JavaScript from "assets/langages/javascript.png";
import TypeScript from "assets/langages/typescript.png";
import ReactImg from "assets/langages/react.png";
import Node from "assets/langages/node.png";
import Cpp from "assets/langages/cpp.png";
import C from "assets/langages/c.png";
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

import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import { SeekingContext } from "SeekingContext";

const Skill = (props) => {
  return (
    <div className="-z-1 reveal shadow-lg shadow-secondary hover:scale-110 duration-300 hover:shadow-main">
      <img
        className={"my-4 w-20 mx-auto " + props.className}
        src={props.logo}
        alt={props.name}
      />
      <div className="my-4 text-white font-semibold">{props.name}</div>
    </div>
  );
};

const InternSkills = () => {
  return (
    <div className="w-full grid grid-cols-3 xs:grid-cols-5 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
      <Skill name="C" logo={C} />
      <Skill name="C++" logo={Cpp} />
      <Skill name="Bash" logo={Bash} />
      <Skill name="Linux" logo={Linux} />
      <Skill name="GitHub" logo={GitHub} />
      <Skill name="TypeScript" logo={TypeScript} />
      <Skill name="JavaScript" logo={JavaScript} />
      <Skill name="React" logo={ReactImg} />
      <Skill name="Node.js" logo={Node} />
      <Skill name="TailwindCSS" logo={Tailwind} />
      <Skill name="PostgreSQL" logo={PostgreSQL} />
      <Skill name="MongoDB" logo={Mongo} />
      <Skill name="HTML" logo={HTML} />
      <Skill name="CSS" logo={CSS} />
      <Skill name="Visual Studio Code" logo={VSCode} />
    </div>
  );
};

const FreelanceSkills = () => {
  return (
    <div className="w-full grid grid-cols-3 xs:grid-cols-5 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
      <Skill name="React" logo={ReactImg} />
      <Skill name="Node.js" logo={Node} />
      <Skill name="TailwindCSS" logo={Tailwind} />
      <Skill name="MongoDB" logo={Mongo} />
      <Skill name="Docker" logo={Docker} />
      <Skill name="TypeScript" logo={TypeScript} className="mt-8" />
      <Skill name="JavaScript" logo={JavaScript} className="mt-8" />
      <Skill name="GitHub" logo={GitHub} className="mt-8" />
      <Skill name="Netlify" logo={Netlify} className="mt-8" />
      <Skill name="Heroku" logo={Heroku} />
      <Skill name="Linux" logo={Linux} />
      <Skill name="Bash" logo={Bash} className="mt-5" />
      <Skill name="MUI" logo={MUI} className="mt-8" />
      <Skill name="HTML" logo={HTML} className="mt-8" />
      <Skill name="CSS" logo={CSS} className="mt-8" />
    </div>
  );
};

const MergedSkills = () => {
  return (
    <div className="w-full grid grid-cols-3 xs:grid-cols-5 sm:grid-cols-5 gap-4 md:gap-6 text-center py-8">
      <Skill name="TypeScript" logo={TypeScript} />
      <Skill name="JavaScript" logo={JavaScript} />
      <Skill name="React" logo={ReactImg} />
      <Skill name="Node.js" logo={Node} />
      <Skill name="TailwindCSS" logo={Tailwind} />
      <Skill name="MongoDB" logo={Mongo} />
      <Skill name="PostgreSQL" logo={PostgreSQL} />
      <Skill name="MUI" logo={MUI} />
      <Skill name="Docker" logo={Docker} />
      <Skill name="GitHub" logo={GitHub} />
      <Skill name="C" logo={C} />
      <Skill name="C++" logo={Cpp} />
      <Skill name="Bash" logo={Bash} />
      <Skill name="Linux" logo={Linux} />
      <Skill name="Visual Studio Code" logo={VSCode} className="mt-8" />
    </div>
  );
};

const Skills = () => {
  const { seeking } = useContext(SeekingContext);

  return (
    <div name="skills" className="w-full sm:h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <div className="text-4xl font-bold inline border-b-4 border-secondary">
            Compétences
          </div>
        </div>
        {seeking === "freelance" ? <FreelanceSkills /> : <MergedSkills />}
        <div className="flex justify-between">
          <DownButtonRedirect to="work" />
          <UpButtonRedirect to="about" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
