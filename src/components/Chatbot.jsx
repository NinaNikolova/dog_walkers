import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      // Simulate bot response
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: 'How can I assist you today?' },
      ]);
      setUserInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
