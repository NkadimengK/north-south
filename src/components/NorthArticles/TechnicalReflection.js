import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/internet art.PNG";

function TechnicalReflection({SetArticle}) {
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton} onClick = {()=>{ {SetArticle(0)}}}>
        <Link to="#">North</Link>
      </h1>

      <div className={blogCSS.ScrollButtons}>
              <div className={blogCSS.backButton} onClick = {()=>{ {SetArticle(0)}}} >
              </div>

          </div>    
      
      <div className={blogCSS.restOfNavButtons}></div>

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>Assignment 1 Technical Reflection</h1>
          <br></br>
            <img src={art} width="100%" alt="Internet Art prototype"></img>
            <br></br>

            <em>Internet Art - Khutso Nkadimeng</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 04 Oct 2021</p>
            <br></br>
            <p>I think I did an excellent job in the technical category. My site is functional, navigation is good for mobile, and pc and I managed to make a satisfactory prototype of my internet art idea. I did however experience issues with the responsiveness of my art page and reusing code for my split-screen. </p>
            
            <strong>Process </strong>
            <p>The priority was to get the basics working. That means functional navigation and responsiveness of the usual pages like <a href="index.html" target="blank">homepage</a> and <a href="blog.html" target="blank">blog entries</a>. Once that was working, I focused all my attention on internet art. For internet art the priority was functionality. I wanted to build a convincing and working minimum viable product. After a struggle, I finally pulled it off. </p>

            <strong>Struggle with responsiveness</strong>
            <p>Responsiveness of the normal sections of the site was not that difficult. There were difficulties with getting the site to work just as well on mobile phones in landscape orientation. However, everything worked well for a portrait one. For the internet art page, there is a unique challenge. A split-screen of a mobile phone makes smaller square screens. Too small to give a similar computer experience. And it cannot give both portrait and landscape experiences of a mobile phone. A more optimal solution in the future may have to be completely different pages for the North and South sides in mobile. That is something I am currently considering.</p>

            <p>I also had issues with reusing code from the North in the South. The differences are small enough to be managed by two or three more variables. However, I had problems trying to give arguments to an onClick event. That meant I had to repeat the same code twice with a few variable name changes</p>

            <strong>Achievements</strong>
            <p>I eventually figured out how arguments work using event listeners. I successfully used the method on a few functions, but my internet art behaved differently. I still see that as a victory. I believe there is something small I was doing wrong without noticing and I will now have a chance to investigate it closely. A functional prototype of my internet art vision is also a big achievement for me. It functions exactly how I intended, and it was built using simple concepts. I also like the menu in the middle of the homepage road. It makes sense that to go anywhere on my site you must use the road. It also provides me with enough space for more things in the future.   </p>
         
        </div>
      </div>
    </div>
  );
}

export default TechnicalReflection;