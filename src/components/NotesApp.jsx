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
    }
  }

  render() {
    return <>
      <Navbar />
      <NoteAppBody notes={this.state.notes}/>
      <NoteAppFooter />
    </>;
  }
}

export default NotesApp;
