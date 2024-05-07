import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  const handleSave = (text) => {
    setMarkdownText(text);
  };

  return (
    <div className="App">
      <NoteDisplay markdownText={markdownText} />
      <MarkdownInput onSave={handleSave} />
    </div>
  );
}

export default App;
