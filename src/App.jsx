import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import NoteList from './NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleSave = (note) => {
    const newNote = { id: Date.now(), ...note };
    setNotes([newNote, ...notes]);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <div className="App">
      <NoteList notes={notes} onSelectNote={setSelectedNoteId} />
      {selectedNote && <NoteDisplay note={selectedNote} />}
      <MarkdownInput onSave={handleSave} />
    </div>
  );
}

export default App;
