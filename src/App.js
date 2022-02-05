import React, { Component } from 'react';
import './assets/App.css';
import './assets/index.css'
import NotesList from './components/notes-list/NotesList';
import RegForm from './components/reg-form/RegForm';

class App extends Component{
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  createNote(title, text) {
    const newNote = {title, text};
    const newNotesArray= [...this.state.notes, newNote]
    this.setState({
      notes: newNotesArray
    })
  }
  render(){
    return (
      <div className='content'>
        <RegForm createNote={this.createNote.bind(this)}/>
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
