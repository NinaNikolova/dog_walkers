import React from 'react';
import './Footer.css';

export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo512.png" alt="Morty logo" className="footer-logo-img" />
          <span>Run With Morty</span>
        </div>
        <div className="footer-text">
          {language === 'bg' ? '© 2025 Всички права запазени' : '© 2025 All rights reserved'}
        </div>
      </div>
    </footer>
  );
}