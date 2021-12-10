import React from 'react'
import { Link } from 'react-router-dom'
import blogArtCSS from './blogArt.module.css'
import  { useState, useRef,useCallback, useLayoutEffect, useEffect} from 'react'
import DigitalDivide from './NorthArticles/DigitalDivide'
import SouthDigitalDivide from './SouthArticles/SouthDigitalDivide'
import MobileNavigation from './MobileNavigation'
import Home from '../pages/Home'
//North Articles
import ArticlesList from './NorthArticles/ArticlesList'
import RevolvingInternet from './NorthArticles/RevolvingInternet'
import TechnicalReflection from './NorthArticles/TechnicalReflection'
import ArtisticReflection from './NorthArticles/ArtisticReflection'
import InternetArtProposal from './NorthArticles/InternetArtProposal'
import UserGuide from './NorthArticles/UserGuide'
import InternetArtDescription from './NorthArticles/InternetArtDescription'
import GlobalInternet from './NorthArticles/GlobalInternet'
import ExhaustingACrowd from './NorthArticles/ExhaustingACrowd'
import TechnicalReflection2 from './NorthArticles/TechnicalReflection2'
import ExamArtProposal from './NorthArticles/ExamArtProposal'
import ExamArtisticReflection from './NorthArticles/ExamArtisticReflection'
import ExamTechnicalReflection from './NorthArticles/ExamTechnicalReflection'
//South Articles
import SouthArticlesList from './SouthArticles/SouthArticleList'
import SouthRevolvingInternet from './SouthArticles/SouthRevolvingInternet'
import SouthTechnicalReflection from './SouthArticles/SouthTechnicalReflection'
import SouthArtisticReflection from './SouthArticles/SouthArtisticReflection'
import SouthInternetArtProposal from './SouthArticles/SouthInternetArtProposal'
import SouthUserGuide from './SouthArticles/SouthUserGuide'
import SouthInternetArtDescription from './SouthArticles/SouthInternetArtDescription'
import SouthGlobalInternet from './SouthArticles/SouthGlobalInternet'
import SouthExhaustingACrowd from './SouthArticles/SouthExhaustingACrowd'
import SouthTechnicalReflection2 from './SouthArticles/SouthTechnicalReflection2'
import SouthExamArtProposal from './SouthArticles/SouthExamArtProposal'
import SouthExamArtisticReflection from './SouthArticles/SouthExamArtisticReflection'
import SouthExamTechnicalReflection from './SouthArticles/SouthExamTechnicalReflection'


