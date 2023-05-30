import { useState } from 'react'

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

  return (
    <div className='app'>
      <h1>Lista de tarefas:</h1>
        <div className='todo-list'>
          {todos.map ((todo) => (
            <div className='todo'>
              <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
              </div>
              <div>
                <button>Completar</button>
                <button>X</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App
