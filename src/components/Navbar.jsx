import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__brand">
        <span className="navbar__initials">AA</span>
        <span className="navbar__name">Ananya Agrawal</span>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
