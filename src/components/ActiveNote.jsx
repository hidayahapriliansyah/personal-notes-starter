import React from 'react';
import NoteList from './NoteList';
import NoteListEmptyMessage from './NoteListEmptyMessage';

function ActiveNote({ notes, onDeleteNote }) {
  return (
    <>
      <h2>Catata Aktif</h2>
      {
        notes.length !== 0
          ? <NoteList notes={notes} onDeleteNote={onDeleteNote}/>
          : <NoteListEmptyMessage />
      }
    </>
  );
};

export default ActiveNote;
