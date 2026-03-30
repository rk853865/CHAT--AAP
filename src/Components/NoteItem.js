import React, { useState } from "react";

function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleSave = () => {
    if (!newText.trim()) return;
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
          <button className="edit-btn" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <small>{note.time}</small>
        </>
      )}

      <div className="actions">
        <button
          className="delete-btn"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>

        <button
          className="edit-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default NoteItem;