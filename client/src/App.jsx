// run using 'npm run dev' in client folder

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
    .then((response) => response.json())
    .then((data)=> setTodos(data))
    .catch((err)=> console.log(err));
  }, []);

  return (
    <>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {todos.map((todo)=>(
          <li key={todo.id} style={{ marginTop: "10px"}}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: "pointer"}}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
