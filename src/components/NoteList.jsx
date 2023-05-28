import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote }) {
  
  return (
    <>
      <div className="notes-list">
        {
          notes.map((note, index) => {
            const { id, title, body, createdAt, archived } = note;
            return (
              <NoteItem key={index} id={id} title={title} body={body} createdAt={createdAt} archived={archived} onDeleteNote={onDeleteNote}/>
            )
          })
        }
      </div>
    </>
  );
}

export default NoteList;
