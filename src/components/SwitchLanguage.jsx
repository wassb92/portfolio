import React from "react";
import i18n from "i18next";

import FR_Flags from "assets/flags/france.svg.png";
import USA_Flags from "assets/flags/usa.svg.png";

const SwitchLanguage = () => {
  const selectedLanguage = i18n.language;

  return (
    <div className="z-[9999] sm:fixed w-full flex justify-end space-x-4 p-4">
      <button
        className={`rounded-lg border ${
          selectedLanguage === "fr"
            ? "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_10px_#fff,0_0_12px_#fff]"
            : ""
        } hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_10px_#fff,0_0_12px_#fff] transition-all duration-300`}
        onClick={() => i18n.changeLanguage("fr")}
      >
        <img
          src={FR_Flags}
          alt="FR_Flags"
          className="w-14 h-10 rounded-lg border border-white"
        />
      </button>
      <button
        className={`rounded-lg border ${
          selectedLanguage === "en"
            ? "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_10px_#fff,0_0_12px_#fff]"
            : ""
        } hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_10px_#fff,0_0_12px_#fff] transition-all duration-300`}
        onClick={() => i18n.changeLanguage("en")}
      >
        <img
          src={USA_Flags}
          alt="USA_Flags"
          className="w-14 h-10 rounded-lg border border-white"
        />
      </button>
    </div>
  );
};

export default SwitchLanguage;
