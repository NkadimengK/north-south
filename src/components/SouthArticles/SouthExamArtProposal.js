import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/proposal.jpeg";

function SouthExamArtProposal({SetSouthArticle}){
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
          <h1 className={blogCSS.pageHeadings}>Exam Internet Art Rationale</h1>
          <br></br>
            <img src={art} width="100%" alt="writing a proposal"></img>
            <br></br>

            <em>Wriring a proposal-Pixels</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 09 Dec 2021</p>
            <br></br>
            
            <strong>Description</strong>
            <p>As internet art, I propose to you, North South. North South is a site built as an abstraction of internet access inequalities and economic disparities of the Global North and South with a direct focus on the most unequal society in the world, South Africa. The site leverages web features such as interactivity to create small differences in experiences that can make a huge difference to the user.</p>

            <p>Visitors will likely be curious after landing on a home page with plain contrasting black and white colours and a few words with no explanation on a site that is supposed to be about internet art. But the site is not about internet art, it is itself, a piece of art designed to be explored and experienced. After going through the art and blog sections of the site, everything will start to make sense. </p>

            <p>North South consist mainly of two features, the first one being a split-screen dividing the North and the South and the second is a group of buttons used to interact with the site. At first glance, everything will look the same, but just like in life, there is an underlying structural issue making things difficult for some parts of society. The user will likely end up using the North side of the website more frequently. Just like all of us would want a slightly or even more comfortable life than we lead. And that is the point of this artwork, to show that while in Alexander, we all want to cross the road into Sandton.</p>
            
            <strong>Theoretical Focus</strong>
            <p>Focusing more on South Africa, the theoretical framework throughout the website is on Internet, Society and Design Justice. With more attention to the socio-economic conditions driving the growing digital divide in the country and beyond.  </p>
            
            <strong>Rationale </strong>
            <p>North South was designed to be a single integrated internet art as opposed to multiple art prototypes hosted on a site. The reason for that is twofold: first as is simply an artistic choice. I wanted to build something that looks simple at first glance but has deeper meaning complexity as you go deeper. The second is about my theoretical focus. I felt that the topic is too broad and very important and therefore needs a sustained focus and elaborate representation. </p>
            
            
            <p>The site is by design, minimalistic. I aimed to provide the essence of disparities between neighbouring communities in South Africa. Thus, the focus was on building interactive and meaningful experiences to give the user an idea of what its like to live in an environment of constant struggle right next to someone living in affluence. To achieve that, I needed to create an environment that allows something similar to a dialogue. To facilitate dialogue, one does not need fancy conference rooms, a chair under a tree is just as effective. What matters is the conversation being had  .</p>

            <strong>Reflection </strong>
            
            <p>I believe I have succeeded in my goal to make a coherent and integrated website. As a form of internet, I do not believe there is anything lacking in my work. There are a few hard technical choices I had to make which are meant to avoid the site crushing. If users are not aware that they must use the internal navigation of the artwork, the site may crush. But otherwise, my implementation is excellent.</p>

           
        </div>
      </div>
    </div>
  );
}

export default SouthExamArtProposal;