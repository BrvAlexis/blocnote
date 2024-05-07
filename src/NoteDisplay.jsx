import React from 'react';
import Showdown from 'showdown';

function NoteDisplay({ markdownText }) {
  const converter = new Showdown.Converter();
  const htmlContent = converter.makeHtml(markdownText);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default NoteDisplay;
