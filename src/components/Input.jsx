const Input = ({ placeholder, onChange }) => {
    return (<div className="input">
        <input onChange={onChange} placeholder={placeholder} />
    </div>)
}

export default Input
