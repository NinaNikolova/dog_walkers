import React, { useState } from 'react';
import './SettingsView.css';

export default function SettingsView({ language }) {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const handleThemeChange = (event) => {
    setTheme(event.target.value);

  };

  return (
    <div className={`settings-container ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2 className="settings-title">
        {language === 'bg' ? 'Настройки' : 'Settings'}
      </h2>

      <div className="settings-section">
        <h3 className="settings-section-title">
          {language === 'bg' ? 'Тема' : 'Theme'}
        </h3>
        <div className="settings-option">
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            {language === 'bg' ? 'Светла' : 'Light'}
          </label>
        </div>
        <div className="settings-option">
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            {language === 'bg' ? 'Тъмна' : 'Dark'}
          </label>
        </div>
      </div>

      <div className="settings-section">
        <button className="settings-reset-button" onClick={() => setTheme('light')}>
          {language === 'bg' ? 'Възстанови по подразбиране' : 'Reset to Default'}
        </button>
      </div>
    </div>
  );
}
