import React from 'react'
import "./style.css"
import logo from "./logo.png"
import profile from "./profile.png"
const Header2 = () => {
  return (
    <div className="sticky-top" >
    <div>
        <div className="container-fluid topp ">
        <img src={logo} className="headerImage1" alt="" />
        
       
        <img src={profile} className="headerProfile1" alt="" />
        <p id="headText" >Sierra Ferguson</p>
      <p id="headText2" >s.ferguson@gmail.com</p>  
        </div>

        </div>
        </div>
  )
}

export default Header2