import { useState } from 'react'
import NotePreview from "../components/NotePreview"
import Input from '../components/Input'

const defaultNotes = [
  {
    title: 'Note 1',
    createdAt: new Date().toString(),
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: 'Note 2',
    createdAt: new Date().toString(),
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: 'Note 3',
    createdAt: new Date().toString(),
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: 'Note 4',
    createdAt: new Date().toString(),
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
]



const Notes = () => {
  const [notes, setNotes] = useState(defaultNotes)
  const [notesToRender, setNotesToRender] = useState(defaultNotes)

  const handleChange = e => {
    setNotesToRender(notes.filter((n) => n.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  
    return (
      <div className="notes-page rotobo">
        <Input onChange={handleChange} placeholder="Search for note" />
        {notesToRender.map(({ title, createdAt }, idx) => <NotePreview key={idx} title={title} lastEditted={createdAt} />)}
      </div>
    )
}

export default Notes