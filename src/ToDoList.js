import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDoList, handleToggle, handlerFilter }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handlerFilter={handlerFilter} />
                )
            })}
            <button style={{ margin: "20px" }} onClick={handleToggle}>Clear Completed</button>
        </div>
    )
}
export default ToDoList