import React from 'react'
// import { useState } from 'react';
import logo from '../../assets/Long Logo.svg'
import './Navbar.css'

function Navbar() {

  return (
<div className='MainNav'>
 <div className='Nav'>
 <div className='logo'>
        <img src={logo} alt='..' width='100%' height='100%'/>
      </div>
      <div>
        <ul className='NavLink'>
            <li className='Link'><a href='/'>NEWS</a></li>
            <li className='Link'><a href='/'>ODDS</a></li>
            <li className='Link'><a href='/'>SCORES</a></li>
            <li className='Link'><a href='/'>TIPS</a></li>
            <li className='Link'><a href='/'>BOOkMAKERS</a></li>
            
        </ul>
      </div>
 </div>
    </div>
  )
}

export default Navbar
