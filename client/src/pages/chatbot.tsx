// client/src/pages/Chatbot.tsx
import React, { useState } from 'react';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([{ text: 'Welcome! How can I help?', sender: 'bot' }]);
  const [newMessage, setNewMessage] = useState('');

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <div
      className={`chatbot-window ${isMinimized ? 'minimized' : ''}`}
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        height: '400px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="chatbot-header">
        <h2>Codeium Chat</h2>
        <button onClick={handleMinimize}>
          {isMinimized ? '+' : '-'}
        </button>
      </div>
      {isMinimized ? (
        <div className="minimized-chatbot">
          <p>Codeium Chat</p>
        </div>
      ) : (
        <div className="chatbot-content" style={{ flex: 1, overflowY: 'auto' }}>
          <div className="messages">
            {messages.map((message, index) => (
              <p key={index} className={`message ${message.sender}`}>
                {message.text}
              </p>
            ))}
          </div>
        </div>
      )}
      {!isMinimized && (
        <form onSubmit={handleSendMessage} style={{ padding: 10, borderTop: '1px solid #ccc' }}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            style={{
              width: '100%',
              padding: 10,
              border: '1px solid #ccc',
              borderRadius: 10,
            }}
          />
          <button
            type="submit"
            style={{
              padding: 10,
              border: 'none',
              borderRadius: 10,
              cursor: 'pointer',
              marginTop: 10,
            }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Chatbot;