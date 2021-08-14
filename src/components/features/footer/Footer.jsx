import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="copyright">YoniB - SlumpG כל הזכויות שמורות 2021 ©</div>
      <div>
        <h6>צרו איתנו קשר!</h6>
      </div>
      <div className="social-contact">
        <h6>
          <a
            href="https://github.com/YoniB1995"
            className="social-link"
            target="_blank"
          >
            SlumpG
          </a>
          <span>|</span>
          <a
            href="https://github.com/YoniB1995"
            className="social-link"
            target="_blank"
          >
            YoniB
          </a>
        </h6>
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="social-contact">
        <h6>
          <a
            href="https://github.com/SlumpG"
            className="social-link"
            target="_blank"
          >
            SlumpG
          </a>
          <span>|</span>
          <a
            href="https://github.com/YoniB1995"
            className="social-link"
            target="_blank"
          >
            YoniB
          </a>
        </h6>
        <div>
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
