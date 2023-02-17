import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navbar