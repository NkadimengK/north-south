import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import navigationCSS from "./master.module.css";
import HomeNav from "./HomeNav";

function MainNavigation() {
  const [menuIsOpen, setOpacity] = useState(false);
  
  function showMenu() {
    if(menuIsOpen==false){
        setOpacity(true) 
    }
    else
     setOpacity(false)
  }


  return (
    <div className={navigationCSS.homeContainer}>
      <div class={navigationCSS.topWhite}>
        <center>
          <h1 class={navigationCSS.homeButton}>
            <Link to="/">North South</Link>
          </h1>
        </center>

        <h1 class={navigationCSS.Disunity}>ThisUnity</h1>
      </div>
       
       {menuIsOpen && <HomeNav />}
     

      <div className={navigationCSS.menuNavButton} onClick = {showMenu}>
        <div className={menuIsOpen? navigationCSS.navbarTopClicked : navigationCSS.navbarTop} ></div>
        <div className={menuIsOpen? navigationCSS.navbarClicked: navigationCSS.navbar}></div>
        <div className={menuIsOpen? navigationCSS.navbarBottomClicked: navigationCSS.navbarBottom}></div>
      </div>

      <div class={navigationCSS.road}>
        <div class={navigationCSS.topLine}></div>
        <div class={navigationCSS.centerLine}></div>
        <div class={navigationCSS.bottomLine}></div>
      </div>
      <div class={navigationCSS.bottomBlack}>
        <h1 class={navigationCSS.Diversity}>in Diversity</h1>
      </div>
    </div>
  );
}

export default MainNavigation;
