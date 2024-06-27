import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import './index.css'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'

function home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <FreeBook/>
        <Footer />
    </div>
  )
}

export default home
