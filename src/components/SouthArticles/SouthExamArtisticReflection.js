import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/home.PNG";

function SouthExamArtisticReflection({SetSouthArticle}){
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton} onClick = {()=>{{SetSouthArticle(0)}}}>
        <Link to="#">South</Link>
      </h1>

      <div className={blogCSS.ScrollButtons}>
              <div className={blogCSS.backButton} onClick = {()=>{ {SetSouthArticle(0)}}} >
              </div>

          </div>    
      
      <div className={blogCSS.restOfNavButtons}></div>

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>Exam Artistic Reflection</h1>
          <br></br>
            <img src={art} width="100%" alt="Home page of North South"></img>
            <br></br>

            <em>North South Web Homepage - Khutso Nkadimeng</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 09 Dec 2021</p>
            <br></br>
            
            <p>Reading through all my artistic reflections, a theme emerges. From the beginning, I wanted to build a project in which my art and technical implementation are fully aligned with the theory I am engaging. I am now confident that I succeeded in this regard. </p>
          
            
            <p>My theoretical focus was Internet, Society and Design Justice, and in particular, internet access inequality and the economic disparities that go with it. I engaged with the readings and wrote about the growing digital gap exacerbated by the global pandemic and how it resulted in low-income earners losing jobs and their children having to drop out of school. Simultaneously, resourced schools and families were able to access resources and quickly adapted to the new normal. </p>
            
            <p>I did not just write about this problem and treat my theory as simply a requirement, I was able to find a creative way to build that theory into a piece of art. Without reading my reflections and artwork descriptions, the reader can understand my website and internet art by reading my theoretical analysis. The internet artworks I have chosen to analyse are also perfectly aligned with my project. Take for example The Revolving Internet, it’s an abstract idea that at first glance look like a simple rotation of the Google home page. But closer analysis reveals just how much meaning there is in that rotation. </p>
            
            <p>I wanted to build something like The Revolving Internet, a simple looking concept that creatively combines art, theory and technical implementation and I have. For this exam I had to make one big design choice, I designed my website to rely on internal navigation buttons. By that I mean for a better experience, the user must use navigation buttons I have provided and not those from the browser. I have explained this decision in the technical reflection but basically, I had to abandon traditional page linking and use the state property of React to control the blog part of my website.  </p>
            
            <p>My technical decision had artistic ramifications. For example, I had to add the back button of my own because it is important to allow the user to still have a familiar browsing experience. To be able to properly navigate my website. On that subject of navigation, I have removed the menu buttons in the blog section and for mobile. The blog will most likely be the section the user spends the most time on. I have provided a way to navigate through all the blogs and did not see a reason for the navbar in that section and therefore allowed users to go back to the home page once they are done with blogs. </p>

        </div>
      </div>
    </div>
  );
}

export default SouthExamArtisticReflection;