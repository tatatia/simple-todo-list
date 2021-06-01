import React, { useState } from 'react'
// import './App.css'
// import Header from './Header'
// import ToDoList from './ToDoList'
// import ToDoForm from './ToDoForm'

const Header = () => {
  return (
      <header>
          <h1>TODO LIST</h1>
      </header>
  )
}

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
      e.preventDefault()
      handleToggle(e.currentTarget.id)
  }
  console.log(todo)
  return (
      <div
          id={todo.id}
          key={todo.id + todo.task}
          name="todo" 
          value={todo.id}
          onClick={handleClick}
          className={todo.complete ? "todo strike" : "todo"}
      >
          {todo.task}
      </div>
  )
}

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {                //обробляє зміни
      setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {// функція спрацює, щоб додати завдання до масиву toDoList.
      e.preventDefault()
      addTask(userInput)
      setUserInput("")
  }

  return (
      <form onSubmit={handleSubmit}>
          <input 
          value={userInput} 
          type="text" 
          onChange={handleChange} 
          placeholder="Enter task..." />
          <button>Submit</button>
      </form>

  )
}

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
      <div>
          {toDoList.map(todo => {
              return (
                  <ToDo 
                      key={todo.id}
                      todo={todo}
                      handleToggle={handleToggle}
                      handleFilter={handleFilter}
                  />
              )
          })}
          <button style={{ margin: "20px" }} onClick={handleFilter}>Clear Completed</button>
      </div>
  )
}

function App() {
  const [toDoList, setToDoList] = useState([])

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }]
    setToDoList(copy)
  }


  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
