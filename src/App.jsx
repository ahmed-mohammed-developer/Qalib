import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import NavbarMobail from './Components/Navbar/NavbarMobail'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import EShop from './Components/EShop/EShop'

const App = () => {
  return (
    <div>
      <Navbar />
      <NavbarMobail />
      <BrowserRouter>
      <Routes>
        <Route path="/Qalib" element={<h1>جميع القوالب</h1>} />
        <Route path="/Qalib/LandingPage" element={<LandingPage />} />
        <Route path="/Qalib/EShop" element={<EShop />} />
        <Route path="*" element={<Navigate to="/Qalib/" />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App