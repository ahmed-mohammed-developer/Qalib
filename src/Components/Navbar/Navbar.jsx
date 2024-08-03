import React from 'react'
import './Navbar.css'
import imgLogo from '../../assets/images/2.png'

const Navbar = () => {
  return (
    <nav>
      <div className='container navbar'>
            <img src={imgLogo} alt="logo Image" />
        <div className="nav-top">
            <li>الرئيسية</li>
            <li>الأقسام</li>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
