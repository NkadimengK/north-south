import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import blogCSS from "./aboutblogStyle.module.css";
import unequalScene from "./images/unequal-sa.jpg";

function AboutPage() {
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton}>
        <Link to="/">North South</Link>
      </h1>

      <Navigation />
      <MobileNavigation />

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>About</h1>
          <br></br>
          <img
            src={unequalScene}
            width="70%"
            alt="an image of a telephone tower"
          ></img>
          <br></br>
          <em>Primrose and Makause, Unequal Scenes by Jonny Miller</em>
          <br></br>
          <br></br>
          <p>
            Inspired by images such as the one above, this website explores
            internet disparities of the Global North and South as well as
            internet access inequalities in South Africa. The theoretical focus
            is on Internet, Society and Design Justice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
