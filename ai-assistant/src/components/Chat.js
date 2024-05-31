import React from 'react';

function Chat({ userInput, onInputChange, onEnterPress, aiResponse }) {
  return (
    <div className="chat-container">
      <input
        type="text"
        value={userInput}
        onChange={onInputChange}
        onKeyDown={onEnterPress}
        placeholder="Ask Genie anything..."
      />
      {aiResponse && <p className="ai-response">{aiResponse}</p>}
    </div>
  );
}

export default Chat;
