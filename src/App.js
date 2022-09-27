import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./contexts/AppContent";
import AddNote from "./pages/AddNote";
import Notes from "./pages/Notes";
import ViewNote from "./pages/ViewNote";

function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (body) =>
    setNotes([
      {
        ...body,
        createdAt: new Date().toString().split("+")[0] + " +1",
        id: Math.random().toString().split(".")[1],
      },
      ...notes,
    ]);
  const removeNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  return (
    <AppContext.Provider value={{ notes, addNote, removeNote }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/new" element={<AddNote />} />
          <Route path="/view/:id" element={<ViewNote />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
