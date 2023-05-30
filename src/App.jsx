import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Rezar",
      category:"Pessoal",
      completa:false,
    },
    {
      id:2,
      text:"Tocar violão",
      category:"Música",
      completa:false,
    },
    {
      id:3,
      text:"Estudar programação",
      category:"Estudos",
      completa:false,
    },
    {
      id:4,
      text:"Fazer caminhada",
      category:"Atividade física",
      completa:false,
    }
  ])

  const addTodo = (text, category) => {

    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      completa: false,
    }
  ]
    setTodos(newTodos)

  }



  return (
    <div className='app'>
      <h1>Lista de tarefas:</h1>
        <div className='todo-list'>
          {todos.map ((todo) => (
             <ToDo key={todo.id} todo={todo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
