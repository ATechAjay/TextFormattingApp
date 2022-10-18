import "./Container.css";
// import Menu from "../src/components/Menu";
import TextArea from "./components/TextArea";
import Count from "./components/Count";
import { useState } from "react";
import Login from "./components/Login";

function Container() {
  const [letterCount, setCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleCount = (event) => {
    // letter count implementation
    setCount(event.target.value.length);

    // Word count implementation
    let str = event.target.value;
    // \n is used for the newline or linefeed, whereas \r is the carriage return.
    str = str
      .replace(/\r\n?|\n/g, " ")
      .replace(/ {2,}/g, " ")
      .replace(/^ /, "")
      .replace(/ $/, "");
    let arr = str.split(" ");
    let totalWord = arr.filter((word) => word !== "").length;
    setWordCount(totalWord);
  };

  return (
    <main className="container">
      <Login />
      <TextArea handleCount={handleCount} />
      <Count letterCount={letterCount} wordCount={wordCount} />
    </main>
  );
}

export default Container;
