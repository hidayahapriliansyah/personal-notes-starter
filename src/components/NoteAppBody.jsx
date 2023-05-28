import React from 'react';

// components
import ActiveNote from './ActiveNote';
import InputNote from './InputNote';
import ArchievedNote from './ArchievedNote';

function NoteAppBody({ notes, onAddNote, onDeleteNote }) {
  const activeNote = notes.filter((note) => note.archived === false );
  const archivedNote = notes.filter((note) => note.archived === true );

  return (
    <div className="note-app__body">
      <InputNote onAddNote={onAddNote}/>
      <ActiveNote notes={activeNote} onDeleteNote={onDeleteNote}/>
      <ArchievedNote notes={archivedNote} onDeleteNote={onDeleteNote}/>
    </div>
  );
}

export default NoteAppBody;
