'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1><span className="yellow"><b><i>HILAL</i></b></span><b><i>PLAY.</i></b></h1>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link href=""><b><i>Home</i></b></Link></li>
        <li><Link href="#series-section" onClick={closeMenu}><b><i>Series</i></b></Link></li>
        <li><Link href="#movies-section" onClick={closeMenu}><b><i>Movies</i></b></Link></li>
        <li><Link href="#kids-section" onClick={closeMenu}><b><i>Kids</i></b></Link></li>
        <li><Link href="#subscribe" onClick={closeMenu}><b><i>Subscribe</i></b></Link></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar3' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
