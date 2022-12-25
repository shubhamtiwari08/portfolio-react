import "./Footstyle.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location align">
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <p>D munniyappa layout kalyan nagar, Bengaluru.</p>
          </div>
          <div className="Phone align">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <h4>8113887758</h4>
          </div>
          <div className="Mail align">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <h4>st1173076@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className="about">
            <h4>About me</h4>
            <p>
              I am a web developer,
              <span> previously i was in in science field (Non -IT).</span>
            </p>
            <p>Now switched into a much more creative field.</p>
          </div>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1 rem" }}
            />
            <FaWhatsapp
              size={30}
              style={{ color: "#fff", marginRight: "1 rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1 rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
