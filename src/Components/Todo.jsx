import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function Todo({ todo, onDelete, onUpdate }) {
    const mode = useContext(themeContext);
    
        return (
            <div style={{ "border": `2px solid ${mode=="dark" ? "black": "white"} `, "margin": "20px", "width": "300px", "padding": "13px" }} >
                <h3>{todo.title}</h3>

                <h5>{todo.desc}</h5>
                <button onClick={() => onDelete(todo)}>Don't need Whtever!</button>
                <button onClick={() => onUpdate(todo)}>Oops! Want to change it</button>
            </div>
        )
    
}

export default Todo;