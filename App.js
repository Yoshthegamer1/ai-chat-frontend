import React, { useState } from 'react';
import Chat from './Chat';
import PersonaSelect from './PersonaSelect';
import { sendMessage } from './api';

function App() {
  const [messages, setMessages] = useState([]);
  const [persona, setPersona] = useState('Zira');

  const handleSend = async (text) => {
    const res = await sendMessage(text, persona);
    setMessages([...messages, { role: 'user', text }, { role: 'ai', text: res.reply }]);
  };

  return (
    <div>
      <PersonaSelect persona={persona} setPersona={setPersona} />
      <Chat messages={messages} onSend={handleSend} />
    </div>
  );
}

export default App;
