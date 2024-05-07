import React from 'react'

function NoteList({ notes, onSelectNote }) {
    return (
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => onSelectNote(note.id)}>
            {note.text.substring(0, 20)}...
          </li>
        ))}
      </ul>
    );
  }

  export default NoteList;
  