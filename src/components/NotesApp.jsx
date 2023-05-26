import React, { Component } from 'react';

// import component
import Navbar from './Navbar';
import NoteAppBody from './NoteAppBody';

class NotesApp extends Component {
  render() {
    return <>
      <Navbar />
      <NoteAppBody />
    </>;
  }
}

export default NotesApp;
