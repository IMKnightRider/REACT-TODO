import logo from './logo.svg';
import './App.css';
import Todo from "./Components/Todo"
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [todos, setTodos] = useState([{
    title: "I am",
    desc: "Here"
  }, {
    title: "I am Today",
    desc: "Here is Coming"
  }])

  const addNew = (t, d) => {
    setTodos([...todos, {
      title: t,
      desc: d
    }])

  }

  const onDelete = (todo) => {
    console.log("Done")
    console.log(todo)
    setTodos(todos.filter((e)=>{
      return e !== todo
    }))
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>This an Simple Todo App</h1>
      <h2>Enter Title</h2>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <h2>Enter Desc</h2>
      <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={() => addNew(title, desc)}>Add a New One</button>
      {
        todos.map((todo, i) => {
          return <Todo key={i} todo={todo} onDelete={onDelete} />
        })
      }
    </div>
  );
}

export default App;
