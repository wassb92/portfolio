import React from "react";

const Footer = () => {
  return (
    <div className="z-50 relative w-full h-[60px] bg-gradient-to-r from-transparent via-black to-transparent bottom-0 text-white">
      <div className="flex justify-center items-center h-full text-xs sm:text-base space-x-1">
        <div>Designed and Developed by</div>{" "}
        <div className="text-bermuda">Wassini</div>. All rights reserved ©{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
