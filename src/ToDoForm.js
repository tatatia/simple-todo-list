import React, { useState } from 'react'

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
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task" />
            <button>Submit</button>
        </form>

    )
}
export default ToDoForm