import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/blog art.PNG";

function UserGuide({SetArticle}){
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
          <h1 className={blogCSS.pageHeadings}>User Guide – How to navigate North-South</h1>
          <br></br>
            <img src={art} width="100%" alt="Glob page of North South"></img>
            <br></br>

            <em>My Internet Art</em>
            <br></br>
          
            <p>By Khutso Nkadimeng, 07 Oct 2021</p>
            <br></br>

            <p>North-South is an abstraction of inequalities of neighbouring areas in South Africa, often townships and suburbs. Like the life we lead, going through the blog has a cost to it, the Cost of Reading. There are three buttons necessary to read the ever-fading articles, representing life's struggles and maintenance.</p>
            
            <p>Work: In North-South, you earn a living by simply clicking a button. Pressing the Work button will earn you a salary, which can be used to purchase services like data bundles.</p>
            
            <p>Data: To use the internet, one needs data, and that is also true in North-South. To read any blog page requires data, and data requires money. Therefore, you must first go to work (click the Work button) and then buy data by clicking on the Data button.</p>
          
            <p>Read: Articles will fade till the screen is black with no content. To be able to keep reading, the user must keep pressing the Read button. For the read button to work, data is required.  </p>
            <br></br>
            <p>Things you must be aware of:</p>
            <ul>
                <li><p>Use the browser back button after reading an article through split-screen. This will make for a more consistent experience.</p></li>
                <li><p>Although opening the blog page takes you to a list of articles, the entire website can be experienced from the North and South through the blog page.</p></li>
                <li><p>Once you explore both the North and South sides of the website, you will quickly realise that things may not exactly be ideal in the North, but life in the South is much worse. It will take you much more effort in the South to read the same thing you can do with relative ease in the North.</p></li>
                <li><p>For the same amount of work (a click), you will earn four times the salary of the South if you are in the North.</p></li>
                <li><p>Data in the South is five times more expensive than in the North. </p></li>
                <li><p>A lot more effort is required in the South to read the same article you can read with relative ease in the North </p></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default UserGuide;