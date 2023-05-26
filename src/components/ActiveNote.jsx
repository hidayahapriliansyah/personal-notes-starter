import React from 'react';
import NoteList from './NoteList';
import NoteListEmptyMessage from './NoteListEmptyMessage';

function ActiveNote({ notes }) {
  return (
    <>
      <h2>Catata Aktif</h2>
      {
        notes.length !== 0
          ? <NoteList notes={notes}/>
          : <NoteListEmptyMessage />
      }
    </>
  );
};

export default ActiveNote;
