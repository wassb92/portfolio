import React, { useState } from "react";
import ublo from "assets/projets/ublo.png";
import arcade from "assets/projets/arcade.png";
import malloc from "assets/projets/malloc.png";
import shell from "assets/projets/42sh.png";
import rpg from "assets/projets/rpg.png";
import teams from "assets/projets/teams.png";
import runner from "assets/projets/runner.png";
import defender from "assets/projets/defender.png";
import hunter from "assets/projets/hunter.png";
import database from "assets/projets/database.png";
import cash_register from "assets/projets/cash_register.png";
import EpiSolidaire from "assets/projets/EpiSolidaire.png";
import zappy from "assets/projets/zappy.png";
import bomberman from "assets/projets/bomberman.png";
import webac from "assets/projets/webac.jpg";
import web from "assets/projets/web.jpg";
import ionis_stm from "assets/projets/ionis-stm.png";
import react from "assets/projets/react.png";
import fratelli from "assets/projets/fratelli.png";
import matchstick from "assets/projets/matchstick.png";
import cat from "assets/projets/cat.png";
import popeye from "assets/projets/popeye.png";
import area from "assets/projets/area.png";
import ERP from "assets/projets/ERP.png";
import OWL from "assets/projets/OWL.png";
import rtype from "assets/projets/rtype.png";
import rakuten from "assets/projets/rakuten.png";
import freelance from "assets/projets/freelance.png";
import evogue from "assets/projets/evogue.jpeg";
import allocine from "assets/projets/allocine.png";
import promeetup from "assets/projets/pro-meetup.png";

import DownButtonRedirect from "./DownButtonRedirect";
import UpButtonRedirect from "./UpButtonRedirect";
import "./ScrollBar.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTranslation } from "react-i18next";

const getNbrProjet = (projet) => {
  if (!projet?.props?.children?.length) return "";
  return ` (${projet.props.children.length})`;
};

