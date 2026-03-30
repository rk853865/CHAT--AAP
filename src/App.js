import React, { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      time: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Note
  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  return (
    <div className="app">
      <h1>📝 Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;