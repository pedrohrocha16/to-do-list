import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

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
      category:"Atividade",
      completa:false,
    }
  ])

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")



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

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id? todo.completa = !todo.completa : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas:</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className='todo-list'>
          {todos
          .filter((todo) => filter === "All"
          ? true
          : filter === 'Completed'
          ? todo.completa
          : !todo.completa
          )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map ((todo) => (
             <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
