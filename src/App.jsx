import { Tiptap } from "./components/Tiptap";
import "./App.css";
import { useState } from "react";
import parse from 'html-react-parser';

function App() {
    const [content, setContent] = useState("");
    return (
        <div className="app">
            <Tiptap setContent={setContent}/>
            <div>
                {parse(content)}
            </div>
        </div>
    );
}

export default App;
