import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/blog art.PNG";

function SouthTechnicalReflection2({SetSouthArticle}){
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
          <h1 className={blogCSS.pageHeadings}>Assignment 2 Technical Reflection</h1>
          <br></br>
            <img src={art} width="100%" alt="internet art by Khutso Nkadimeng"></img>
            <br></br>

            <em>Internet Art - Khutso Nkadimeng</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 09 Oct 2021</p>
            <br></br>
            <p>is either not working or not fully functional. I was, however, able to build <a href="blog-art.html" target="blank">the experience I wanted</a>  using vanilla JavaScript. With constant four-hour-long power cuts and a non-functional project, my experience was like reading an article from the South side of my website. </p>
            
            <strong>Process </strong>
            <p>I built a <a href="internet-art.html" target="blank">prototype </a> in Assignment 1 and came into the second assignment to build onto that existing idea. I knew what I wanted to do and how it should work using JavaScript and the Document Object Model (DOM). Thus, that is what I started with. I built the experience in JavaScript DOM as part of my first website. Once everything was working as intended in the DOM, I would then transfer it into React. Half that plan was less than successful. </p>

            <strong>Struggles</strong>
            <p>I am relatively comfortable with the complexity of JavaScript necessary to build my website. I thought that skill would be easily transferable; after all, React JS is another way to use the same language. I could not have been more wrong. My mistake was even more fundamental than I first realised. Building websites in React actually takes a different type of thinking. The one major difference which was consequential in my case was that in React, you do not directly manipulate the DOM. The way the DOM works is no different to basic Object Oriented programming. If you want to change a value in a class, you just access it using the class name and dot property. But React is different; things are done through reference to avoid rendering every time a component state changes. As a result, the difference is like that between manipulating values directly and through pointers in C++. My design approach was not adapted to that.</p>

            <p>My thinking was, “how can I adapt this functionality to React” instead of “what properties of React can allow me the same functionality”. So, I spent a lot of time trying to figure out how to directly manipulate the DOM in React. The very thing React was designed to minimise. Needless to say, I failed because I could not achieve the same functionality as I did with JavaScript DOM. Even my buttons, an integral part of my site, do not work as intended.  I also struggled with breaking my existing pages into small and reusable components for the most part. </p>

            <strong>Solution</strong>
            <p>With the problem of non-functional components in React, my solution was to use links and direct the user to my <a href="index.html" target="blank">functional website</a>. For example, the Blog section in React links to the working Blog section built using JavaScript DOM. This is a temporary solution I intend to address in future adequately.</p>

            <strong>Achievements</strong>
            <p>Although things were broken in React, my JavaScript works as intended. It is responsive and very interactive. I managed to show what the vision of the project is. I am especially pleased with the Blog section, I wanted to turn that section into my internet art, and I successfully did. Although React was in many ways a disaster, I did see the advantages it provides. I do not have to code or build the same component many times. Using just one with good props can save countless hours. I managed to do that with my navigations. That was the best part, learning something new and useful. </p>

            <strong>Conclusion</strong>
            <p>This assignment was overall a humbling experience. There is so much I need to learn in a short period of time. But after this much struggle, I am very determined. </p>

        </div>
      </div>
    </div>
  );
}

export default SouthTechnicalReflection2;