import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import LandingPage from './Components/LandingPage/LandingPage'
import EShop from './Components/EShop/EShop'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/Qalib" element={<Home />} />
        <Route path="/Qalib/LandingPage" element={<LandingPage />} />
        <Route path="/Qalib/EShop" element={<EShop />} />
        <Route path="*" element={<Navigate to="/Qalib/" />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App