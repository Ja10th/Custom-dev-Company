import React from "react";
import "./footer.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" footer__container">
      <div className="socials">
        <a href="#" className="footer__navbar-logo navbar-brand">
          Jami<span>Creation</span>
        </a>
        <div className="social">
          <a href="https://www.facebook.com" className="socials-iconss">
            <FaFacebookSquare className="socials-icon" />
          </a>
          <a href="https://www.twitter.com" className="socials-icons">
            <FaTwitterSquare className="socials-icon" />
          </a>
          <a href="https://www.whatsapp.com" className="socials-icons">
            <FaWhatsappSquare className="socials-icon" />
          </a>
        </div>
        <p>We provide the best services</p>
      </div>
    </footer>
  );
};

export default Footer;
