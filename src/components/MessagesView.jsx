import React from 'react';
import './MessagesView.css';

export default function MessagesView({ language }) {
  return (
    <div className="messages-container">
      <div className="messages-header">
        <h2 className="messages-title">
          {language === 'bg' ? 'Съобщения' : 'Messages'}
        </h2>
      </div>
      <div className="messages-list">
        <div className="message-item">
          <div className="message-avatar">
          <img src="https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg" alt="person" />
          </div>
          <div className="message-content">
            <h3 className="message-sender">
       
            
         
   
              {language === 'bg' ? 'Георги Димитров' : 'George Dimitrov'}
            </h3>
            <p className="message-text">
              {language === 'bg' ? 'Здравейте! Кога да взема Макс?' : 'Hi! When should I pick up Max?'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
