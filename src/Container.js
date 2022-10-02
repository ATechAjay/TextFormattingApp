
import "./Container.css"
import Menu from "../src/components/Menu";
import TextArea from "./components/TextArea";
import Count from "./components/Count";
import { useState } from "react";


function Container() {
    const [letterCount, setCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    const handleCount = (event) => {
        setCount(event.target.value.length);
        let str = event.target.value;
        let arr = str.split(' ');
        let totalWord = arr.filter(word => word !== '').length
        setWordCount(totalWord);
    }


    return (
        <main className="container">
            <Menu />
            <TextArea handleCount={handleCount} />
            <Count letterCount={letterCount} wordCount={wordCount} />
        </main>
    )
}

export default Container;