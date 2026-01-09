import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkClass = ({isActive}) => 
    `px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-white text-red-500 shadow-md' : 'text-white hover:bg-red-400'}`;
  
  return (
    <div>
      <nav className='bg-red-500 flex gap-5 p-4 rounded-xl shadow-lg'>
        <NavLink to="/"  className={navLinkClass}>Home</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
      </nav>
      
    </div>
    
  )
}

export default Header;