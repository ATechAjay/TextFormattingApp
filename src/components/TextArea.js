import "./TextArea.css";
// function TextArea(props) {

//     return (
//         // <div className="textArea" contenteditable="true">
//         <textarea className="textArea" placeholder="Paste here..." onChange={(e) => props.handleCount(e)}>
//         </textarea>
//     )
// }

// export default TextArea;

import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

function TextArea(props) {
  const modules = {
    toolbar: [
      [
        {
          header: [1, 2, 3, 4, 5, 6, false],
        },
        "bold",
        "italic",
        "underline",
        { color: [] },
        { background: [] },
        { list: "ordered" },
        { list: "bullet" },
        { align: [] },
        "clean",
      ],
    ],
  };
  const theme = "snow";
  const placeholder = "Paste here...";
  const { quill, quillRef } = useQuill({ modules, placeholder, theme });
  const [value, setValue] = useState();

  React.useEffect(
    function () {
      if (quill) {
        quill.on("text-change", function () {
          setValue(quillRef.current.firstChild.innerHTML);
        });
      }
    },
    [quill]
  );
  // console.log(value, "TTTTT");
  return (
    // <div className="textArea" style={{ width: 500, height: 400 }}>
    <div className='textArea'>
      <div ref={quillRef} onBlur={(e) => props.handleCount(e)}></div>
    </div>
  );
}

export default TextArea;
