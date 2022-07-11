import React from "react";
import Meg from "../../assets/years.png";
import "./second.css";

const Second = () => {
  return (
    <section>
      <div className="container second__container">
        <div className="second__images">
          <img src={Meg} alt="Images" className="second__image"/>
        </div>
        <div className="second__details">
          <h2>We bring your ideas to life</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            dolore, nulla porro dignissimos maiores sequi deleniti explicabo
            suscipit, aliquam expedita quasi consequuntur asperiores animi quam
            quisquam earum, sapiente commodi impedit mollitia! Animi veniam
            provident repudiandae quidem reiciendis. Inventore, ad ipsa!
          </p>
          <button className="btn btn-primary btn-second">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Second;
