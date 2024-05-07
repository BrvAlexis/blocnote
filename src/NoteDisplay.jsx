import React from 'react';
import Showdown from 'showdown';

function NoteDisplay({ note }) {
    const converter = new Showdown.Converter();
    const htmlContent = converter.makeHtml(note.text);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  }

export default NoteDisplay;
