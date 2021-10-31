import React from "react";
import "./About.css";
import { PAGES } from "../../config/text";

const About = () => {
  const { img, title, text, text_2, action } = PAGES.ABOUT;
  return (
    <div className="about-container">
      <div className="about-image">
        <div className="rectangle"></div>
        <img src={img} alt={PAGES.NOTFOUND} />
      </div>
      <div className="about-information">
        <h1>{title}</h1>
        <p className="text">{text}</p>
        <p className="text bold">{text_2}</p>
        <button className="button">
          <p>{action}</p>
        </button>
      </div>
    </div>
  );
};

export default About;
