import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/proposal.jpeg";

function InternetArtProposal({SetArticle}){
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
          <h1 className={blogCSS.pageHeadings}>Internet Art Proposal</h1>
          <br></br>
            <img src={art} width="100%" alt="Writing with a pen and paper"></img>
            <br></br>

            <em>Writing a proposal- Pexels</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 04 Oct 2021</p>
            <br></br>
            <strong>Description </strong>
            <p>My internet art is a simulation of inequalities that exist next to each other in many South African cities. It is also designed in reference to the disparities of the Global North and South.  I am using properties of the web to give an experience of two contrasting worlds existing directly next to each other. I will have a split-screen for the North and South. Users will be able to switch between the two and experience both sides. On the North side, the internet is cheaper and faster, and people make more money. On the South side is the opposite, the internet is expensive and slower, and people make less money. More activities and features will be added to make these differences more apparent. An optimal expression of my idea is turning it into a browser. That is, you can do almost all activities you normally do on the internet. But you are limited by the constraints I put in like loading times, lack of data, lack of money, load-shedding, general access restrictions, etc.</p>

            <strong>Theoretical Focus</strong>
            <p>My theoretical focus is on Internet, Society and Design Justice in the context of South Africa. The digital divide we are experiencing in South Africa mirrors historical inequalities, societal hierarchies, and exclusive urban planning. I am concerned with differences in data costs, hardware accessibility and infrastructure development. All these factors are a result of economic disparities and that is the picture I am trying to paint overall.</p>
            
            <strong>Style Guide and Reference Materials</strong>
            <p>To give an idea of what I am trying to build, I have provided a prototype on the <a href="internet-art.html" target="blank">internet art page</a>. I have made a split-screen of the North and South. Users browse through images showing the type of environment I am simulating. But the browsing experience is different. Data in the North costs 2.5% of the salary, but in the South, it costs 50%. Internet in the South is four times slower than in the North.  That means you must wait four more seconds in the South to load one image. These types of differences will continue as the development of my website progresses.</p>

            <strong>Technical concerns and challenges foreseen</strong>
            <p>Building my idea fully the way that I want to, as a normal browsing experience limited only by my constraints may prove more technically challenging even with the use of APIs. I may have to settle for designing and building the whole experience limited only to my website.  The best solution I have come up with is to simulate a normal browsing experience is to have my entire website as this split-screen. It is still challenging but doable. </p>
        </div>
      </div>
    </div>
  );
}

export default InternetArtProposal;