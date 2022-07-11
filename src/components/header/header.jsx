import React from "react";
import "./header.css";
import Nav from "./nav";
import Hero from "./hero";


const Header = () => {
  return (
    <header className="#">
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
