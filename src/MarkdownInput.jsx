import React, { useState } from 'react';

function MarkdownInput({ onSave }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSaveClick = () => {
      onSave({ title, text });
      setTitle('');
      setText('');
    };
  
    return (
      <div className="bottom-container">
        <input className="input-field" value={title} onChange={handleTitleChange} placeholder="Titre" /><br></br>
        <textarea className="input-field" value={text} onChange={handleTextChange} placeholder="Ecrit ton texte" /><br></br>
        <button onClick={handleSaveClick}>Sauvegarder</button>
      </div>
    );
  }

export default MarkdownInput;
