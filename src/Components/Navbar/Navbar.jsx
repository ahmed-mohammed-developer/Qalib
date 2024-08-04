import React from 'react'
import './Navbar.css'
import imgLogo from '../../assets/images/24.png'

const Navbar = () => {
  return (
    <nav>
      <div className='container navbar'>
            <img src={imgLogo} alt="logo Image" />
        <div className="nav-top">
           <input type="text" placeholder='إبحث'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
