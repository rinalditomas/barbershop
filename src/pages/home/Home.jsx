import React from "react";
import "./Home.css";
import { PAGES } from "../../config/text";

const Home = () => {
  const { img, title, subtitle, action } = PAGES.HOME;
  return (
    <div className="home-container">
      <div className="home-information">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      <div className="image">
        <button className="action">
          <h1>{action} </h1>
          <ion-icon id="arrow" name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Home;
