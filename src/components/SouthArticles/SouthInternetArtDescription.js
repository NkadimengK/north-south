import React from "react";
import { Link } from "react-router-dom";
import blogCSS from "../allblogStyle.module.css";

import art from "../images/internet art.PNG";

function SouthInternetArtDescription({SetSouthArticle}){
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
          <h1 className={blogCSS.pageHeadings}>Internet Art Description</h1>
          <br></br>
            <img src={art} width="100%" alt="Internet Art Prototype"></img>
            <br></br>

            <em>My Internet Art</em>
            <br></br>
          
            <p>By Khutso Nkadimeng, 07 Oct 2021</p>
            <br></br>

            <p>North-South, as the name suggests, is a paradox. The name is in reference to the Global North and Global South, a concept used to classify world countries based on their socio-economic and political characteristics.  Countries making up the Global North are wealthier, more politically stable, and less unequal. The Global South consists of poorer, unequal, and unstable countries. South Africa is somewhat unique; as an uncontested leader of inequality in the world, South Africa is structured like two countries divided along racial lines. A white country for the Global North and a black country in the Global South.</p>
            
            <p>Slums occupied by black people and affluent suburbs formerly designated for white people exist side by side and still reflect historical demographics designed by the Apartheid state of South Africa. Without basic infrastructures such as electricity and telecommunication lines, internet access is multiple times more expensive in townships than in the neighbouring suburbs. People in the townships earn far less than their suburban counterparts; as a result, they spend a higher percentage of their earnings on internet connection.</p>
            
            <p>My internet art is an abstract representation of this reality. The art is a model of a typical unequal area in South Africa. A model of the place's physical characteristics and an expression of a way of life accompanying these neighbouring contrasting areas. North-South is Sandton-Alexander and Primrose-Makause on the internet.</p>
          
            <p>The stark black and white colours separated by small to no boundaries are the black and white neighbours of these areas, the rich and the poor, the digitally connected and the excluded groups. The North side of the website is designed to be relatively smooth and mire resourced, and the South side is made to be slow, frustrating, work-intensive with a high cost of operation. These are the daily realities of South Africans. </p>
           
        </div>
      </div>
    </div>
  );
}

export default SouthInternetArtDescription;