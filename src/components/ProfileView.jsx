import React from 'react';
import './ProfileView.css';

export default function ProfileView({ language }) {
  const handleLogout = () => {
    alert(language === 'bg' ? 'Излязохте от профила!' : 'You have logged out!');
    // Add actual log-out logic here (e.g., clearing tokens, redirecting)
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6l56cC0s4sjp7p-17JHH7mLrdBCJXfslL_2px2wdau8sXlvKTAXZl5luP1meB1xbbGE&usqp=CAU"
            alt="ivan"
          />
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
            <strong>{language === 'bg' ? 'Професия' : 'Profession'}:</strong>{' '}
            {language === 'bg' ? 'Програмист' : 'Developer'}
          </li>
          <li className="details-item">
            <strong>{language === 'bg' ? 'Адрес' : 'Address'}:</strong>{' '}
            {language === 'bg' ? 'София' : 'Sofia'}
          </li>
          <li className="details-item">
            <strong>{language === 'bg' ? 'Куче' : 'Dog'}:</strong>{' '}
            {language === 'bg' ? 'Рекс' : 'Rex'}
          </li>
        </ul>
      </div>
      <div className="profile-actions">
        <button className="logout-button" onClick={handleLogout}>
          {language === 'bg' ? 'Изход' : 'Log Out'}
        </button>
      </div>
    </div>
  );
}
