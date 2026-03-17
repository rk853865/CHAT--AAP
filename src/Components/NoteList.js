import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, deleteNote, editNote }) {
  return (
    <div className="list">
      {notes.length === 0 ? (
        <p>No notes yet...</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;