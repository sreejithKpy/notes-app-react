
import React, {useEffect, useState} from "react"
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList"
import Search from "./components/Search.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem('react-notes-app-data');
  return savedNotes ? JSON.parse(savedNotes) : [
    
  ];
});

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false)

  

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-GB')
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
  const deleteNote =(id)=>{
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes)
  }
  
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
      <NotesList notes={notes.filter((note)=>
      note.text.toLowerCase().includes(searchText)
      
      )} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}/>
        
      </div>
    </div>
    
  )
}

export default App
