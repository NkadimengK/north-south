import React from 'react'
import blogCSS from './allblogStyle.module.css'
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
    <nav className={blogCSS.restOfNavButtons} onClick = {props.onClick}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/internet-art">Art</Link>
        <Link to="/about">About</Link>
      </nav>
    )
}

export default Navigation
