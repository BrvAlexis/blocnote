import React from 'react';
import Showdown from 'showdown';

function NoteDisplay({ note, onDelete }) {
    const converter = new Showdown.Converter();
    const htmlContent = converter.makeHtml(note.text);
  
    return (
      <div>
        <h2>{note.title}</h2> 
        
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button className="button-delete" onClick={() => onDelete(note.id)}>Supprimer</button>
        
      </div>
    );
}

export default NoteDisplay;
