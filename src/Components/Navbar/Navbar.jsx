import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import imgLogo from '../../assets/images/5.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavbarOpen = () => {
      setOpen(!open)
  }
  return (
    <>
    
    <nav>
      <div className='container navbar'>
        <div className='disNon'>
        <i className="fa-solid fa-bars" onClick={handleNavbarOpen}></i>
      {open? (
         <div className="mobil-nav disNon">
         <ul>
            <li>جميع القوالب</li>
            <li><Link to="/Qalib/LandingPage">صفحات الهبوط</Link></li>
            <li><Link to="/Qalib/CompanyWebsites">قالب للشركات</Link></li>
            <li><Link to="/Qalib/PersonalTemplate">قالب  شخصي</Link></li>
            <li>أخرى</li>
          </ul>
         </div>
     ):null}
        </div>
              <div>
              <img src={imgLogo} alt="logo Image" />
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
      <li><Link to="/Qalib/CompanyWebsites">قالب للشركات</Link></li>
      <li><Link to="/Qalib/PersonalTemplate">قالب  شخصي</Link></li>
        <li>أخرى</li>
      </ul>
      </div>
    
    </div>
    </>
  )
}

export default Navbar
