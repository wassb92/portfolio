import React, { useState, useContext } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Malt from "assets/malt.png";
import { SeekingContext } from "SeekingContext";
import { useTranslation } from "react-i18next";

const MenuBar = (props) => {
  return (
    <li className="text-xl font-bold cursor-pointer">
      <Link to={props.to} smooth={true} duration={350}>
        {props.name}
      </Link>
    </li>
  );
};

const MenuBarResponsive = (props) => {
  return (
    <li className="py-6 text-4xl cursor-pointer">
      <Link
        onClick={props.handleClick}
        to={props.to}
        smooth={true}
        duration={350}
      >
        {props.name}
      </Link>
    </li>
  );
};

const SocialBar = (props) => {
  return (
    <a
      className="flex justify-between items-center w-full text-white text-xl font-bold"
      href={props.redirect}
      target="_blank"
      rel="noreferrer"
    >
      {!props.shortSize ? (
        <li
          className={`rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${props.color}`}
        >
          {props.name} {props.icon}
        </li>
      ) : (
        <li className={`flex py-2 rounded-xl hover:scale-125 ${props.color}`}>
          {props.name} {props.icon}
        </li>
      )}
    </a>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { seeking } = useContext(SeekingContext);
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const FaMalt = () => {
    return (
      <img
        src={Malt}
        alt="Malt"
        className="w-8 h-8 rounded-full border-2 border-white min-w-[32px] min-h-[32px]"
      />
    );
  };

  return (
    <div className="z-50 fixed w-full h-[80px] flex justify-between md:justify-center items-center px-4 bg-[#0a192f] text-white">
      <br />
      <ul className="hidden md:flex FromFrontLight">
        <MenuBar to="home" name={t("Navbar.home")} />
        <MenuBar to="about" name={t("Navbar.about")} />
        <MenuBar to="skills" name={t("Navbar.skills")} />
        <MenuBar to="work" name={t("Navbar.work")} />
        <MenuBar to="contact" name={t("Navbar.contact")} />
      </ul>
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={32} /> : <FaTimes size={32} />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <MenuBarResponsive
          to="home"
          name={t("Navbar.home")}
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="about"
          name={t("Navbar.about")}
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="skills"
          name={t("Navbar.skills")}
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="work"
          name={t("Navbar.work")}
          handleClick={handleClick}
        />
        <MenuBarResponsive
          to="contact"
          name={t("Navbar.contact")}
          handleClick={handleClick}
        />
      </ul>
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <SocialBar
            name="LinkedIn"
            icon={<FaLinkedin size={30} />}
            redirect="https://www.linkedin.com/in/wassini-bouzidi/"
            color="bg-blue-600"
          />
          <SocialBar
            name="Malt"
            icon={<FaMalt />}
            redirect="https://www.malt.fr/profile/wassinibouzidi"
            color="bg-[#ff3b6d]"
          />
          <SocialBar
            name="GitHub"
            icon={<FaGithub size={30} />}
            redirect="https://github.com/wassb92"
            color="bg-[#333333]"
          />
          <SocialBar
            name="Email"
            icon={<HiOutlineMail size={30} />}
            redirect="mailto:wassini.bouzidi@epitech.eu"
            color="bg-[#00A4EF]"
          />
          <SocialBar
            name="CV"
            icon={<BsFillPersonLinesFill size={30} />}
            redirect={`resume_${seeking}?language=${selectedLanguage}`}
            color="bg-gray-700"
          />
        </ul>
      </div>
      <div className="flex z-999 md:hidden fixed space-x-1">
        <SocialBar
          icon={<FaLinkedin size={30} />}
          redirect="https://www.linkedin.com/in/wassini-bouzidi/"
          color="bg-blue-600"
          shortSize
        />
        <SocialBar
          icon={<FaMalt />}
          redirect="https://www.malt.fr/profile/wassinibouzidi"
          color="bg-[#ff3b6d]"
          shortSize
        />
        <SocialBar
          icon={<FaGithub size={30} />}
          redirect="https://github.com/wassb92"
          color="bg-[#333333]"
          shortSize
        />
        <SocialBar
          icon={<HiOutlineMail size={30} />}
          redirect="mailto:wassini.bouzidi@epitech.eu"
          color="bg-[#00A4EF]"
          shortSize
        />
        <SocialBar
          icon={<BsFillPersonLinesFill size={30} />}
          redirect={`resume_${seeking}?language=${selectedLanguage}`}
          color="bg-gray-700"
          shortSize
        />
      </div>
    </div>
  );
};

export default Navbar;
