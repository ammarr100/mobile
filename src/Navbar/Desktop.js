import React from 'react'
import { NavLink } from 'react-router-dom'

const Desktop = () => {
  return (
    <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </>
  )
}

export default Desktop