// import ReactDOM from "react-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Container from "./Container"

// ReactDOM.render(<Container />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container />
    </React.StrictMode>
);