import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';  // Ensure you're using 'Link' from react-router-dom

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if menu is open

  const handleScrollToStores = () => {
    // Scroll to the element with id "sales-office"
    const salesOfficeSection = document.getElementById('sales-office');
    if (salesOfficeSection) {
      salesOfficeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Menu */}
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a href="#" onClick={handleScrollToStores} className={menu === 'stores' ? 'active' : ''}>stores</a>
        <Link to='/who-we-are' onClick={() => setMenu('who-we-are')} className={menu === 'who-we-are' ? 'active' : ''}>who we are</Link>
        <Link to="/products" onClick={() => setMenu('products')} className={menu === 'products' ? 'active' : ''}>products</Link>
        <Link to="/join-us">join us</Link>
        <a href='#footer' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>contact us</a>
      </ul>
    </div>
  );
};

export default Navbar;
