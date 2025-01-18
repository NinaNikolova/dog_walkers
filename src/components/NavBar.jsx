import React, { useState } from 'react';
import { Calendar, Heart, Home, MapPin, MessageCircle, Settings, User, Wallet } from 'lucide-react';
import './NavBar.css';

export default function NavBar({ currentView, setCurrentView, language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    home: { icon: <Home size={18} />, label: language === 'bg' ? 'Начало' : 'Home' },
    walkers: { icon: <MapPin size={18} />, label: language === 'bg' ? 'Разхождачи' : 'Walkers' },
    schedule: { icon: <Calendar size={18} />, label: language === 'bg' ? 'График' : 'Schedule' },
    messages: { icon: <MessageCircle size={18} />, label: language === 'bg' ? 'Съобщения' : 'Messages' },
    profile: { icon: <User size={18} />, label: language === 'bg' ? 'Профил' : 'Profile' },
    favorites: { icon: <Heart size={18} />, label: language === 'bg' ? 'Любими' : 'Favorites' },
    wallet: { icon: <Wallet size={18} />, label: language === 'bg' ? 'Портфейл' : 'Wallet' },
    settings: { icon: <Settings size={18} />, label: language === 'bg' ? 'Настройки' : 'Settings' }
  };

  const handleNavClick = (key) => {
    setCurrentView(key); // Update the current view
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo"  onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }} >
          <img src="/logo512.png" alt="Morty logo" className="navbar-logo-img" />
          <span className="navbar-title">Run With Morty</span>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        {Object.entries(navItems).map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleNavClick(key)} // Call the handler to close the menu
            className={`nav-button ${currentView === key ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setIsMenuOpen(false); // Close the menu when the language changes
          }}
          className="language-selector"
        >
          <option value="bg">БГ</option>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
}
