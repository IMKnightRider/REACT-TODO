import React from "react";

function Todo({ todo, onDelete }) {
    return (
    <div style={{"border":"2px solid black", "margin": "20px" ,"width":"300px", "padding": "13px"}} >
        <h3>{todo.title}</h3>
        <h5>{todo.desc}</h5>
        <button onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}

export default Todo;