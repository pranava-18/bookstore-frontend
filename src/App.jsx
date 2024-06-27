import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import './index.css'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'
import Home from './home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from './courses/Courses'

function App() {
  return (
    <div className='container mx-0 md:pl-10 px-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />

      </Routes>   
    </div>
  )
}

export default App
