import React from 'react';

export default function PersonaSelect({ persona, setPersona }) {
  const personas = ['Zira', 'Kai', 'AnyNameYouWant'];

  return (
    <select value={persona} onChange={e => setPersona(e.target.value)}>
      {personas.map(p => (
        <option key={p} value={p}>{p}</option>
      ))}
    </select>
  );
}
