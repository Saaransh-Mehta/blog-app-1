import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <>
    <div className="navbar bg-cream">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink to={'/'} className="btn btn-ghost text-xl">BLOGIFY</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
        <details>
          <summary>About Us</summary>
          <ul className="p-2">
            <li><NavLink to={'/'}>Submenu 1</NavLink></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end mr-10 gap-5">
    <NavLink to={'/register'} className="btn">Get Start with us</NavLink>
    <NavLink to={'/create-blog'} className="btn btn-primary">Create a Blog</NavLink>
  </div>
</div>
   
    </>
  )
}

export default Navbar