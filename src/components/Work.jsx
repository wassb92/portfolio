import React, { useState } from "react";
import ublo from "../assets/projets/ublo.png";
import arcade from "../assets/projets/arcade.png";
import malloc from "../assets/projets/malloc.png";
import shell from "../assets/projets/42sh.png";
import rpg from "../assets/projets/rpg.png";
import teams from "../assets/projets/teams.png";
import runner from "../assets/projets/runner.png";
import defender from "../assets/projets/defender.png";
import hunter from "../assets/projets/hunter.png";
import database from "../assets/projets/database.png";
import cash_register from "../assets/projets/cash_register.png";
import EpiSolidaire from "../assets/projets/EpiSolidaire.png";
import zappy from "../assets/projets/zappy.png";
import bomberman from "../assets/projets/bomberman.png";
import webac from "../assets/projets/webac.jpg";
import web from "../assets/projets/web.jpg";
import ionis_stm from "../assets/projets/ionis-stm.png";
import react from "../assets/projets/react.png";
import fratelli from "../assets/projets/fratelli.png";
import matchstick from "../assets/projets/matchstick.png";
import cat from "../assets/projets/cat.png";
import popeye from "../assets/projets/popeye.png";
import area from "../assets/projets/area.png";
import ERP from "../assets/projets/ERP.png";

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

const getNbrProjet = (projet) => {
  if (!projet?.props?.children?.length) return "";
  return ` (${projet.props.children.length})`;
};

