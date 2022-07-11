import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Jami<span>Creation</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
            <div className="socials">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
