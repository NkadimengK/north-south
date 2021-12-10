import React from 'react'
import { Link } from "react-router-dom";
import navigationCSS from "./master.module.css";


function HomeNav(props) {

    return (
        <nav className={navigationCSS.navigationButtons} >

        <Link to="/">Home</Link>
  
        <Link to="/blog">Blog</Link>
  
        <Link to="/internet-art">Art</Link>

        <Link to="/about">About</Link>
  
    </nav>
    )
}

export default HomeNav
