

import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom'
import './Navbar.css'
import imgLogo from '../../assets/images/5.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavbarOpen = () => {
      setOpen(!open)
  }

  const handleLinkClick = () => {
      setOpen(false)
  }

  return (
    <>
    <nav>
      <div className='container navbar'>
        <div className='disNon'>
        <i className="fa-solid fa-bars" onClick={handleNavbarOpen}></i>
      {open ? (
         <div className="mobil-nav disNon">
         <ul>
           <li><NavLink to="/Qalib/"className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end onClick={handleLinkClick}>الرئسية</NavLink></li>
           <li><NavLink to="/Qalib/LandingPage"className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end onClick={handleLinkClick}>صفحات الهبوط</NavLink></li>
           <li><NavLink to="/Qalib/WebsitesTemplate" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end onClick={handleLinkClick}>قالب للشركات</NavLink></li>
           <li><NavLink to="/Qalib/PersonalTemplate" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end onClick={handleLinkClick}>قالب شخصي</NavLink></li>
           <li><NavLink to="/Qalib/OtherTemplate"className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end onClick={handleLinkClick}>أخرى</NavLink></li>
         </ul>
         </div>
     ) : null}
        </div>
              <div>
                <NavLink to="/Qalib/">
                <img src={imgLogo} alt="logo Image" />
                </NavLink>
              </div>
              <div>
              <i class="fa-solid fa-magnifying-glass disNon"></i>
              </div>
        <div className="nav-top">
          <form>
          <i class='fa-solid fa-magnifying-glass'></i>
          <input type="text" placeholder='إبحث'/>
          </form>
        </div>
      </div>
    </nav>
    <div className="pages">
      <div className="container">
      <ul>
      <li><NavLink to="/Qalib" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'}end>الرئيسية</NavLink></li>
      <li><NavLink to="/Qalib/LandingPage" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'} end>صفحات الهبوط</NavLink></li>
      <li><NavLink to="/Qalib/WebsitesTemplate" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'} end>قالب للشركات</NavLink></li>
      <li><NavLink to="/Qalib/PersonalTemplate" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'} end>قالب  شخصي</NavLink></li>
      <li><NavLink to="/Qalib/OtherTemplate" className={({ isActive }) => isActive ? 'active-navItem custom-navlink' : 'custom-navlink'} end>أخرى</NavLink></li>
      </ul>
      </div>
    
    </div>
    </>
  )
}

export default Navbar
