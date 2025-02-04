import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, Home, MapPin, MessageCircle, Settings, User, Wallet } from 'lucide-react';
import './NavBar.css';

export default function NavBar({ language, setLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    home: { icon: <Home size={18} />, label: language === 'bg' ? 'Начало' : 'Home', path: '/' },
    walkers: { icon: <MapPin size={18} />, label: language === 'bg' ? 'Разхождачи' : 'Walkers', path: '/walkers' },
    schedule: { icon: <Calendar size={18} />, label: language === 'bg' ? 'График' : 'Schedule', path: '/schedule' },
    messages: { icon: <MessageCircle size={18} />, label: language === 'bg' ? 'Съобщения' : 'Messages', path: '/messages' },
    favorites: { icon: <Heart size={18} />, label: language === 'bg' ? 'Любими' : 'Favorites', path: '/favorites' },
    wallet: { icon: <Wallet size={18} />, label: language === 'bg' ? 'Портфейл' : 'Wallet', path: '/wallet' },
    settings: { icon: <Settings size={18} />, label: language === 'bg' ? 'Настройки' : 'Settings', path: '/settings' },
    profile: { icon: <User size={18} />, label: language === 'bg' ? 'Здравей, Иван' : 'Hi, Ivan', path: '/profile' },
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="navbar-logo" style={{ cursor: 'pointer' }}>
          <img src="/logo512.png" alt="Morty logo" className="navbar-logo-img" />
          <span className="navbar-title">Run With Morty</span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        {Object.entries(navItems).map(([key, item]) => (
          <Link key={key} to={item.path} className="nav-button" onClick={() => setIsMenuOpen(false)}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setIsMenuOpen(false);
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
