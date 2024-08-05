import React from 'react'
import './Navbar.css'
import imgLogo from '../../assets/images/5.png'

const Navbar = () => {
  return (
    <>
    
    <nav>
      <div className='container navbar'>
            <img src={imgLogo} alt="logo Image" />
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
