import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/art.jpeg";

function SouthRevolvingInternet({SetSouthArticle}) {
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton} onClick = {()=>{ {SetSouthArticle(0)}}}>
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
          <h1 className={blogCSS.pageHeadings}>The Revolving Internet: A modern internet art giving a post-modern perspective</h1>
          <br></br>
            <img src={art} width="100%" alt="an image of an artist painting a woman"></img>
            <br></br>
            <em>An artistist painting her subject - Pexels</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 04 Oct 2021</p>
            <br></br>
            <p>Modernism in visual arts is characterised by experimentation, abstraction, and lack of faithfulness to reality and more focus on the essence of that reality <a href="https://www.britannica.com/art/Modernism-art" target="blank">(Kuiper 2021)</a>. Post-modernism is the rejection of enlightenment <a href="https://www.britannica.com/topic/postmodernism-philosophy" target="blank">(Duignan 2020)</a>, the foundation of modernism and is a general suspicion of authority. In this article, I will argue that <a href="https://anthology.rhizome.org/the-revolving-internet" target="blank">The Revolving Internet</a> can be classified as modernist art and its purposes align with post-modern philosophy.</p>

            <p>Google is not the internet, but it is a very good abstraction, and it is practically synonymous with the internet. It is therefore fitting to call this artefact <a href="https://anthology.rhizome.org/the-revolving-internet" target="blank">The Revolving Internet</a>. To create meaning, the artist simply changed the orientation of google pages and left everything else to function the same</p>

            <p>Our perception of Google is of an archive of the truth. I cannot count how many times I have heard people say things like “I am telling you the truth; you can even google it”. By rotating the Google website, Constant Dullaart, the author of <a href="https://anthology.rhizome.org/the-revolving-internet" target="blank">The Revolving Internet</a>, demonstrates to us that even Google can be manipulated. Bringing us to the postmodern view that there is no absolute truth. Truth is relative. Perhaps a good example of this concept can be demonstrated with a Google search. In 2018, the result of the search terms “squatter camps in South Africa” had many South Africans surprised because the results showed white people <a href="https://qz.com/africa/1306782/why-googling-squatter-camps-in-south-africa-returns-pictures-of-white-people/" target="blank">(Chuttel 2018)</a>. There are many struggling white people in South Africa; however, people expected the Google results to feature more black people because that is the reality on the ground. </p>

            <p>For someone in a foreign country who used the stated search terms without much knowledge about South Africa, the truth is, squatter camps are predominantly white. That is true and they have Google to prove it. Nobody stops to ask themselves how the search algorithms work and whose answers are likely to appear at the top. This goes back to the inequalities of internet access and online material contributions. The postmodernists believe that all forms of knowledge are functions of power. In this case, they are right.</p>

            <p>Amazingly, such a simple concept of a rotating screen can have so much meaning. My own approach to internet art was partly inspired by <a href="https://anthology.rhizome.org/the-revolving-internet" target="blank">The Revolving Internet</a>. I want to combine many basic ideas for a meaningful experience.</p>

            <h2>References</h2>
            <ol>
                <li>Kuiper, K. 2021. <a href="https://www.britannica.com/art/Modernism-art" target="blank">Britannica. Modernism</a></li>
                <li>Duignan, B.2020. <a href="https://www.britannica.com/topic/postmodernism-philosophy" target="blank">Britannica. Postmodernism</a></li>
                <li>Chutel, L. 2018. <a href="https://qz.com/africa/1306782/why-googling-squatter-camps-in-south-africa-returns-pictures-of-white-people/" target="blank">Quartz Africa. Why googling squatter camps in South Africa returns pictures of white people</a></li>
            </ol>
         
        </div>
      </div>
    </div>
  );
}

export default SouthRevolvingInternet;
