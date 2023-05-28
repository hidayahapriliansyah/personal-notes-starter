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
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onChangeArchiveStatus = this.onChangeArchiveStatus.bind(this);
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

  onAddNote({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState(() => {
      return {
        notes: [...this.state.notes, newNote],
      };
    });

    window.alert(`Note ${title} berhasil ditambahkan!`);
  }

  onDeleteNote(id) {
    const targetedNote = this.state.notes.find((note) => note.id === id);
    const decideToDelete = window.confirm(
      `Yakin ingin menghapus catatan ${targetedNote.title}?`
    );
    if (decideToDelete) {
      this.setState(() => {
        return {
          notes: this.state.notes.filter((note) => targetedNote.id !== note.id),
        };
      });
    }
  }

  onChangeArchiveStatus(id) {
    this.setState(() => {
      return {
        notes: this.state.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: !note.archived };
          }
          return note;
        }),
      };
    });
  }

  render() {
    return (
      <>
        <Navbar onInputSearch={this.onInputSearch} />
        <NoteAppBody
          notes={this.state.notes}
          onAddNote={this.onAddNote}
          onDeleteNote={this.onDeleteNote}
          onChangeArchiveStatus={this.onChangeArchiveStatus}
        />
        <NoteAppFooter />
      </>
    );
  }
}

export default NotesApp;
