import "./Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Input from "../input/Input";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="header-body">
      <div className="grid-column-one">
        <div>
          <h4>{t("navBarMainTitle")}</h4>
        </div>
        <div>
          <select
            onClick={(e) => changeLanguage(`${e.target.value}`)}
            id="language"
            className="select-style"
          >
            <option value="">בחר שפה</option>
            <option value="he">עברית</option>
            <option value="en">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <label htmlFor="language" className="label-language">
            {t("navBarPickLanguage")}
          </label>
        </div>
      </div>
      <div className="grid-column-two">
        {t("navBarTitle")}
        <FontAwesomeIcon icon={faReact} style={{ fontSize: "25px" }} />
      </div>
      <div className="grid-column-three">
        <Input />
        <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
};

export default Header;
