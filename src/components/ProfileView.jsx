import React, { useState } from 'react';
import './ProfileView.css';

export default function ProfileView({ language }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: input },
        { sender: 'bot', text: language === 'bg' ? 'Как мога да помогна?' : 'How can I help you?' },
      ]);
      setInput('');
    }
  };

  const handleLogout = () => {
    alert(language === 'bg' ? 'Излязохте от профила!' : 'You have logged out!');
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

       {/* Chatbot Section */}
       <div className="chatbot-container">
        <h3 className="chatbot-title">{language === 'bg' ? 'Чатбот' : 'Chatbot'}</h3>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${
                message.sender === 'user' ? 'user-message' : 'bot-message'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder={language === 'bg' ? 'Напишете съобщение...' : 'Type a message...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSendMessage}>
            {language === 'bg' ? 'Изпрати' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
