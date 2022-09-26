const NotePreview = ({ title, lastEditted }) => {
    return (
        <div className="note">
            <span>{title}</span>
            <span>Created at: { lastEditted }</span>
        </div>
    )
}

export default NotePreview