const Projet = (props) => {
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
          <div>{props.name}</div>
          {props.url && (
            <div className="text-base font-normal">
              Lien :{" "}
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
            Réalisé en{" "}
            {props.nmemb === 1
              ? "solo"
              : "groupe de " + props.nmemb + " membres"}
          </div>
          {props.done ? (
            <div className="text-secondary flex justify-end text-md">
              Terminé
            </div>
          ) : (
            <div className="text-main flex justify-end text-md">
              En cours...
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

const Professional = () => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name="Ublo"
        logo={ublo}
        description={[
          "Stage de 6 mois en tant que développer Full-Stack chez Ublo.immo.",
          "Ublo vise à simplifier la gestion locative par l'intermédiaire d'un logiciel de gestion immobilière intuitif et efficace.",
          "J'ai été chargé de développer dans un premier temps un formulaire d'état des lieux d'entrée et de sortie devant être effectué sur tablette.",
          "Et dans second temps, de travailler sur le site web d'Ublo pour les clients.",
        ]}
        techUsed={[
          "TypeScript",
          "JavaScript",
          "React",
          "NodeJS",
          "React-Admin",
          "PostgreSQL",
          "MongoDB",
          "TailwindCSS",
          "Styled-Components",
          "Material-UI",
          "Postman",
          "Docker",
          "GitHub",
          "Nest",
          "DBeaver",
          "Figma",
          "Notion",
          "Méthode agile",
          "Clean architecture",
        ]}
        done={true}
        nmemb={5}
      />
      <Projet
        name="Teaching & Coaching"
        description={[
          "Stage de 6 mois en tant qu'assistant pédagogique chez IONIS School of Technology and Management.",
          "Je suis en charge de l'accompagnement des étudiants, l'animation pédagogique au travers notamment de l'encadrement d'activités et la participation à la vie de l'école.",
          "Cela signifie que je suis entre autres chargé d'accompagner les étudiants dans leur scolarité et de les aider à trouver des solutions aux problèmes qu'ils rencontrent.",
          "Je suis également chargé de faire passer des suivis et des soutenances de projets.",
          "J'exerce principalement pour les formations des Web@cadémie de 1ère et 2ème année, mais aussi pour la formation Coding Club.",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "NodeJS",
          "Socket.IO",
          "React Native",
          "PHP",
          "HTML",
          "CSS",
          "TailwindCSS",
          "Styled-Components",
          "MongoDB",
          "MySQL",
          "Postman",
        ]}
        done={false}
        logo={ionis_stm}
        nmemb={5}
      />
      <Projet
        name="Professeur de PHP"
        logo={webac}
        description={[
          "Professeur / Assistant lors d'une piscine de PHP pour la Web@cademie.",
          "Durant 3 semaines, j'ai accompagné des futurs développeurs dans l'apprentissage de la programmation en commençant par le langage PHP tout en gérant mes projets en parallèle.",
        ]}
        techUsed={["PHP", "GitHub"]}
        done={true}
        nmemb={2}
      />
    </div>
  );
};

const Game = () => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name="Zappy"
        logo={zappy}
        description={[
          "Le but de ce projet est de créer un jeu en réseau.",
          "Plusieurs équipes s'affrontent sur une carte de tuiles contenant des ressources.",
          "L'équipe gagnante est celle avec 6 joueurs qui a atteint l'élévation maximale.",
          "Les joueurs sont contrôlés par une intelligence artificielle.",
        ]}
        techUsed={[
          "C",
          "C++",
          "Python",
          "Raylib",
          "Makefile",
          "GitHub",
          "AI",
          "Programmation réseau",
        ]}
        done={true}
        nmemb={6}
      />
      <Projet
        name="Indie Studio"
        logo={bomberman}
        description={[
          "L'objectif de ce projet est de mettre en œuvre un jeu vidéo 3D multiplateforme avec des outils du monde réel",
          "Le jeu en question est un bomberman en 3D.",
        ]}
        techUsed={["C++", "Raylib", "cmake", "GitHub"]}
        done={true}
        nmemb={6}
      />
      <Projet
        name="Arcade"
        logo={arcade}
        description={[
          "L'objectif de ce projet était de crée une plateforme de jeu, avec un seul core qui peut charger dynamiquement plusieurs bibliothèques graphiques différentes et avec au moins deux jeux.",
          "Les librairies graphiques choisies ont été la SFML, la Ncurses et la SDL2.",
          "Les jeux choisies ont été Nibbler et Pacman.",
          "Le joueur peut choisir son pseudo, selectionnez son jeu, dynamiquement changer de librairie graphique et a un score enregistré dans une base de données.",
        ]}
        techUsed={[
          "C++",
          "SFML",
          "NCurses",
          "SDL2",
          "Makefile",
          "GitHub",
          "Shared librairies",
        ]}
        done={true}
        nmemb={3}
      />
      <Projet
        name="my_rpg"
        logo={rpg}
        description={[
          "Comme son nom l'indique, le but de ce projet était de crée un Role Playing Game (RPG), dans lequel il y a une histoire, des quêtes, des niveaux, des combats, des donjons, un inventaire, des niveaux de compétences et énormément d'autre chose qui caractérise ce qu'est un RPG.",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "HTML",
          "CSS",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={4}
      />
      <Projet
        name="my_defender"
        logo={defender}
        description={[
          "Un mini League Of Legends ça vous dit ?",
          "Le but ce projet était de crée un jeu de type Tower Defense, avec une base à défendre, des ennemis qui apparraissent et qui vont attaquer cette dernière.",
          "Le joueur a pour but de défendre sa base, et pour cela il doit poser des tourelles qui peuvent détruire les ennemis, chaque tourelle a une spécification particulière (Dégâts, portée, impact sur les caractéristiques des ennemis, etc...)",
          "Afin de poser une tourelle il faut avoir une certaine somme d'argent, les tourelles peuvent également être améliorées.",
          "Tous les graphismes et sons ont était tiré du jeu officiel de League Of Legends.",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "HTML",
          "CSS",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={2}
      />
      <Projet
        name="my_runner"
        logo={runner}
        description={[
          "Vous connaissez sûrement le T-Rex Game ? Ce jeu que Google peut vous proposez lorsque vous n'avez pas de connexion.",
          "J'en ai recrée un, avec des graphismes différent mais le but reste le même, c'est un runner.",
          "Le but étant de sauter avec son personnage dans une immense carte qui défile, il doit éviter les obstacles et les ennemis.",
          "À la fin de cette carte il y a une ligne d'arrivée, cela signifie que vous avez gagnez la partie !",
          "À ce moment là, votre score est sauvegardé et vous pouvez recommencer une partie à partir de votre ancien score, c'est de cette manière que vous pourrez toujours faire en sorte d'avoir le plus grand score !",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_hunter"
        logo={hunter}
        description={[
          "Piou Piou ! + Among us = ?",
          "Vous l'avez dans le mille ! Mon my_hunter.",
          "Des ennemis arrivent de la droite et de la gauche, au milieu de la carte il y a une base que les ennemis ne doivent surtout pas franchir, sinon vous perdez des points de vie",
          "Pour cela, vous êtes équiper d'une arme qui vous permet de tuer les ennemis avant qu'ils n'arrivent à destination !",
        ]}
        techUsed={[
          "C",
          "CSFML",
          "Makefile",
          "GitHub",
          "Photoshop",
          "FL Studio",
        ]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_sokoban"
        logo="https://upload.wikimedia.org/wikipedia/commons/4/4b/Sokoban_ani.gif"
        description={[
          "Le but de ce projet était de crée un jeu de type Sokoban, dans lequel il y a un personnage qui doit pousser des caisses sur des emplacements spécifiques.",
          "Le personnage ne peut pas pousser plusieurs caisses en même temps, il ne peut pas pousser une caisse sur une autre caisse, il ne peut pas pousser une caisse sur un mur.",
          "Le personnage peut se déplacer dans les quatre directions, recommencer une partie, quitter la partie, revenir au menu principal, etc...",
        ]}
        techUsed={["C", "Ncurses", "Makefile", "GitHub", "FL Studio"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="matchstick"
        logo={matchstick}
        description={[
          "Le but de ce projet était de crée un jeu de type Nim, dans lequel il y a un nombre d'allumettes, le joueur et l'ordinateur.",
          "Le joueur et l'ordinateur vont tour à tour retirer des allumettes, le but étant de retirer la dernière allumette.",
          "Le joueur peut retirer 1, 2 ou 3 allumettes à chaque tour, l'ordinateur va retirer le nombre d'allumettes qui lui permettra de gagner.",
        ]}
        techUsed={["C", "AI", "Makefile", "GitHub"]}
        done={true}
        nmemb={1}
      />
    </div>
  );
};

const Web = () => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name="EpiSolidaire"
        logo={EpiSolidaire}
        description={[
          "Site pour promouvoir l'association, pouvoir se présenter en ligne, reçevoir des dons, voir les évènements à venir et passé, nous contactez, accéder à son espace membre et par conséquent accéder à son dashboard",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "NodeJS",
          "Express",
          "MongoDB",
          "TailwindCSS",
          "CSS",
          "Postman",
          "EmailJS",
          "SendGrid",
          "Paypal SDK API",
          "Authentification",
          "GitHub",
          "Netlify",
          "Heroku",
        ]}
        done={true}
        nmemb={1}
        url="https://episolidaire.com"
      />
      <Projet
        name="AREA"
        logo={area}
        description={[
          "AREA est une plateforme de gestion de tâches automatisées. (AREA = Action REAction)",
          "Comme IFTTT ou Zapier, AREA permet de créer des tâches automatisées.",
          "AREA a un serveur, un client web et un client mobile.",
          "L'utilisateur peut se connecter grâce à notre authentification, mais il peut également se connecter grâce à son compte Google, Discord, Microsoft ou bien Facebook grâce à OAuth2.",
          "Une fois connecté, l'utilisateur peut créer des tâches automatisées, pour cela il doit sélectionner une action et une réaction parmi une liste de services.",
          "Il peut par exemple créer une tâche qui lui permet de recevoir un mail quand il créé un nouvel event sur son calendrier Google.",
          "Une fois l'AREA créée, elle est sauvegardée dans la base de données et est disponible dans la liste des tâches de l'utilisateur.",
          "L'utilisateur peut également supprimer une tâche.",
          "AREA est principalement centré sur le serveur, ce qui signifie que tout ce qui est disponible sur le client web l'est également sur le client mobile.",
          "Le deployement de l'application se fait via Docker.",
        ]}
        techUsed={[
          "JavaScript",
          "NodeJS",
          "Express",
          "ReactJS",
          "Flutter",
          "TailwindCSS",
          "CSS",
          "Material-UI",
          "MongoDB",
          "Docker",
          "Postman",
          "OAuth2",
          "Google API",
          "Discord API",
          "Microsoft API",
          "Facebook API",
          "SendGrid",
          "Méthode agile",
          "Authentification",
          "GitHub",
          "Notion",
        ]}
        done={false}
        nmemb={5}
      />
      <Projet
        name="ERP"
        logo={ERP}
        description={[
          "Création d'une plateforme web qui permet de gérer un gestionnaire de commandes et de factures.",
          "La plateforme contient un dashboard, une liste des commandes, des relevés bancaires, une liste des services, une liste des formulaires de remboursement, une page pour créer une commande, une page pour créer un compte bancaire, une page pour créer une réclamation et la possibilité d'exporter les données en format Excel.",
          "Pour pouvoir utiliser la plateforme, il faut être authentifié(e).",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "NodeJS",
          "Express",
          "MongoDB",
          "TailwindCSS",
          "CSS",
          "XLSX",
          "Postman",
          "Authentification",
          "GitHub",
          "Netlify",
          "Heroku",
        ]}
        done={true}
        nmemb={2}
        url="https://nuvoleviaggi.netlify.app/"
      />
      <Projet
        name="Portfolio"
        logo={react}
        description={[
          "Mon expérience, mes compétences, ma personnalité; tout ça ne peut pas être résumé en un CV, c'est pourquoi j'ai crée ce portfolio.",
          "Vous pouvez y retrouver mes projets, mes compétences, mes expériences, mon association, me contacter et bien plus encore !",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "TailwindCSS",
          "CSS",
          "GitHub",
          "Netlify",
        ]}
        done={true}
        nmemb={1}
        url="https://www.wassini-bouzidi.com/"
      />
      <Projet
        name="Popeye"
        logo={popeye}
        description={[
          "Popeye est un projet qui consiste à conteneriser une application web.",
          "Pour cela, il fallait utilisé Docker, un outil qui permet de créer des conteneurs, c'est-à-dire des environnements virtuels.",
          "L'application était consituté d'un poll en Flask, d'une queue en Redis, d'un worker en Java, d'une base de données PostgreSQL et d'un result en NodeJS.",
          "Il fallait donc conteneriser notre application web, et pouvoir la déployer en local.",
        ]}
        techUsed={["Docker", "DevOps", "GitHub"]}
        done={true}
        nmemb={1}
      />

      <Projet
        name="Fratelli Pizza"
        logo={fratelli}
        description={[
          "Site pour promouvoir la pizzeria, pouvoir se présenter en ligne, voir les évènements actuellement, contacter la pizzeria, payer en avance une commande utilisant Paypal.",
          "L'administrateur a un dashboard pour gérer les commandes et les produits.",
        ]}
        techUsed={[
          "JavaScript",
          "React",
          "NodeJS",
          "Next.js",
          "Redux",
          "MongoDB",
          "CSS",
          "Postman",
          "Paypal SDK API",
          "Cloudinary",
          "GitHub",
        ]}
        done={true}
        nmemb={1}
      />
    </div>
  );
};

const Unix = () => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name="42sh"
        logo={shell}
        description={["Crée un Shell Unix qui a pour model de référence TCSH."]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={5}
      />
      <Projet
        name="my_malloc"
        logo={malloc}
        description={[
          "Recoder les fonctions malloc, realloc, calloc, reallocarray et free.",
        ]}
        techUsed={["C", "Makefile", "GitHub", "sbrk", "memory management"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_web"
        logo={web}
        description={[
          "Faire un dual boot entre Debian et Arch Linux sur une machine virtuel sans l'utilisation d'interface graphique pour assembler les partitions.",
        ]}
        techUsed={[
          "Administration système",
          "Commandes Unix",
          "Oracle VM VirtualBox",
          "LVM",
        ]}
        done={true}
        nmemb={2}
      />
      <Projet
        name="my_printf"
        logo={
          "https://developers.redhat.com/sites/default/files/styles/share/public/ST-c_1x%20%282%29.png?itok=wFoDINrX"
        }
        description={["Recoder la fonction printf."]}
        techUsed={["C", "Makefile", "va_arg", "GitHub"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_ls"
        logo={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlKkshcRnYO7n-NP9HxOUAeC6hqsbzU-cPSX-Is8ajyAV0ASOT3GBuT8bd69GSL5XqR4&usqp=CAU"
        }
        description={["Recoder la commande ls."]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="my_cat"
        logo={cat}
        description={["Recoder la commande cat."]}
        techUsed={["C", "GitHub"]}
        done={true}
        nmemb={1}
      />
    </div>
  );
};

const Else = () => {
  return (
    <div className="space-y-20 divide-y divide-solid divide-secondary">
      <Projet
        name="my_teams"
        logo={teams}
        description={["Recoder teams"]}
        techUsed={["C", "Makefile", "GitHub", "Programmation réseau", "CLI"]}
        done={true}
        nmemb={3}
      />
      <Projet
        name="my_db"
        logo={database}
        description={[
          "Création d'une database avec une table unique implémentée en liste chaînée.",
          "La table est composée des champs suivants :",
          "id (= Idendifiant unique par colonne)",
          "firstname (= Prénom)",
          "lastname (= Nom)",
          "pseudonyme (= Pseudonyme)",
          "birthday (= Date de naissance)",
          "city (= Ville)",
          "phone (= Numéro de téléphone)",
          "email (= Email)",
          "password (= Mot de passe)",
          "registeredAt (= Date d'enregistrement)",
        ]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={false}
        nmemb={1}
      />
      <Projet
        name="BSQ"
        logo="https://camo.githubusercontent.com/3901ac95415ef9326702194b8b817827a7f7175dcb701e82d3a38a587c5ddfaa/687474703a2f2f692e696d6775722e636f6d2f436955733269332e706e67"
        description={[
          "Trouver le plus grand carré dans une grille de caractères.",
          "La grille est composée de caractères '.' et de caractères 'o'.",
          "Le programme doit afficher la grille avec le premier plus grand carré rempli de 'x'.",
        ]}
        techUsed={["C", "Makefile", "GitHub"]}
        done={true}
        nmemb={1}
      />

      <Projet
        name="MiniLibC"
        logo="https://assets.exercism.io/tracks/x86-64-assembly-hex-turquoise.png"
        description={[
          "Recoder les fonctions de la librairie C standard en assembleur x86_64.",
          "Les fonctions étaients :",
          "• strlen",
          "• strchr",
          "• strrchr",
          "• memset",
          "• memcpy",
          "• strcmp",
          "• memmove",
          "• strncmp",
          "• strcasecmp",
          "• strstr",
          "• strpbrk",
          "• strcspn",
        ]}
        techUsed={[
          "Assembly",
          "Shared librairies",
          "x86_64",
          "Makefile",
          "GitHub",
        ]}
        done={true}
        nmemb={1}
      />
      <Projet
        name="bdsh"
        logo="https://cameronnokes.com/images/json-bash.png"
        description={[
          "Écrire un script shell qui permet de gérer une base de données dans un fichier json.",
          "Vous devez créer des tables, insérer-mettre à jour-supprimer des données, exécuter des requêtes, ...",
          "La ligne de commande doit être capable de pouvoir créer une database, une table, insérer des données, supprimer des données, sélectionner des données, ...",
          "La command-line jq était interdite.",
        ]}
        techUsed={["Bash", "JSON", "GitHub"]}
        done={true}
        nmemb={1}
      />

      <Projet
        name="Cash register"
        logo={cash_register}
        description={[
          "Coder une caisse enregistreuse pouvant enregistrer des articles, les stockers dans une base de données, obtenir des tickets de caisse, crée de nouveaux caissiers qui sont également enregistrés dans une base de données etc...",
        ]}
        techUsed={["Python", "Tkinter", "GitHub"]}
        done={true}
        nmemb={2}
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

const WorkTabs = () => {
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
              <div className="m-4">
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
              label={`Professionnel${getNbrProjet(Professional())}`}
              {...a11yProps(0)}
            />
            <Tab label={`Game${getNbrProjet(Game())}`} {...a11yProps(1)} />
            <Tab label={`Web${getNbrProjet(Web())}`} {...a11yProps(2)} />
            <Tab label={`Unix${getNbrProjet(Unix())}`} {...a11yProps(3)} />
            <Tab label={`Autre${getNbrProjet(Else())}`} {...a11yProps(4)} />
          </Tabs>
        </div>
        <div className="border-main border-r-2 border-l-2">
          <TabPanel value={value} index={0}>
            <Professional />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Game />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Web />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Unix />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Else />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
};

const Work = () => {
  return (
    <div name="work" className="w-full h-screen text-white pt-0 sm:pt-10">
      <div className="max-w-[1000px] mx-auto mt-7 p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-secondary">
            Expériences
          </p>
        </div>
        <WorkTabs />
        <div className="flex p-4 justify-between">
          <DownButtonRedirect to="contact" />
          <UpButtonRedirect to="skills" />
        </div>
      </div>
    </div>
  );
};

export default Work;
