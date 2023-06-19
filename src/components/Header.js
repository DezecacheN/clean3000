import React from 'react'
import logo from "../img/logo-clean3000-transparent.png";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div id="header">
            
        <Link to={`/`}>
            <img src={logo} alt="" />
        </ Link>
    </div>
  )
}

export default Header