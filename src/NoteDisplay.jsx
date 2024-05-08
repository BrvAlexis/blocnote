import React from 'react';
import Showdown from 'showdown';

function NoteDisplay({ note, onDelete }) {
    const converter = new Showdown.Converter();
    const htmlContent = converter.makeHtml(note.text);
    const htmlTitle = converter.makeHtml(note.title);
  
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: htmlTitle }} /> 
        
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button className="button-delete" onClick={() => onDelete(note.id)}>Supprimer</button>
        
      </div>
    );
}

export default NoteDisplay;
