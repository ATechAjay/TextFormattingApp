
import "./Container.css"
import Menu from "../src/components/Menu";
import TextArea from "./components/TextArea";
import Count from "./components/Count";
import { useState } from "react";


function Container() {
    const [count, setCount] = useState(0);
    const handleCount = (event) => {
        setCount(event.target.value.length);
    }


    return (
        <main className="container">
            <Menu />
            <TextArea handleCount={handleCount} />
            <Count count={count} />
        </main>
    )
}

export default Container;