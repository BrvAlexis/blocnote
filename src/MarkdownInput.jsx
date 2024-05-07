import React, { useState } from 'react';

function MarkdownInput({ onSave }) {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    const handleSaveClick = () => {
      onSave(text);
      setText('');
    };
  
    return (
      <div>
        <textarea value={text} onChange={handleChange} />
        <button onClick={handleSaveClick}>Save</button>
      </div>
    );
  }

export default MarkdownInput;
