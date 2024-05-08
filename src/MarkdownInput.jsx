import React, { useState, useEffect } from 'react';

function MarkdownInput({ onSave, note }) {
  const [title, setTitle] = useState(note ? note.title : '');
  const [text, setText] = useState(note ? note.text : '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setText(note.text);
    } else {
      setTitle('');
      setText('');
    }
  }, [note]);

  const handleSaveClick = () => {
    onSave({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <div className="bottom-container">
      <input className="input-field " value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" />
      <textarea className="input-field " value={text} onChange={(e) => setText(e.target.value)} placeholder="Texte" />
      <button onClick={handleSaveClick}>Sauvegarder</button>
    </div>
  );
}

export default MarkdownInput;