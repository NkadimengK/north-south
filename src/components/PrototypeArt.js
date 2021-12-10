import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import artCSS from "./artStyle.module.css"
import Images from "./images/Images";





function PrototypeArt() {

  const allImages = [Images.image1,Images.image2,Images.image3,Images.image4];
  
  var southImageIndex = 0;
  //**********North variables*****************//
  var northWorkPay = 400;
  var northDataCost = 10;
  //var northBallance = 0;
  //var northWallet = 0;

  //************North Data and Work************//
  //Work for money
  const [northWallet,SetNorthWallet] = useState(0);
  const NorthWork = () =>{
    var payment = northWallet;
    payment+=northWorkPay;
     SetNorthWallet(payment);
    //text update

  } 
  //Buy Data
  const [northBallance,SetNorthBallance] = useState(0);
  const NorthRecharge = () =>{
    var data = northBallance;
    var payment = northWallet;
    if (northWallet >= northDataCost){
      data+=5;
      payment-=northDataCost;
    }
    SetNorthWallet(payment);
    SetNorthBallance(data); 
  }

  //***********Scroll Up North************//
  const [NorthImageIndex, SetNorthImageIndex] = useState(0);
  
  const ScrollUpNorthImage =  () =>{
    var data = northBallance; //[note to self] have to keep assigning the current state to temporary variables because the state is a constant variable I cannot manipulate directly
    if(northBallance>0){
      var northImageIndex = NorthImageIndex;
      if(northImageIndex < 2){
        northImageIndex++;
      }
      else{
        northImageIndex = 3;
      }
      SetNorthImageIndex(northImageIndex);

      data--;
      SetNorthBallance(data);
    }

  }
  //***********Scroll Down North************//
  const ScrollDownNorthImage =  () => {
    var data = northBallance;
    if(northBallance>0){
      var northImageIndex = NorthImageIndex;
   
      if(northImageIndex>0){
        northImageIndex--;
      } else if(northImageIndex<=0){
        northImageIndex = 0;
      }
      SetNorthImageIndex(northImageIndex);
      data--;
      SetNorthBallance(data);
    }
  } 
//****************************************************//
//**********************The South*********************//
//****************************************************//

//**********South variables*****************//

var southWorkPay = 100;
var southDataCost = 50;
//var southBallance = 0;
//var southWallet = 0;

 //************South Data and Work************//
  //Work for money
  const [southWallet,SetSouthWallet] = useState(0);
  const SouthWork = () =>{
    var payment = southWallet;
    payment+=southWorkPay;
     SetSouthWallet(payment);
    //text update

  } 
  //Buy Data
  const [southBallance,SetSouthBallance] = useState(0);
  const SouthRecharge = () =>{
    var data = southBallance;
    var payment = southWallet;
    if (southWallet >= southDataCost){
      data+=5;
      payment-=southDataCost;
    }
    SetSouthWallet(payment);
    SetSouthBallance(data);    
  }
  //***********Scroll Up South************//
  const [SouthImageIndex, SetSouthImageIndex] = useState(0);
  
  const ScrollUpSouthImage =  () =>{
    var data = southBallance; 
    if(southBallance>0){
      var southImageIndex = SouthImageIndex;
      if(southImageIndex < 2){
        southImageIndex++;
      }
      else{
        southImageIndex = 3;
      }
      SetSouthImageIndex(southImageIndex);

      data--;
      SetSouthBallance(data);
    }

  }
  //***********Scroll Down North************//
  const ScrollDownSouthImage =  () => {
    var data = southBallance;
    if(southBallance>0){
      var southImageIndex = SouthImageIndex;
   
      if(southImageIndex>0){
        southImageIndex--;
      } else if(southImageIndex<=0){
        southImageIndex = 0;
      }
      SetSouthImageIndex(southImageIndex);
      data--;
      SetSouthBallance(data);
    }
  } 

  return (
    <div className={artCSS.mainContainer}>
      <h1 className={artCSS.regularHomeButton}>
        <Link to = "/">North South</Link>
      </h1>

      <Navigation />
      <MobileNavigation />

      <div className={artCSS.color}></div>

      <div className={artCSS.North}>
        <div className={artCSS.NorthContainer}>
          <h1 className={artCSS.NorthHeading}>North</h1>
          <br></br>
          <div className={artCSS.NorthImages}>
            <img src={allImages[NorthImageIndex]}  alt="image showing two unequal neighbourhoods in South Africa"></img>
          </div>
          <div className={artCSS.ScrollButtons}>
              <div className={artCSS.backButton} onClick ={ScrollDownNorthImage}>
              </div>
              <div className={artCSS.nextButton} onClick ={ScrollUpNorthImage}>
              </div>
          </div>

          <div className={artCSS.ActivitiesButtons}>
            <div className={artCSS.RechargeButton}>
              <button className={artCSS.DBtn} onClick = {NorthRecharge}>Data</button>
            </div>
            <div className={artCSS.WorkButton}>
              <button className={artCSS.WBtn}  onClick = {NorthWork}>Work</button>
            </div>
          </div>
          <div className={artCSS.Balances}>
            <p className={artCSS.DataBalance}>Balance: {northBallance}GB</p> 
            <p className={artCSS.Wallet}>Wallet: R{northWallet}</p>

          </div>
        </div>
      </div>

      <div className={artCSS.South}>
        <div className={artCSS.SouthContainer}>
          <h1 className={artCSS.SouthHeading}>South</h1>
          <br></br>
          <div className={artCSS.SouthImages}>
            <img src={allImages[SouthImageIndex]} alt="image showing two unequal neighbourhoods in South Africa"></img>
          </div>

          <div className={artCSS.SouthScrollButtons}>
            <div className={artCSS.SouthBackButton} onClick ={()=>{setTimeout(ScrollDownSouthImage,4000)}}>
            </div>
            <div className={artCSS.SouthNextButton} onClick ={() => {setTimeout(ScrollUpSouthImage,4000)}}>
            </div>
        </div>

        <div className={artCSS.SouthActivitiesButtons}>
          <div className={artCSS.SouthRechargeButton}>
            <button className={artCSS.SouthDBtn} onClick = {SouthRecharge}>Data</button>
          </div>
          <div className={artCSS.SouthWorkButton}>
            <button className={artCSS.SouthWBtn}  onClick = {SouthWork}>Work</button>
          </div>
        </div>
        <div className={artCSS.SouthBalances}>
          <p className={artCSS.SouthDataBalance}>Balance: {southBallance}GB </p>
          <p className={artCSS.SouthWallet}>Wallet: R{southWallet} </p>

        </div>
      </div>


    </div>
  </div>
  );
}

export default PrototypeArt;
