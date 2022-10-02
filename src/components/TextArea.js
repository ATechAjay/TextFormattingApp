import "./TextArea.css"
import { useState } from "react"

function TextArea() {
          const [count, setCount] = useState(0);
          // setCount("Hello")

          let countChar = (event) => {
                    setCount(event.target.value.length);
          }

          console.log(count);

          return (
                    // <div className="textArea" contenteditable="true">
                    <textarea className="textArea" placeholder="Paste here..." onChange={countChar}>
                    </textarea>
          )
}

export default TextArea;