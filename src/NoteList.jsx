import React from 'react'

function NoteList({ notes, onSelectNote }) {
    return (
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => onSelectNote(note.id)}>
            {note.title}: {note.text.substring(0, 15)}...
          </li>
        ))}
      </ul>
    );
  }

  export default NoteList;
  