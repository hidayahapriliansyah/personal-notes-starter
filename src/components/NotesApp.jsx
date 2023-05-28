import React, { Component } from 'react';

// import component
import Navbar from './Navbar';
import NoteAppBody from './NoteAppBody';
import NoteAppFooter from './NoteAppFooter';

// import initial data
import { getInitialData } from '../utils';

class NotesApp extends Component {
  constructor() {
    super();
    this.state = {
      notes: getInitialData(),
    };

    this.onInputSearch = this.onInputSearch.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
  }

  onInputSearch(title) {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
    this.setState(() => {
        return {
          notes: title === '' ? getInitialData() : filteredNotes,
        };
    });
  }

  onAddNote({ title, body}) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState(() => {
      return {
        notes: [
          ...this.state.notes,
          newNote,
        ],
      };
    });

    window.alert(`Note ${title} berhasil ditambahkan!`);
  }

  render() {
    return (
      <>
        <Navbar onInputSearch={this.onInputSearch} />
        <NoteAppBody notes={this.state.notes} onAddNote={this.onAddNote}/>
        <NoteAppFooter />
      </>
    );
  }
}

export default NotesApp;
