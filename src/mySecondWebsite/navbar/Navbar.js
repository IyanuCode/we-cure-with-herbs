import React, { useState } from 'react'
import "./Navbar.css";
import { AiFillAlipayCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import {Link} from "react-router-dom";


export const Navbar = () => {
  // This is for responsive menu icon
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <nav> 
        <div className="navbarLogo">
          <div><AiFillAlipayCircle size={80} color='red'/></div>
          <li>
            <Link to="/">chanweiyan</Link>
          </li>
        </div>
        
        <div className="menu-nav">

          <div className="menu-icon" onClick={handleClick}>
              <span>{click ?<FaTimes  color='red'size={35} /> :<GiHamburgerMenu color='red'size={35}/>}</span>
          </div>
            <ul className={click? "navbar" : "navbar active"}> 
            {/* <ul className='navbar'> */}
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/aboutUs"> About Us</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
                <li><Link to="/meet-us"> Meet Us</Link></li>
                <li><Link to="/register"> Register</Link></li>
                <li><Link to="/login"> Login</Link></li>
            </ul>
         
        </div>
    </nav>
  )
}
