import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Card.Link href="https://www.linkedin.com/in/abdul-rafay-khan-8ab9b6259/">
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff" }} />{" "}
        </Card.Link>
        <Card.Link href="https://github.com/iamabdulrafay/">
          <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />{" "}
        </Card.Link>
      </div>
      <div className="footer-right">
        <p>created with ❤ by abdul rafay</p>
      </div>
    </div>
  );
};

export default Footer;
