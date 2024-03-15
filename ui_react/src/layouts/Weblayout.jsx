import React from 'react'
import Navbar from '../components/Public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'
const Weblayout = () => {
  return (
    <>
    <div className='h-screen w-screen p-0 m-0 flex flex-col'>
        <Navbar />
        <div>
            <Outlet/>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Weblayout