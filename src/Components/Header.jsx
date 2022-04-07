import React from 'react'
import logo from "./logo.png"
import profile from "./profile.png"
import  "./style.css"
function Header() {
  return (
    <div>
    <div className="topHead">
      <img src={logo} className="headerImage" alt="" />
      </div>
      <div className="left">
      <img src={profile} className="headerProfile" alt="" />
      <p id="headText" >Sierra Ferguson</p>
      <p id="headText2" >s.ferguson@gmail.com</p>  
    </div>
    </div>
  )
}

export default Header