import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_CHATGPT_BACKEND_URL}/api/message`, { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat with GPT</h1>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
        <p>Response: {response}</p>
      </header>
    </div>
  );
}

export default App;