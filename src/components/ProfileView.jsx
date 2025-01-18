import React from 'react';
import './ProfileView.css';

export default function ProfileView({ language }) {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {/* User avatar */}
        </div>
        <div className="profile-info">
          <h2 className="profile-name">
            {language === 'bg' ? 'Иван Иванов' : 'Ivan Ivanov'}
          </h2>
          <p className="profile-location">
            {language === 'bg' ? 'София, България' : 'Sofia, Bulgaria'}
          </p>
        </div>
      </div>
      <div className="profile-details">
        <h3 className="details-title">
          {language === 'bg' ? 'Детайли' : 'Details'}
        </h3>
        <ul className="details-list">
          <li className="details-item">
            <strong>{language === 'bg' ? 'Професия' : 'Profession'}:</strong> {language === 'bg' ? 'Програмист' : 'Developer'}
          </li>
          <li className="details-item">
            <strong>{language === 'bg' ? 'Адрес' : 'Address'}:</strong> {language === 'bg' ? 'София' : 'sofia'}
          </li>
          <li className="details-item">
            <strong>{language === 'bg' ? 'Куче' : 'Dog'}:</strong> {language === 'bg' ? 'Рекс' : 'Rex'}
          </li>
        </ul>
      </div>
    </div>
  );
}
