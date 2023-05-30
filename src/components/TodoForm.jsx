import { useState } from 'react'

const TodoForm = ({addTodo}) => {

   const [value, setValue] = useState("") //titulo
   const [category, setCategory] = useState("")  //categoria

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!value || !category ) return
      addTodo(value, category)
      setValue("")
      setCategory("")
   }

  return (
    <div>
      <h2>Criar tarefa:</h2>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
               <option>Selecione uma categoria</option>
               <option value="Pessoal">Pessoal</option>
               <option value="Música">Música</option>
               <option value="Estudos" >Estudos</option>
               <option value="Atividade">Atividade</option>
               <option value="Outras">Outras</option>
            </select>
            <button type="submit">Criar Tarefa</button>
         </form>
    </div>
  )
}

export default TodoForm