import React, { useState, useEffect } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import NoteList from './NoteList';
import './Styles.css';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNewNote = () => {
    setSelectedNoteId(null); // Réinitialise la note sélectionnée
  };

  const handleSave = (note) => {
    if (selectedNoteId) {
      handleUpdate(note);
    } else {
      const newNote = { id: Date.now(), ...note };
      setNotes([newNote, ...notes]);
    }
  };

  const handleUpdate = (note) => {
    setNotes(notes.map((n) => (n.id === selectedNoteId ? { ...n, ...note } : n)));
  };


  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (id === selectedNoteId) {
      setSelectedNoteId(null);
    }
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <div className="App">
        <div className="note-list">
          <NoteList notes={notes} onSelectNote={setSelectedNoteId} onNewNote={handleNewNote} />
        </div>
        <div className="note-display">
          {selectedNote && <NoteDisplay note={selectedNote} onDelete={handleDelete} />}
          <MarkdownInput onSave={handleSave} note={selectedNote} />
        </div>
    </div>
  );
}

export default App;
