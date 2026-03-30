import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("⚠️ Please enter a note!");
      return;
    }

    addNote(input);
    setInput("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
        />
        {error && <p className="error">{error}</p>}
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;