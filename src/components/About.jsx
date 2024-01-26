import React from "react";
import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import GitHubCalendar from "react-github-calendar";
import { useTranslation } from "react-i18next";

const emojisMapping = ["💻", "📚", "🦉", "🛒", "🤝🏼"];

const About = () => {
  const { t } = useTranslation();

  return (
    <div name="about" className="w-full sm:h-screen text-white">
      <div className="flex flex-col justify-center  items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex gap-8">
          <div className="sm:text-right xs:mt-8 sm:mt-0 pb-6 pl-4 mt-24">
            <p className="xs:text-2xl sm:text-4xl font-bold inline border-b-4 border-secondary">
              {t("About.aboutMe")}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 px-4 space-y-10">
          <div className="sm:text-left text-3xl font-bold flex flex-col items-center">
            <div className=" bg-clip-text bg-gradient-to-br from-secondary to-main">
              <div className="reveal text-transparent bg-clip-text bg-gradient-to-b from-secondary to-main">
                {t("About.currentActivities", { returnObjects: true }).map(
                  (activity, index) => {
                    return (
                      <div key={index}>
                        <span className="text-white">
                          {emojisMapping[index]}
                        </span>{" "}
                        {activity}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center reveal">
            <GitHubCalendar username="wassb92" />
          </div>
          <div className="flex justify-between">
            <DownButtonRedirect to="skills" />
            <UpButtonRedirect to="home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
