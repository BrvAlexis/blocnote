import React, { useState } from 'react';

function MarkdownInput({ onSave }) {
  const [text, setText] = useState(() => {
    // Récupérer les données du localStorage lors du chargement de l'application
    return localStorage.getItem('blocNote') || '';
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveClick = () => {
    // Sauvegarder le texte en Markdown dans le localStorage
    localStorage.setItem('blocNote', text);
    onSave(text);
    console.log(localStorage.getItem('blocNote'));
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default MarkdownInput;
