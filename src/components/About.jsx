import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";

const UnderlinedText = ({ text }) => {
  return <div className="inline underline underline-offset-2">{text}</div>;
};

const About = () => {
  return (
    <div name="about" className="w-full sm:h-screen text-white">
      <div className="flex flex-col justify-center  items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right xs:mt-8 sm:mt-0 pb-6 pl-4 mt-24">
            <p className="xs:text-2xl sm:text-4xl font-bold inline border-b-4 border-secondary">
              À propos de moi
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-3xl font-bold">
            <div className=" bg-clip-text bg-gradient-to-br from-secondary to-main">
              <div className="reveal text-transparent bg-clip-text bg-gradient-to-br from-secondary to-main">
                <div>• Freelance Front-End</div>
                <div>• Président d'EpiSolidaire</div>
                <div>• Lead Dev chez EpiSolidaire</div>
                <div>• Développeur chez Epitech</div>
                <div>• Assistant pédagogique chez Ionis-STM</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="reveal">
              <UnderlinedText text="Passionné" />,{" "}
              <UnderlinedText text="autodidacte" /> et{" "}
              <UnderlinedText text="soucieux de bien faire" />. J'ai décidé de
              poursuivre mes études supérieures dans la programmation et
              l'expertise technologique. C'est pour cela que j'ai décidé de
              rejoindre Epitech.
            </div>
            <div className="reveal">
              Ma <UnderlinedText text="persévérance" /> et ma{" "}
              <UnderlinedText text="rigueur" /> m'ont aujourd'hui amené à
              pouvoir développer mes projets en toute{" "}
              <UnderlinedText text="autonomie" /> et à pouvoir{" "}
              <UnderlinedText text="apprendre à apprendre" />.
            </div>
            <div className="reveal">
              Le <UnderlinedText text="partage" /> et la{" "}
              <UnderlinedText text="solidarité" /> sont des principes qui me
              tiennent à coeur, c'est pour cela que j'ai décidé de devenir
              président d'une association de solidarité qui se nomme{" "}
              <UnderlinedText text="EpiSolidaire" />.
            </div>
            <div className="reveal">
              L'association dispose également d'une{" "}
              <UnderlinedText text="équipe de développeurs" /> dont je suis le
              lead. Voici notre site :{" "}
              <a
                className="underline underline-offset-4 text-[#6be0dc]"
                href="https://episolidaire.com"
                target="_blank"
                rel="noreferrer"
              >
                EpiSolidaire
              </a>
              .
            </div>
          </div>
          <DownButtonRedirect to="skills" />
          <UpButtonRedirect to="home" />
        </div>
      </div>
    </div>
  );
};

export default About;
