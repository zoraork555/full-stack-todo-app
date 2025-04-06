// run using 'npm run dev' in client folder

import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

const API_URL = "http://localhost:5000/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    setTodos(response.data)
  }

  const addTodo = async () => {
    if(text.trim()){
      const response = await axios.post(API_URL, {text});
      setTodos([...todos, response.data]);
      setText("")
    }
    console.log(text);
  };

  const delTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((t)=> t.id !== id));
  };

  return (
    <>
      <input 
      type="text"
      placeholder="Add Todo.."
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>Add</button>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {todos.map((todo)=>(
          <li key={todo.id} style={{ marginTop: "10px" }}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', 
              cursor: "pointer" }}
            >
                {todo.text}
            </span>
            <button onClick={()=> delTodo(todo.id)} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
