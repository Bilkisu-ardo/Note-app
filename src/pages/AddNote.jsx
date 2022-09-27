import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import AppContext from "../contexts/AppContent";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    addNote({ title, content });
    navigate(-1);
  };

  return (
    <div className="page rotobo add-note">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tittle"
      />
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        textarea
      />
      <button onClick={handleClick} className={`btn`} disabled={!title}>
        Save
      </button>
    </div>
  );
}

export default AddNote;
