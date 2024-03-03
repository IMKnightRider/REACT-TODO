import './App.css';
import Todo from "./Components/Todo"
import { useState } from 'react';
import { themeContext } from "./Context/themeContext";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useState([])

  const addNew = (t, d) => {
    setTodos([...todos, {
      title: t,
      desc: d
    }])

  }

  const onDelete = (todo) => {
    console.log("Done")
    console.log(todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }



  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    setMode((mode === "light") ? "dark" : "light")
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <div className="App">
      <themeContext.Provider value={mode}>

        <h1>Hello World</h1>
        <input type='checkbox' onClick={toggleMode} /> <span>Toggle {mode}</span>
        <h1>This an Simple Todo App</h1>
        <h2>Enter Title</h2>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <h2>Enter Desc</h2>
        <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button onClick={() => addNew(title, desc)}>Add a New One</button>
        {
          todos.length === 0 ? <h3>No Todos Add For Yourself</h3> :
          todos.map((todo, i) => {
            return <Todo key={i} todo={todo} onDelete={onDelete} />
          })
        }
      </themeContext.Provider>
    </div>
  );
}

export default App;
