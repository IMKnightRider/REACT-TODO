import React from "react";
import { useContext } from "react";
import { themeContext } from "../Context/themeContext";

function Todo({ todo, onDelete, onUpdate }) {
    const mode = useContext(themeContext);
    if (mode === "dark") {
        return (
            <div style={{ "border": "2px solid white", "margin": "20px", "width": "300px", "padding": "13px" }} >
                <h3>{todo.title}</h3>

                <h5>{todo.desc}</h5>
                <button onClick={() => onDelete(todo)}>Delete</button>
            </div>
        )
    }
    else {
        return (
            <div style={{ "border": "2px solid black", "margin": "20px", "width": "300px", "padding": "13px" }} >
                <h3>{todo.title}</h3>

                <h5>{todo.desc}</h5>
                <button onClick={() => onDelete(todo)}>Don't need Whtever!</button>
                <button onClick={() => onUpdate(todo)}>Oops! Want to change it</button>
            </div>
        )
    }
}

export default Todo;