import React from "react";
import '../App.css'

export const TodoItem = ({todo, onDelete}) =>{

    return (
        <div className="todoItem">
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button type="button" className="btn btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}