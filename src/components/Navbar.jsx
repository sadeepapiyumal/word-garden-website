import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoImg from '../assets/Logo.png';
import MultiplayerDemoVideo from '../assets/Videos/Multiplayer Game Demo.mp4';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Problem', path: '/problem' },
    { name: 'Solution', path: '/solution' },
    { name: 'Components', path: '/components' },
    { name: 'Development', path: '/development' },
    { name: 'Research', path: '/research' },
    { name: 'Commercialization', path: '/commercialization' },
    { name: 'Demo Videos', path: '/demo-videos' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={LogoImg} alt="Word Garden Logo" style={{ height: '100px', width: 'auto' }} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section: CTA & Mobile Menu */}
        <div className="navbar-right">
          <a href={MultiplayerDemoVideo} target="_blank" rel="noopener noreferrer" className="btn btn-success nav-cta" style={{ textDecoration: 'none' }}>
            Watch Demo
          </a>
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
