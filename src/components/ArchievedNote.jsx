import React from 'react';

// import component
import NoteList from './NoteList';
import NoteListEmptyMessage from './NoteListEmptyMessage';

function ArchievedNote({ notes }) {
  return (
    <>
      <h2>Arsip</h2>
      {
        notes.length !== 0
          ? <NoteList notes={notes}/>
          : <NoteListEmptyMessage />
      }
    </>
  );
}

export default ArchievedNote;
