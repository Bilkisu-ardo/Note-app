import { useContext, useEffect, useState } from "react";
import NotePreview from "../components/NotePreview";
import Input from "../components/Input";
import AppContext from "../contexts/AppContent";

const Notes = () => {
  const { notes } = useContext(AppContext);
  const [notesToRender, setNotesToRender] = useState([]);

  useEffect(() => {
    setNotesToRender(notes);
  }, [notes]);

  const handleChange = (e) => {
    setNotesToRender(
      notes.filter((n) =>
        n.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="page rotobo">
      <Input
        showNewLink
        onChange={handleChange}
        placeholder="Search for note"
      />
      {!notes.length && <h3 className="norecent">You have no recent notes</h3>}
      <div className="notes-list">
        {notesToRender.map(({ title, createdAt, id }, idx) => (
          <NotePreview
            key={idx}
            title={title}
            lastEditted={createdAt}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
