import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>

    <div className=' w-full'>
        <NavBar/>
    </div>
    <div className= ' absolute top-16'>
    <Outlet/>
    </div>
    </div>
  )
}

export default Layout