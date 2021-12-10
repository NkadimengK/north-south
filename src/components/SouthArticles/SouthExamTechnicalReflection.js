import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/blog art.PNG";

function SouthExamTechnicalReflection({SetSouthArticle}){
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
          <h1 className={blogCSS.pageHeadings}>Exam Technical Reflection</h1>
          <br></br>
            <img src={art} width="100%" alt="Home page of North South"></img>
            <br></br>

            <em>North South Web Homepage - Khutso Nkadimeng</em>
            <br></br>
            <br></br>
            <p>By Khutso Nkadimeng, 09 Dec 2021</p>
            <br></br>
            
            <p>My approach to Assignment 2 was ill-informed. After building a fully functional website covering my whole project vision in JavaScript (JS), I thought rewriting it in React JS would be a simple matter of changing a few structural elements and syntax. That was a mistake. A mistake that I came in this exam intending to rectify. My goal for this exam project was to rebuild my website and internet art in React and achieve the same functionality and experience as in vanilla JavaScript. </p>
          
            <h3>Process</h3>
            <p>The first and most important part of the process was having the correct mentality. Instead of thinking about ways to covert a JS website into React as I did in Assignment 2, I started thinking about React features that would enable me to build my idea. And just like I did at the beginning of this course, I started by building a prototype. My prototype art is a split-screen experience where the user can scroll through images on the North and South side of the screen and feel the differences. After a successful implementation, I then turned my attention to the blog section of my website to build up on the prototype idea and make it a core experience of my website. That was not easy.  </p>
            
            <h3>Challenges</h3>
            <p>What made my split-screen blog experience possible and relatively easy to implement in vanilla JS was the iframe tag. Iframe allowed me to effectively run my whole website in parallel using the same code. But I was not going to have the same privilege in React. The problem with iframe is that it requires a source, which must be an HTML page, however, all our components in React are JS files. A simple solution to my problem was to use my vanilla JS website as the source to my iframe in React. That would have saved me a lot of stress. However, I felt that it defeats the purpose of learning React, I had to find a React solution to my problem. Besides that, iframes had their own issue. You could render one iframe into another, which meant that you could run a page inside itself infinitely. That is appealing at first but after a few loops, the page gets cluttered.   </p>
             <p>Another more consequential challenge I faced was that of manipulating opacity dynamically in React. The way my blogs work is that over time visibility is lost and the user must perform a few tasks to restore pages into a more readable state. To do that I directly manipulated the Document Object Model (DOM) in JS.  React is built to avoid exactly that type of manipulation for it to be fast. A solution to this problem meant giving up certain common features like the browser’s back button and replacing them with my own.</p>
            
            <h3>Solution</h3>
            <p>To address the absence of an iframe I used React’s ability to render one component inside another. This feature also allows conditional rendering based on the state of the website. I developed the logic to make a split-screen parallel experience without the use of an iframe and in that process, solved the problem of infinite self-rendering of pages. </p>
            
            <p>To manipulate opacity, I used the useRef hook. But the hook comes with its set of challenges. Since I am only using a reference and not accessing the property directly, I sometimes found that the reference I am looking for is not available during rendering times. And that leads to TypeErrors of undefined style properties. To solve that, I stopped using links in my blog pages. Everything is controlled using states. This way I was able to control all the necessary aspects of my website. So, for a better experience, users must navigate my site using the methods I have supplied, not those of the browser.</p>

            <h3>Conclution</h3>
            <p>This assignment was tough, but I am happy with the project and my progress as a student. My site is responsive, integrated and shows genuine and successful experimentation with new technology. I went from one challenge to another coming up with novel and interesting solutions. In the end, I produced what I envisioned.  </p>
        </div>
      </div>
    </div>
  );
}

export default SouthExamTechnicalReflection;