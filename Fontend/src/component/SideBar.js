import React from 'react';
import '../styles/sidebar.css'
import { NavLink,Link } from "react-router-dom";


function SideBar() {
  function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }

  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

  return (
    <>
    <div className="sidebar">
    <NavLink to="/"  className={({isActive}) => (isActive ? 'link-acvtive' : 'link')} >Home</NavLink>
    <NavLink to="/mentee"  className={({isActive}) => (isActive ? 'link-acvtive' : 'link')} >Mentee</NavLink>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  
  </>

  );
}

export default SideBar;
