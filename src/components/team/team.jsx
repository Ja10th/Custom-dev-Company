import React from 'react'
import './team.css'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Team = () => {
  return (
    <section>
        <h5>Talk with professionals</h5>
        <h3>Our Team Leaders </h3>
        <div className="container team__container">
            <article className="team__details">
                <img src={"https://img.freepik.com/free-photo/close-up-shot-charismatic-friendly-looking-happy-nice-dark-skinned-girl-with-pierced-nose-perfect-smile-standing-delighted-cute-white-wall-sweater-enjoying-family-holiday-dinner_176420-35297.jpg?w=2000"} alt="" />
                <h6>Cindy Zolper</h6>
                <p>CEO</p>
                <ul>
                    <a href=""><BsFacebook/></a>
                    <a href=""><BsTwitter/></a>
                    <a href=""><BsGithub/></a>
                </ul>
            </article>
            <article className="team__details">
                <img src={"https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"} alt="" />
                <h6>Zoe Maxwell</h6>
                <p>CSO</p>
                <ul>
                    <a href=""><BsFacebook/></a>
                    <a href=""><BsTwitter/></a>
                    <a href=""><BsGithub/></a>
                </ul>
            </article>
            <article className="team__details">
                <img src={"https://images.assetsdelivery.com/compings_v2/fizkes/fizkes1910/fizkes191003250.jpg"} alt="" />
                <h6>Annabella Rowsdr</h6>
                <p>CSO</p>
                <ul>
                    <a href=""><BsFacebook/></a>
                    <a href=""><BsTwitter/></a>
                    <a href=""><BsGithub/></a>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Team