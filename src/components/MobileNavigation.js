import React from "react";
import { useState } from "react";
import blogCSS from "./allblogStyle.module.css";

function MobileNavigation() {
    const [menuIsOpen,openMenu] = useState(false);

    function activateMenu() {
        let MenuClass = [];
      if (menuIsOpen == false) {
          openMenu(true);
          
 
      } else {
          openMenu(false)
          
         
          
        };
    }
  return (
    <div className={blogCSS.mobileNavButton} onClick = {activateMenu}>
      <div className={menuIsOpen? blogCSS.navbarTopClicked : blogCSS.navbarTop }></div>
      <div className={menuIsOpen? blogCSS.navbarClicked: blogCSS.navbar}></div>
      <div className={menuIsOpen? blogCSS.navbarBottomClicked: blogCSS.navbarBottom}></div>
    </div>
  );
}

export default MobileNavigation;
