import React from 'react'

import Course from '../components/Course'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'


function Courses() {
    
  return (
    <>
    <NavBar/>
    <div className='min-h-screen'>
        <Course/>
    </div>
    
    <Footer/>
    
    </>
  )
}

export default Courses