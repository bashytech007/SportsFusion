import React from 'react'
import { useState } from 'react';
import logo from '../../assets/Long Logo.svg'
import { Outlet, Link } from "react-router-dom";
// import {BsTwitter} from 'react-icons/bs'
// import {BsDiscord} from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
<div className='MainNav'>
 <div className='Nav'>
 <div className='logo'>
        <img src={logo} alt='..' width='100%' height='100%'/>
      </div>
      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
       className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
        <ul>
            <li><Link to='/'>News</Link></li>
            <li><Link to='/odds'>ODDS</Link></li>
            <li><Link to='/scores'>SCORES</Link></li>
            <li><Link to='/tips'>TIPS</Link></li>
            <li><Link to='/bookmaker'>BOOkMAKERS</Link></li>


   
        </ul>

      
      </div>
 </div>
 <Outlet />
    </div>
  )
}

export default Navbar
