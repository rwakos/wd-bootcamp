import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNote] = useState([]);

  const addNote = (note) => {
    setNote([...notes, note]);
  };

  const handleDelete = (id) => {
    setNote(prevItems => {
      return prevItems.filter((note) => {
        return note.id !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      { notes.map((note) => (
        <Note 
        key={note.id} 
        id={note.id}
        title={note.title} 
        content={note.content}
        handleDelete={handleDelete}
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
