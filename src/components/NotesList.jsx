import Note from "./Note.jsx"
import AddNote from "./AddNote.jsx"
function NotesList({ notes, handleAddNote, handleDeleteNote }){
    return(
       <div className="notes-list">
            {notes.map((note)=>(
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
       </div>
    )

}
export default NotesList