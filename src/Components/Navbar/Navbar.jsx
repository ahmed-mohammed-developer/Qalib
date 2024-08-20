

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
           <li><Link to="/Qalib/" onClick={handleLinkClick}>الرئسية</Link></li>
           <li><Link to="/Qalib/LandingPage" onClick={handleLinkClick}>صفحات الهبوط</Link></li>
           <li><Link to="/Qalib/WebsitesTemplate" onClick={handleLinkClick}>قالب للشركات</Link></li>
           <li><Link to="/Qalib/PersonalTemplate" onClick={handleLinkClick}>قالب شخصي</Link></li>
           <li><Link to="/Qalib/OtherTemplate" onClick={handleLinkClick}>أخرى</Link></li>
         </ul>
         </div>
     ) : null}
        </div>
              <div>
                <Link to="/Qalib/">
                <img src={imgLogo} alt="logo Image" />
                </Link>
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
      <li><Link to="/Qalib/">الرئسية</Link></li>
      <li><Link to="/Qalib/LandingPage">صفحات الهبوط</Link></li>
      <li><Link to="/Qalib/WebsitesTemplate">قالب للشركات</Link></li>
      <li><Link to="/Qalib/PersonalTemplate">قالب  شخصي</Link></li>
      <li><Link to="/Qalib/OtherTemplate">أخرى</Link></li>
      </ul>
      </div>
    
    </div>
    </>
  )
}

export default Navbar
