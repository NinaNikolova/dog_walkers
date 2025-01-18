import React from 'react';
import './SettingsView.css';

export default function SettingsView({ language }) {
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
    </div>
  );
}
