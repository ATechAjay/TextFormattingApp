import "./TextArea.css"
function TextArea(props) {

    return (
        // <div className="textArea" contenteditable="true">
        <textarea className="textArea" placeholder="Paste here..." onChange={(e) => props.handleCount(e)}>
        </textarea>
    )
}

export default TextArea;