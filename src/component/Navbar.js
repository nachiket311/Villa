import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/Style/Nav.css";

export default function Navbar() {
  let location = useLocation();

  const [openHemburger, setOpenHemburger] = useState("");
  const [closeHemburger, setCloseHemburger] = useState("activeHemburger");

  const handleHemburger = () => {
    openHemburger === ""
      ? setOpenHemburger("activeHemburger") || setCloseHemburger("")
      : setOpenHemburger("") || setCloseHemburger("activeHemburger");
  };

  return (
    <div className="Nav-main center">
      <div className="Nav-sub center">
        <h1>
          Vi<span>lla</span>
        </h1>
      </div>
      <div className={`Navlink ${closeHemburger
      } center`}>
        <ul className="center">
          <li className="ls-stl">
            <div className="navbtn navitm center">
              <Link
                className={`link-list ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </div>
          </li>

          <li className="ls-stl">
            <div className="navbtn navitm center">
              <Link
                className={`link-list ${
                  location.pathname === "/Property" ? "active" : ""
                }`}
                to="/Property"
              >
                Property
              </Link>
            </div>
          </li>

          <li className="ls-stl">
            <div className="navbtn navitm center">
              <Link
                className={`link-list ${
                  location.pathname === "/PropertyDetails" ? "active" : ""
                }`}
                to="/PropertyDetails"
              >
                Property Details
              </Link>
            </div>
          </li>

          <li className="ls-stl">
            <div className="navbtn navitm center">
              <Link
                className={`link-list ${
                  location.pathname === "/Contact" ? "active" : ""
                }`}
                to="/Contact"
              >
                Contact Us
              </Link>
            </div>
          </li>

          <div className="schedual navitm center">
            <span className="center">
              <i className="fa-solid fa-plane"></i>
            </span>
            <div className="tour"> Schedual a Tour </div>
          </div>
        </ul>
      </div>
      <div className="hemburger d-none" onClick={handleHemburger}>
        <i className={`fa-solid fa-bars ${openHemburger}`}></i>
        <i className={`fa-solid fa-xmark ${closeHemburger} `}></i>
      </div>
    </div>
  );
}
