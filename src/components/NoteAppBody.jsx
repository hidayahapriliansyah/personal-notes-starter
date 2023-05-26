import React from 'react';

// components
import ActiveNote from './ActiveNote';
import InputNote from './InputNote';
import ArchievedNote from './ArchievedNote';

function NoteAppBody({ notes }) {
  const activeNote = notes.filter((note) => note.archived === false );
  const archivedNote = notes.filter((note) => note.archived === true );

  return (
    <div className="note-app__body">
      <InputNote />
      <ActiveNote notes={activeNote}/>
      <ArchievedNote notes={archivedNote}/>
    </div>
  );
}

export default NoteAppBody;
