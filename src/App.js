import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

function App() {
  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped)
  }

  const handlerFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, { id: toDoList.lenght + 1, task: userInput, complete: false }]
    setToDoList(copy)
  }


  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handlerFilter={handlerFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
