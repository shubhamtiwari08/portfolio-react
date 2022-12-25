import "./Heroimgstyle.css";
import React from "react";
import { Link } from "react-router-dom";
import homeintro from "../assets/heroo.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="home-img" src={homeintro} alt="homeintro" />
        <div className="contents">
          <p>Shubham Tiwari</p>
          <h1>Web Developer</h1>
          <div>
            <Link to="/Project" className="btn ">
              Project
            </Link>
            <Link to="/Contact" className="btn btn-white ">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
