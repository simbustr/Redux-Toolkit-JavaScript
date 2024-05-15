import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
         <Link to="/dasboard">Home</Link>
         <Link to="/users">user</Link>
    </div>
  )
}

export default Layout
