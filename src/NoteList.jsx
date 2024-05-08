import React from 'react'

function NoteList({ notes, onSelectNote, onNewNote }) {
    return (
      <div>
      <button onClick={onNewNote}>Nouvelle Note</button> {/* Ajoutez ce bouton */}
    <ul>
        {notes.map((note) => (
          <li key={note.id} className="note-item" onClick={() => onSelectNote(note.id)}>
          <h2 className="note-title">{note.title}</h2>
          <p className="note-text">{note.text.substring(0, 15)}...</p>
        </li>
      ))}
    </ul>
    </div>
    );
  }

  export default NoteList;
  