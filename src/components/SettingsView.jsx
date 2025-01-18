import React, { useState } from 'react';
import './SettingsView.css';

export default function SettingsView({ language }) {
  const [fontSize, setFontSize] = useState('medium');

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">
        {language === 'bg' ? 'Настройки' : 'Settings'}
      </h2>

      <div className="settings-section">
        <h3 className="settings-section-title">
          {language === 'bg' ? 'Персонализация' : 'Personalization'}
        </h3>
        <div className="settings-option">
          <label>
            {language === 'bg' ? 'Тъмен режим' : 'Dark Mode'}
            <input type="checkbox" className="settings-toggle" />
          </label>
        </div>
        <div className="settings-option">
          <label>
            {language === 'bg' ? 'Уведомления' : 'Notifications'}
            <input type="checkbox" className="settings-toggle" />
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3 className="settings-section-title">
          {language === 'bg' ? 'Езикови настройки' : 'Language Settings'}
        </h3>
        <select
          className="settings-language-selector"
          defaultValue={language}
        >
          <option value="bg">Български (BG)</option>
          <option value="en">English (EN)</option>
        </select>
      </div>

      <div className="settings-section">
        <h3 className="settings-section-title">
          {language === 'bg' ? 'Размер на шрифта' : 'Font Size'}
        </h3>
        <select
          className="settings-language-selector"
          value={fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="small">{language === 'bg' ? 'Малък' : 'Small'}</option>
          <option value="medium">{language === 'bg' ? 'Среден' : 'Medium'}</option>
          <option value="large">{language === 'bg' ? 'Голям' : 'Large'}</option>
        </select>
      </div>

      <div className="settings-section">
        <button className="settings-reset-button">
          {language === 'bg' ? 'Възстанови по подразбиране' : 'Reset to Default'}
        </button>
      </div>

      <div className="settings-section">
        <button className="settings-save-button">
          {language === 'bg' ? 'Запази' : 'Save'}
        </button>
      </div>
    </div>
  );
}
