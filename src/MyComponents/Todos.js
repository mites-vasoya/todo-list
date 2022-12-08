import React from "react";
import {TodoItem} from "./TodoItem";
import '../App.css'
export const Todos = (props) =>{
    return (
        <div className="todoContainer">
            <h3 id="todoContainer">ToDo's List</h3>
            {
                props.todos.length === 0 ? <h2> "No ToDo's There, Enjoy The Day..." </h2>:

                props.todos.map((todo) =>{
                    return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>
                })
            }

        </div>
    )
}