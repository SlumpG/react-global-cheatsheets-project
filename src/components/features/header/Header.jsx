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

const Header = () => {
  return (
    <div className="header-body">
      <div className="grid-column-one">
        <div>
          <h4>אתר הוקים ריאקט גלובלי</h4>
        </div>
        <div>
          <select id="language" className="select-style">
            <option value=""></option>
            <option value="Hebrew">עברית</option>
            <option value="English">אנגלית</option>
            <option value="Spanish">ספרדית</option>
          </select>
          <label htmlFor="language" className="label-language">
            בחר שפה
          </label>
        </div>
      </div>
      <div className="grid-column-two">
        המדריך המלא לג'וניור
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
