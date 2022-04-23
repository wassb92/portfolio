import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const MenuBar = (props) => {
  return (
    <li class="text-xl font-bold">
      <Link to={props.to} smooth={true} duration={350}>
        {props.name}
      </Link>
    </li>
  );
};

const MenuBarResponsive = (props) => {
  return (
    <li className="py-6 text-4xl">
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
      className="flex justify-between items-center w-full text-gray-300 text-xl font-bold"
      href={props.redirect}
      target="_blank"
      rel="noreferrer"
    >
      {props.name} {props.icon}
    </a>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <br />
      {/* menu */}
      <ul className="hidden md:flex">
        <MenuBar to="home" name="Accueil" />
        <MenuBar to="about" name="À propos" />
        <MenuBar to="skills" name="Compétences" />
        <MenuBar to="work" name="Expérience" />
        <MenuBar to="contact" name="Contacte" />
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <MenuBarResponsive to="home" name="Home" handleClick={handleClick} />
        <MenuBarResponsive to="about" name="About" handleClick={handleClick} />
        <MenuBarResponsive
          to="skills"
          name="Skills"
          handleClick={handleClick}
        />
        <MenuBarResponsive to="work" name="Work" handleClick={handleClick} />
        <MenuBarResponsive
          to="contact"
          name="Contact"
          handleClick={handleClick}
        />
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <SocialBar
              name="LinkedIn"
              icon={<FaLinkedin size={30} />}
              redirect="https://www.linkedin.com/in/wassini-bouzidi-ublo/"
            />
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <SocialBar
              name="Github"
              icon={<FaGithub size={30} />}
              redirect="https://github.com/wassb92"
            />
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <SocialBar
              name="Email"
              icon={<HiOutlineMail size={30} />}
              redirect="mailto:wassini.bouzidi@epitech.eu"
            />
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <SocialBar
              name="Resume"
              icon={<BsFillPersonLinesFill size={30} />}
              redirect="my_cv"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
