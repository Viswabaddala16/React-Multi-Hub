import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav style={{padding: "20px",background: "#e58a8aff",display:"flex",gap:"15px",justifyContent:"center"}}>
        <NavLink to="/" className={({isActive}) => (isActive? "active-link" : "link")}>Home</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive? "active-link" : "link")}>Contact Us</NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive? "active-link" : "link")}>About</NavLink>
      </nav>
      
    </div>
    
  )
}

export default Header;