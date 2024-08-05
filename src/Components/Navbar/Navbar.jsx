import React, { useState } from 'react'
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
        <div>
        <i className="fa-solid fa-bars" onClick={handleNavbarOpen}></i>
      {open? (
         <div className="mobil-nav">
         <ul>
            <li>جميع القوالب</li>
            <li>صفحات الهبوط</li>
            <li> موقع للشركات</li>
            <li>موقع شخصي</li>
            <li>أخرى</li>
          </ul>
         </div>
     ):null}
        </div>
              <div>
              <img src={imgLogo} alt="logo Image" />
              </div>
              <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
        <div className="nav-top">
          <form>
          <i class='bx bx-search'></i>
          <input type="text" placeholder='إبحث'/>
          </form>
        </div>
      </div>
    </nav>
    <div className="pages">
      <div className="container">
      <ul>
        <li>جميع القوالب</li>
        <li>صفحات الهبوط</li>
        <li> موقع للشركات</li>
        <li>موقع شخصي</li>
        <li>أخرى</li>
      </ul>
      </div>
    
    </div>
    </>
  )
}

export default Navbar