const Projet = (props) => {
  const t = props?.t;

  return (
    <div className="">
      <div className="flex items-center justify-center w-full pt-4 h-full object-center">
        <img
          className="rounded-xl bg-cover bg-center object-contain"
          src={props.logo}
          alt={props.name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="text-white font-bold text-2xl mb-8">
          {props.job && <div className="xs:text-3xl my-6">{props.job}</div>}
          <div className={"text-xl" + (props?.job && " text-secondary")}>
            {props.name}
          </div>
          {props.url && (
            <div className="text-base font-normal">
              {t("Work.link")} :{" "}
              <a
                className="underline underline-offset-4 text-[#6be0dc]"
                href={props.url}
                target="_blank"
                rel="noreferrer"
              >
                {props.url}
              </a>
            </div>
          )}
          <div className="text-base font-normal">
            {t("Work.realisedWith")}{" "}
            {props.nmemb === 1
              ? t("Work.solo")
              : t("Work.group", { nmemb: props.nmemb })}
          </div>
          {props.inComing ? (
            <div className="text-[#23DC3D] flex justify-end text-md">
              {t("Work.inComing")}
            </div>
          ) : props.done ? (
            <div className="text-secondary flex justify-end text-md">
              {t("Work.done")}
            </div>
          ) : (
            <div className="text-main flex justify-end text-md">
              {t("Work.inProgress")}
            </div>
          )}
        </div>

        {props.description.map((text, i) => (
          <div key={i} className="text-white text-base">
            {text}
          </div>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.techUsed.map((tech, i) => (
          <span
            key={i}
            className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-secondary mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Professional = ({ t }) => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name={t("Work.professional.rakuten.name")}
        logo={rakuten}
        description={t("Work.professional.rakuten.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.rakuten.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={9}
        job={t("Common.frontEndDeveloper")}
        t={t}
      />
      <Projet
        name={t("Work.professional.ublo.name")}
        logo={ublo}
        description={t("Work.professional.ublo.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.ublo.techUsed", { returnObjects: true })}
        done={true}
        nmemb={5}
        job={t("Common.fullStackDeveloper")}
        t={t}
      />
      <Projet
        name={t("Work.professional.evogue.name")}
        logo={evogue}
        description={t("Work.professional.evogue.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.evogue.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={1}
        job={t("Common.freelanceTeacher")}
        t={t}
      />
      <Projet
        name={t("Work.professional.proMeetup.name")}
        logo={freelance}
        description={t("Work.professional.proMeetup.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.proMeetup.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={1}
        job={t("Common.freelanceFullStackDeveloper")}
        t={t}
      />
      <Projet
        name={t("Work.professional.nuvoleviaggi.name")}
        logo={freelance}
        description={t("Work.professional.nuvoleviaggi.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.nuvoleviaggi.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={2}
        job={t("Common.freelanceFullStackDeveloper")}
        t={t}
      />
      <Projet
        name={t("Work.professional.fratelliB.name")}
        logo={freelance}
        description={t("Work.professional.fratelliB.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.fratelliB.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={1}
        job={t("Common.freelanceFullStackDeveloper")}
        t={t}
      />
      <Projet
        name={t("Work.professional.ionis.name")}
        logo={ionis_stm}
        description={t("Work.professional.ionis.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.ionis.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={5}
        job={t("Common.teacherAssistant")}
        t={t}
      />
      <Projet
        name={t("Work.professional.webAcademie.name")}
        logo={webac}
        description={t("Work.professional.webAcademie.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.professional.webAcademie.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={2}
        job={t("Common.PHPTeacher")}
        t={t}
      />
    </div>
  );
};

const Game = ({ t }) => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name={t("Work.game.rType.name")}
        logo={rtype}
        description={t("Work.game.rType.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.rType.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={5}
        t={t}
      />
      <Projet
        name={t("Work.game.zappy.name")}
        logo={zappy}
        description={t("Work.game.zappy.description", { returnObjects: true })}
        techUsed={t("Work.game.zappy.techUsed", { returnObjects: true })}
        done={true}
        nmemb={6}
        t={t}
      />
      <Projet
        name={t("Work.game.indieStudio.name")}
        logo={bomberman}
        description={t("Work.game.indieStudio.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.indieStudio.techUsed", { returnObjects: true })}
        done={true}
        nmemb={6}
        t={t}
      />
      <Projet
        name={t("Work.game.arcade.name")}
        logo={arcade}
        description={t("Work.game.arcade.description", { returnObjects: true })}
        techUsed={t("Work.game.arcade.techUsed", { returnObjects: true })}
        done={true}
        nmemb={3}
        t={t}
      />
      <Projet
        name={t("Work.game.myRpg.name")}
        logo={rpg}
        description={t("Work.game.myRpg.description", { returnObjects: true })}
        techUsed={t("Work.game.myRpg.techUsed", { returnObjects: true })}
        done={true}
        nmemb={4}
        t={t}
      />
      <Projet
        name={t("Work.game.myDefender.name")}
        logo={defender}
        description={t("Work.game.myDefender.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.myDefender.techUsed", { returnObjects: true })}
        done={true}
        nmemb={2}
        t={t}
      />
      <Projet
        name={t("Work.game.myRunner.name")}
        logo={runner}
        description={t("Work.game.myRunner.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.myRunner.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.game.myHunter.name")}
        logo={hunter}
        description={t("Work.game.myHunter.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.myHunter.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.game.mySokoban.name")}
        logo="https://upload.wikimedia.org/wikipedia/commons/4/4b/Sokoban_ani.gif"
        description={t("Work.game.mySokoban.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.mySokoban.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.game.matchstick.name")}
        logo={matchstick}
        description={t("Work.game.matchstick.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.game.matchstick.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
    </div>
  );
};

const Web = ({ t }) => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name={t("Work.web.epiSolidaire.name")}
        logo={EpiSolidaire}
        description={t("Work.web.epiSolidaire.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.epiSolidaire.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        url="https://www.episolidaire.com/"
        t={t}
      />
      <Projet
        name={t("Work.web.area.name")}
        logo={area}
        description={t("Work.web.area.description", { returnObjects: true })}
        techUsed={t("Work.web.area.techUsed", { returnObjects: true })}
        done={true}
        nmemb={5}
        t={t}
      />
      <Projet
        name={t("Work.web.proMeetup.name")}
        logo={promeetup}
        description={t("Work.web.proMeetup.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.proMeetup.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.web.myAllocine.name")}
        logo={allocine}
        description={t("Work.web.myAllocine.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.myAllocine.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        url="https://myallocine-neomovie.netlify.app/"
        t={t}
      />
      <Projet
        name={t("Work.web.rTypeWebsite.name")}
        logo={rtype}
        description={t("Work.web.rTypeWebsite.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.rTypeWebsite.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={1}
        url="https://rtype.netlify.app/"
        t={t}
      />
      <Projet
        name={t("Work.web.owl.name")}
        logo={OWL}
        description={t("Work.web.owl.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.owl.techUsed", {
          returnObjects: true,
        })}
        done={false}
        nmemb={9}
        t={t}
      />
      <Projet
        name={t("Work.web.erp.name")}
        logo={ERP}
        description={t("Work.web.erp.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.erp.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={2}
        url="https://nuvoleviaggi.netlify.app/"
        t={t}
      />
      <Projet
        name={t("Work.web.portfolio.name")}
        logo={react}
        description={t("Work.web.portfolio.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.portfolio.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        url="https://www.wassini-bouzidi.com/"
        t={t}
      />
      <Projet
        name={t("Work.web.popeye.name")}
        logo={popeye}
        description={t("Work.web.popeye.description", { returnObjects: true })}
        techUsed={t("Work.web.popeye.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.web.fratelliPizza.name")}
        logo={fratelli}
        description={t("Work.web.fratelliPizza.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.web.fratelliPizza.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
    </div>
  );
};

const Unix = ({ t }) => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name={t("Work.unix.42sh.name")}
        logo={shell}
        description={t("Work.unix.42sh.description", { returnObjects: true })}
        techUsed={t("Work.unix.42sh.techUsed", { returnObjects: true })}
        done={true}
        nmemb={5}
        t={t}
      />
      <Projet
        name={t("Work.unix.my_malloc.name")}
        logo={malloc}
        description={t("Work.unix.my_malloc.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.unix.my_malloc.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.unix.my_web.name")}
        logo={web}
        description={t("Work.unix.my_web.description", { returnObjects: true })}
        techUsed={t("Work.unix.my_web.techUsed", { returnObjects: true })}
        done={true}
        nmemb={2}
        t={t}
      />
      <Projet
        name={t("Work.unix.my_printf.name")}
        logo={
          "https://developers.redhat.com/sites/default/files/styles/share/public/ST-c_1x%20%282%29.png?itok=wFoDINrX"
        }
        description={t("Work.unix.my_printf.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.unix.my_printf.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.unix.my_ls.name")}
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlKkshcRnYO7n-NP9HxOUAeC6hqsbzU-cPSX-Is8ajyAV0ASOT3GBuT8bd69GSL5XqR4&usqp=CAU"
        description={t("Work.unix.my_ls.description", { returnObjects: true })}
        techUsed={t("Work.unix.my_ls.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.unix.my_cat.name")}
        logo={cat}
        description={t("Work.unix.my_cat.description", { returnObjects: true })}
        techUsed={t("Work.unix.my_cat.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
    </div>
  );
};

const Else = ({ t }) => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name={t("Work.other.my_teams.name")}
        logo={teams}
        description={t("Work.other.my_teams.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.other.my_teams.techUsed", { returnObjects: true })}
        done={true}
        nmemb={3}
        t={t}
      />
      <Projet
        name={t("Work.other.my_db.name")}
        logo={database}
        description={t("Work.other.my_db.description", { returnObjects: true })}
        techUsed={t("Work.other.my_db.techUsed", { returnObjects: true })}
        done={false}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.other.BSQ.name")}
        logo="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Maximum-size-square-sub-matrix-with-all-1s.png"
        description={t("Work.other.BSQ.description", { returnObjects: true })}
        techUsed={t("Work.other.BSQ.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.other.MiniLibC.name")}
        logo="https://assets.exercism.io/tracks/x86-64-assembly-hex-turquoise.png"
        description={t("Work.other.MiniLibC.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.other.MiniLibC.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.other.bdsh.name")}
        logo="https://cameronnokes.com/images/json-bash.png"
        description={t("Work.other.bdsh.description", { returnObjects: true })}
        techUsed={t("Work.other.bdsh.techUsed", { returnObjects: true })}
        done={true}
        nmemb={1}
        t={t}
      />
      <Projet
        name={t("Work.other.cashRegister.name")}
        logo={cash_register}
        description={t("Work.other.cashRegister.description", {
          returnObjects: true,
        })}
        techUsed={t("Work.other.cashRegister.techUsed", {
          returnObjects: true,
        })}
        done={true}
        nmemb={2}
        t={t}
      />
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const WorkTabs = ({ t }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="overflow-y-auto h-3/4 border-b-4 rounded-b border-main">
      <Box sx={{ width: "100%" }}>
        <div className="bg-white rounded-t-lg sticky top-0 z-10 -mt-6">
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            variant={
              useMediaQuery("(max-width: 600px)") ? "scrollable" : "fullWidth"
            }
            textColor="secondary"
            indicatorColor="secondary"
            ScrollButtonComponent={(props) => (
              <div className="m-4 hover:cursor-pointer">
                {props.direction === "left"
                  ? value !== 0 && (
                      <div onClick={() => setValue(value - 1)}>
                        <ArrowBackIosIcon {...props} color="secondary" />
                      </div>
                    )
                  : value !== 4 && (
                      <div onClick={() => setValue(value + 1)}>
                        <ArrowForwardIosIcon {...props} color="secondary" />
                      </div>
                    )}
              </div>
            )}
            TabIndicatorProps={
              useMediaQuery("(max-width: 600px)")
                ? { style: { backgroundColor: "#8A37DC", marginBottom: "4px" } }
                : {
                    style: {
                      backgroundColor: "#8A37DC",
                      width: "10%",
                      marginLeft: "5%",
                      marginBottom: "2px",
                    },
                  }
            }
          >
            <Tab
              label={`${t("Work.tabsHeader.professional")}${getNbrProjet(
                Professional({ t })
              )}`}
              {...a11yProps(0)}
            />
            <Tab
              label={`${t("Work.tabsHeader.game")}${getNbrProjet(Game({ t }))}`}
              {...a11yProps(1)}
            />
            <Tab
              label={`${t("Work.tabsHeader.web")}${getNbrProjet(Web({ t }))}`}
              {...a11yProps(2)}
            />
            <Tab
              label={`${t("Work.tabsHeader.unix")}${getNbrProjet(Unix({ t }))}`}
              {...a11yProps(3)}
            />
            <Tab
              label={`${t("Work.tabsHeader.other")}${getNbrProjet(
                Else({ t })
              )}`}
              {...a11yProps(4)}
            />
          </Tabs>
        </div>
        <div className="border-main border-r-2 border-l-2">
          <TabPanel value={value} index={0}>
            <Professional t={t} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Game t={t} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Web t={t} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Unix t={t} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Else t={t} />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
};

const Work = () => {
  const { t } = useTranslation();

  return (
    <div name="work" className="w-full h-screen text-white pt-0 sm:pt-10">
      <div className="max-w-[1000px] mx-auto mt-7 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-secondary">
            {t("Work.work")}
          </p>
        </div>
        <WorkTabs t={t} />
        <div className="flex p-4 justify-between">
          <DownButtonRedirect to="contact" />
          <UpButtonRedirect to="skills" />
        </div>
      </div>
    </div>
  );
};

export default Work;
