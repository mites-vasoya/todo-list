import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from "react";
import {AddToDo} from "./MyComponents/AddToDo";
function App() {
    const onDelete = (todo) =>{
        console.log("On Delete Clicked...", todo);

        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));
    }

    const addToDo = (title, desc) =>{
        console.log("Adding ToDo : ", title, desc);
        let sno;
        sno = todos[todos.length-1].sno +1;
        const myToDo = {
            sno : sno,
            title : title,
            description : desc
        }
        setTodos([...todos, myToDo])
        console.log(myToDo);
    }
    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Task 1",
            description: "This is Task-1"
        },
        {
            sno: 2,
            title: "Task2",
            description: "This is Task-2"
        },
        {
            sno: 3,
            title: "Task 3",
            description: "This is Task-3"
        }
    ]);
  return (
      <>
          <Header title = "NewTitle" newTaskButton = {true}/>
          <AddToDo addToDo = {addToDo}/>
          <Todos todos = {todos} onDelete = {onDelete}/>
          <Footer/>
      </>
  );
}

export default App;
