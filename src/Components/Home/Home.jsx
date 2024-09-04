import React from 'react'
import Baner from './Baner/Baner'
import Main from './Main/Main'
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>قالب | الرئيسية</title>
      </Helmet>
    <div className='home'>
      <Baner />
      <Main />
    </div>
    </HelmetProvider>
  )
}

export default Home
