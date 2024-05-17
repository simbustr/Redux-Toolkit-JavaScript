import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className='nav-bar'>
         <Link to="/dasboard">Home</Link>
         <Link to="/users">user</Link>
         <Link to="/services">service</Link>
    </div>
  )
}

export default Layout
