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
      <div>
        <input value={title} onChange={handleTitleChange} placeholder="Note Title" />
        <textarea value={text} onChange={handleTextChange} placeholder="Note Content" />
        <button onClick={handleSaveClick}>Save</button>
      </div>
    );
  }

export default MarkdownInput;
