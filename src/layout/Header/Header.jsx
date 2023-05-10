import React from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) => isActive ? 'current' : '';
console.log(activeLink);

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
        <nav className='header__nav'>
          <NavLink to="/" className={activeLink}>Home</NavLink>
          <NavLink to="/about" className={activeLink}>About</NavLink>
          <NavLink to="/contacts" className={activeLink}>Contacts</NavLink>
          
        </nav>
        </div>

      </div>
    </div>
  )
}

export default Header;