function BlogArt() {




    const[loaded,SetLoading] = useState(true);
    const[home,SetHome] = useState(false);
    const [currentArticle, SetArticle] = useState(0);
    const [currentSouthArticle, SetSouthArticle] = useState(0);
    //***********************NORTH ARTICLE LIST********************************//
    const article = [<ArticlesList SetArticle = {SetArticle}/>,<DigitalDivide SetArticle = {SetArticle}/>,<RevolvingInternet SetArticle = {SetArticle}/> ,<TechnicalReflection SetArticle = {SetArticle}/>,<ArtisticReflection SetArticle = {SetArticle}/>,<InternetArtProposal SetArticle = {SetArticle}/>,<UserGuide SetArticle = {SetArticle}/>,<InternetArtDescription SetArticle = {SetArticle}/>,<GlobalInternet SetArticle = {SetArticle}/>,<ExhaustingACrowd SetArticle = {SetArticle}/>,<TechnicalReflection2 SetArticle = {SetArticle}/>,<ExamArtProposal SetArticle = {SetArticle}/>,<ExamArtisticReflection SetArticle = {SetArticle}/>,<ExamTechnicalReflection SetArticle = {SetArticle}/>];
     //***********************South ARTICLE LIST********************************//
    const southArticle = [<SouthArticlesList SetSouthArticle = {SetSouthArticle}/>,<SouthDigitalDivide SetSouthArticle = {SetSouthArticle}/>,<SouthRevolvingInternet SetSouthArticle = {SetSouthArticle}/> ,<SouthTechnicalReflection SetSouthArticle = {SetSouthArticle}/>,<SouthArtisticReflection SetSouthArticle = {SetSouthArticle}/>,<SouthInternetArtProposal SetSouthArticle = {SetSouthArticle}/>,<SouthUserGuide SetSouthArticle = {SetSouthArticle}/>,<SouthInternetArtDescription SetSouthArticle = {SetSouthArticle}/>,<SouthGlobalInternet SetSouthArticle = {SetSouthArticle}/>,<SouthExhaustingACrowd SetSouthArticle = {SetSouthArticle}/>,<SouthTechnicalReflection2 SetSouthArticle = {SetSouthArticle}/>,<SouthExamArtProposal SetSouthArticle = {SetSouthArticle}/>,<SouthExamArtisticReflection SetSouthArticle = {SetSouthArticle}/>,<SouthExamTechnicalReflection SetSouthArticle = {SetSouthArticle}/>];

    //*********************************//
    //**************North***************//
    //*********************************//
    //*********North Variable***********//
      var northWorkPay = 400;
      var northDataCost = 10;
    
      
    
    //**************North Data and Work *********************/
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
    const SettingLoading = () => {
      if(loaded){
        SetLoading(false)
      }
      else
      SetLoading(true)
      console.log(loaded)
    }


    const NorthOpacity = useRef(null);
    
  
    const ChangeNorthOpacity =useCallback(()=>{
      
      var decrement = 0.01;
      NorthOpacity.current.style.opacity = 1;
      var decrease = window.setInterval(function(){
        if(NorthOpacity.current.style.opacity){
          NorthOpacity.current.style.opacity-= decrement;
        }
       if(NorthOpacity.current.style.opacity<=0){
          NorthOpacity.current.style.opacity = 0;
          // window.clearInterval(decrease);
           return;
       }       
      },800)

     
    },[]);


    const IncreaseNorthOpacity = () =>{
      var data = northBallance; //[note to self] have to keep assigning the current state to temporary variables because the state is a constant variable I cannot manipulate directly
      if(northBallance>0){
        NorthOpacity.current.style.opacity = 1;
      }
      data--;
      if(data<=0){
        data = 0;
      } 
      SetNorthBallance(data);
    }
    var Count = () =>{
      var count = 0;
      return count+1; 
    }

    function RunNorthChanges(){
      if(currentArticle>0){
        ChangeNorthOpacity();
      }
    }

    //*********************************//
    //**************South***************//
    //*********************************//
    //**********South variables*****************//

var southWorkPay = 100;
var southDataCost = 50;


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

      
  //*************South Opacity******************//
    const SouthOpacity = useRef(null);
    
    const ChangeSouthOpacity =useCallback(()=>{
      
      var decrement = 0.01;
      SouthOpacity.current.style.opacity = 1;
      var decrease = window.setInterval(function(){
        if(SouthOpacity.current.style.opacity){
          SouthOpacity.current.style.opacity-= decrement;
        }
       if(SouthOpacity.current.style.opacity<=0){
        SouthOpacity.current.style.opacity = 0;
          // window.clearInterval(decrease);
           return;
       }       
      },400)

     
    },[]);

    //*************Increase South Opacity******************//
    const IncreaseSouthOpacity = () =>{
      var data = southBallance; 
      if(southBallance>0){
        SouthOpacity.current.style.opacity = 1;
      }
      data--;
      if(data<=0){
        data = 0;
      } 
      SetSouthBallance(data);
    }
    //*************************Render File*****************************//
    return (
       
      
        <div className={blogArtCSS.mainContainer}>
        <h1 className={blogArtCSS.regularHomeButton} onClick = {()=>window.location.reload(false)}>
          
          <Link to = "/">North South</Link>
          
        </h1>
  
        <nav className={blogArtCSS.restOfNavButtons}></nav>
        
        <MobileNavigation/>
        <div className={blogArtCSS.color}></div>
        <div className={blogArtCSS.North}>
          <div className={blogArtCSS.NorthContainer}>
            <div  className={blogArtCSS.NorthImages} >
   
                <div  ref= {NorthOpacity}>
                  {article[currentArticle]}
                  
                  {
   
                      useLayoutEffect(()=>{
     
                          ChangeNorthOpacity()
                       
                    }, [])
                                        
                  }
                  
                 
                </div>  
              
            </div>
  
            <div className={blogArtCSS.ActivitiesButtons}>
              <div className={blogArtCSS.RechargeButton}>
                <button className={blogArtCSS.DBtn} onClick = {NorthRecharge}>Data</button>
              </div>
              <div className={blogArtCSS.ReadButton} onClick = {()=>{IncreaseNorthOpacity()}}>
                <button className={blogArtCSS.ReadBtn} onClick ={()=>{SettingLoading()}}>Read</button>
              </div>
              <div className={blogArtCSS.WorkButton}>
                <button className={blogArtCSS.WBtn} onClick = {NorthWork}>Work</button>
              </div>
            </div>
            <div className={blogArtCSS.Balances}>
              <p className={blogArtCSS.DataBalance}>Balance: {northBallance}GB</p>
              <p>Increase visibility</p>
              <p className={blogArtCSS.Wallet}>Wallet: R{northWallet}</p>
            </div>
          </div>
        </div>
  
        <div className={blogArtCSS.South}>
          <div className={blogArtCSS.SouthContainer}>
            <div className={blogArtCSS.SouthImages}>
 
                <div  ref= {SouthOpacity}>
                {southArticle[currentSouthArticle]} 
                  {
                      useLayoutEffect(()=>{
     
                          ChangeSouthOpacity()
                       
                    }, [])                      
                  }
                </div>  
            </div>
  
            <div className={blogArtCSS.SouthActivitiesButtons}>
              <div className={blogArtCSS.SouthRechargeButton}>
                <button className={blogArtCSS.SouthDBtn} onClick = {SouthRecharge} >Data</button>
              </div>
              <div className={blogArtCSS.SouthReadButton} onClick = {()=>{IncreaseSouthOpacity()}}>
                <button className={blogArtCSS.SouthReadBtn} >Read</button>
              </div>
              <div className={blogArtCSS.SouthWorkButton}>
                <button className={blogArtCSS.SouthWBtn} onClick = {SouthWork}>Work</button>
              </div>
            </div>
            <div className={blogArtCSS.SouthBalances}>
              <p className={blogArtCSS.SouthDataBalance}>Balance: {southBallance}GB </p>
              <p>Increase visibility</p>
              <p className={blogArtCSS.SouthWallet}>Wallet: R{southWallet} </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BlogArt
