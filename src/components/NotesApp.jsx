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

  render() {
    return (
      <>
        <Navbar onInputSearch={this.onInputSearch} />
        <NoteAppBody notes={this.state.notes} />
        <NoteAppFooter />
      </>
    );
  }
}

export default NotesApp;
