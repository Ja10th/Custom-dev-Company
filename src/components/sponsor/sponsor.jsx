import React from "react";
import "./sponsor.css";
import A2 from "../../assets/no2.png";
import A3 from "../../assets/no3.jpg";
import A4 from "../../assets/no4.png";
import A5 from "../../assets/no5.png";
import A6 from "../../assets/no6.png";
import A7 from "../../assets/no7.png";
import A8 from "../../assets/no8.png";

const Sponsor = () => {
  return (
    <section>
      <div className="container sponsor__container">
        <div className="second__image">
          <img src={A6} alt="image" className="sponsor__images"/>
        </div>
        <div className="second__image">
          <img src={A2} alt="image" className="sponsor__images" />
        </div>
        <div className="second__image">
          <img src={A3} alt="image" className="sponsor__images"/>
        </div>
        <div className="second__image">
          <img src={A4} alt="image" className="sponsor__images"/>
        </div>
        <div className="second__image">
          <img src={A5} alt="image" className="sponsor__images"/>
        </div>
        <div className="second__image">
          <img src={A7} alt="image" className="sponsor__images"/>
        </div>
        <div>
          <img src={A8} alt="image" className="sponsor__images"/>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
