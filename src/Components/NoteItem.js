import React, { useState } from "react";

function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleEdit = () => {
    editNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <small>{note.time}</small>
        </>
      )}

      <div className="actions">
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
    </div>
  );
}

export default NoteItem;