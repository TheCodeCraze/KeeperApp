import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (noteId) => {
    setNotes((prev) => prev.filter((item, index) => index !== noteId));
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
