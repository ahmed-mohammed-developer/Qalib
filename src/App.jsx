import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import LandingPage from './Components/LandingPage/LandingPage'
import EShop from './Components/EShop/EShop'
import Details from './Components/Details/Details'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Qalib/" element={<Home />} />
        <Route path="/Qalib/LandingPage" element={<LandingPage />} />
        <Route path="/Qalib/EShop" element={<EShop />} />
        <Route path="/Qalib/Details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/Qalib/" />} />
      </Routes>
      <ScrollToTop smooth
    top="300"
    color='white'
    height='20'
    width='20'
    style={{borderRadius:"90px", backgroundColor:"#2d2f31"}}
    />
    </BrowserRouter>
    </div>
  )
}

export default App