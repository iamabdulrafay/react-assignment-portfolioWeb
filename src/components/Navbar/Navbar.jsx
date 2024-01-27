import React, { useState } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faUserGroup,
  faBriefcase,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  const [icons, setIcons] = useState("white");

  function change() {
    if (icons === "white") {
      setIcons("orange");
    } else {
      setIcons("white");
    }
  }
  return (
    <>
      {/* for desktop  */}
      <nav>
        <Link to="/">
          <h1 className="heading">A</h1>{" "}
        </Link>
        <div className="icons">
          <NavLink to="/" className="link">
            <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
          </NavLink>
          <NavLink to="/contact" className="link">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />{" "}
          </NavLink>
          <NavLink to="/about" className="link">
            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff" }} />{" "}
          </NavLink>
          <NavLink to="/project" className="link">
            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#ffffff" }} />{" "}
          </NavLink>
          <NavLink to="/blog" className="link">
            <FontAwesomeIcon icon={faBlog} style={{ color: "#ffffff" }} />{" "}
          </NavLink>
        </div>
      </nav>

      <header>
        <div
          className={`toggle-btn ${isNavVisible ? "onclick" : ""}`}
          onClick={handleToggle}>
          <span></span>
        </div>
      </header>
      {/* for phone responsive  */}
      <div className={`nav-container ${isNavVisible ? "visible" : ""}`}>
        <div className={`nav-bar ${isNavVisible ? "visible" : ""}`}>
          {/* Your navigation elements go here */}
          <ul>
            <div className="icons">
              <Link to="/">
                <h1 className="heading">A</h1>{" "}
              </Link>
              <NavLink to="/" className="link">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
              </NavLink>
              <NavLink to="/contact" className="link">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />{" "}
              </NavLink>
              <NavLink to="/about" className="link">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ color: "#ffffff" }}
                />{" "}
              </NavLink>
              <NavLink to="/project" className="link">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#ffffff" }}
                />{" "}
              </NavLink>
              <NavLink to="/blog" className="link">
                <FontAwesomeIcon icon={faBlog} style={{ color: "#ffffff" }} />{" "}
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
