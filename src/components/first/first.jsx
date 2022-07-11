import React from "react";
import { SiAbstract } from "react-icons/si";
import { BsSubtract } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import "./first.css";

const First = () => {
  return (
    <section id="about">
      <h5>Who we are</h5>
      <h3>About Us</h3>
      <div className="container about__container">
        <article className="about__details">
          <a href="#">
            <MdPhotoSizeSelectActual className="about__details-icon" />
          </a>
          <h4>Cross-Industry-expertise</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quam, in optio ducimus dolore fugiat! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Qui, autem Lorem ipsum dolor sit amet.
          </p>
        </article>
        <article className="about__details">
          <a href="#">
            <BsSubtract className="about__details-icon" />
          </a>
          <h4>Deep expertise & leadership</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quam, in optio ducimus dolore fugiat! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Qui, autem Lorem ipsum dolor sit amet.
          </p>
        </article>
        <article className="about__details">
          <a href="#">
            <SiAbstract className="about__details-icon" />
          </a>
          <h4>Dedicated IT solution</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            quam, in optio ducimus dolore fugiat! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Qui, autem Lorem ipsum dolor sit amet.
          </p>
        </article>
      </div>
    </section>
  );
};

export default First;
