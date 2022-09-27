import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../contexts/AppContent";

function ViewNote(props) {
  const [noteToView, setNoteToView] = useState(null);
  const { notes } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const note = notes.find((n) => n.id === id);
    if (!note) navigate(-1);
    setNoteToView(note);
    // eslint-disable-next-line
  }, [id, notes]);

  if (!noteToView) return <div className="page rotobo"></div>;

  return (
    <div className="page view-note rotobo">
      <h2>{noteToView.title}</h2>
      <p>{noteToView.content}</p>
      <span>Create At: {noteToView.createdAt}</span>
    </div>
  );
}

export default ViewNote;
