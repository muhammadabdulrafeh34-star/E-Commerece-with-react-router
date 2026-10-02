import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='min-h-screen bg-gray-500'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
export default RootLayout
