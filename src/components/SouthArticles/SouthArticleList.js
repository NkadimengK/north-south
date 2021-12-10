import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css"


function SouthArticlesList({SetSouthArticle}) {
  
  return (
    <div className={blogCSS.mainContainer}>
      <h1 className={blogCSS.regularHomeButton}>
        <Link to = "#">South</Link>
      </h1>


      <div className={blogCSS.restOfNavButtons}></div>
      

      <div className={blogCSS.color}></div>

      <div className={blogCSS.articleBackground}>
        <div className={blogCSS.container}>
          <h1 className={blogCSS.pageHeadings}>Articles</h1>
          <br></br>



          <div className = {blogCSS.blogNames}>
          <ol>
            <h5 onClick = {()=>{ {SetSouthArticle(1)}}}> 
              <li>
                  Digital Divide Widens: A Close Read
              </li>
            </h5>
            <h5 onClick = {()=>{ {SetSouthArticle(2)}}}> 
              <li>
                    Analysis of The Revolving Internet
              </li>
            </h5>
            
            <h5 onClick = {()=>{ {SetSouthArticle(3)}}}> 
              <li>
                    Assignment 1 Technical Reflection
              </li>
            </h5>

            <h5 onClick = {()=>{ {SetSouthArticle(4)}}}> 
              <li>
                  Assignment 1 Artistic Reflection
              </li>
            </h5>
            <h5 onClick = {()=>{ {SetSouthArticle(5)}}}> 
              <li>
                Internet Art Proposal
              </li>
            </h5>

 
              <h3>Assignment 2</h3>
            <h5 onClick = {()=>{ {SetSouthArticle(6)}}}> 
              <li>
                  User Guide – How to navigate North-South
              </li>
            </h5>

            <h5 onClick = {()=>{ {SetSouthArticle(7)}}}> 
              <li>
                  Internet Art Description
              </li>
            </h5>
      
            <h5 onClick = {()=>{ {SetSouthArticle(8)}}}> 
              <li>
                  The Need for Global Internet Connection -A close Reading
              </li>
            </h5>

            <h5 onClick = {()=>{ {SetSouthArticle(9)}}}> 
              <li>
                  Analysis of Exhausting a Crowd
              </li>
            </h5>
            <h3>Exam</h3>

            <h5 onClick = {()=>{ {SetSouthArticle(10)}}}> 
              <li>
                 Assignment 2 Technical Reflection
              </li>
            </h5>

            <h5 onClick = {()=>{ {SetSouthArticle(11)}}}> 
              <li>
                  Exam Internet Art Rationale
              </li>
            </h5>

            <h5 onClick = {()=>{ {SetSouthArticle(12)}}}> 
              <li>
                 Exam Artistic Reflection
              </li>
            </h5>
            <h5 onClick = {()=>{ {SetSouthArticle(13)}}}> 
              <li>
                 Exam TechnicalReflection
              </li>
            </h5>
            </ol>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default SouthArticlesList;