import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'
function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
     <CreateTodo></CreateTodo>
     <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
