import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo_original.png';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logoImg} alt="Mosaic Trading Logo" className="logo-img" />
          <span className="company-name">{t('nav.brand_name')} <br /><span>{t('nav.brand_suffix')}</span></span>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li
            onMouseEnter={() => setDropdown('about')}
            onMouseLeave={() => setDropdown(null)}
            className="has-dropdown"
          >
            <Link to="/about">{t('nav.about')} ▾</Link>
            {dropdown === 'about' && (
              <ul className="dropdown-menu">
                <li><Link to="/about">{t('nav.story')}</Link></li>
                <li><Link to="/leadership">{t('nav.leadership')}</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/services">{t('nav.services')}</Link></li>
          <li
            onMouseEnter={() => setDropdown('sectors')}
            onMouseLeave={() => setDropdown(null)}
            className="has-dropdown"
          >
            <span>{t('nav.sectors')} ▾</span>
            {dropdown === 'sectors' && (
              <ul className="dropdown-menu">
                <li><Link to="/hospital">{t('nav.medical')}</Link></li>
                <li><Link to="/industrial">{t('nav.industrial')}</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">{t('nav.contact')}</Link></li>
        </ul>

        {/* Controls */}
        <div className="nav-controls">
          <button className="icon-btn" onClick={toggleLanguage} title="Switch Language" aria-label="Toggle Language">
            {language === 'en' ? 'አ' : 'EN'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme" aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link to="/contact" className="btn-primary">{t('nav.connect')}</Link>
          <button className="hamburger-btn" onClick={() => setMenuOpen(prev => !prev)} aria-label="Open Menu">
            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
          <Link to="/about" onClick={closeMenu}>{t('nav.story')}</Link>
          <Link to="/leadership" onClick={closeMenu}>{t('nav.leadership')}</Link>
          <Link to="/services" onClick={closeMenu}>{t('nav.services')}</Link>
          <Link to="/hospital" onClick={closeMenu}>{t('nav.medical')}</Link>
          <Link to="/industrial" onClick={closeMenu}>{t('nav.industrial')}</Link>
          <Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link>
          <div className="mobile-controls">
            <button className="icon-btn" onClick={toggleLanguage}>{language === 'en' ? '🇪🇹 አማርኛ' : '🇬🇧 English'}</button>
            <button className="icon-btn" onClick={toggleTheme}>{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
