import React from 'react'

function NoteList({ notes, onSelectNote }) {
    return (
    <ul>
        {notes.map((note) => (
          <li key={note.id} className="note-item" onClick={() => onSelectNote(note.id)}>
          <h2 className="note-title">{note.title}</h2>
          <p className="note-text">{note.text.substring(0, 15)}...</p>
        </li>
      ))}
    </ul>
    );
  }

  export default NoteList;
  