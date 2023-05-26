import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
  
  return (
    <>
      <div className="notes-list">
        {
          notes.map((note) => {
            const { id, title, body, createdAt, archived } = note;
            return (
              <NoteItem key={id} title={title} body={body} createdAt={createdAt} archived={archived}/>
            )
          })
        }
      </div>
    </>
  );
}

export default NoteList;
