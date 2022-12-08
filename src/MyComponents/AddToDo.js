import React, {useState} from 'react';

export const AddToDo = ({addToDo}) => {
    const [title, setTitle] =useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();

        if (!title || !desc){
            window.alert("Title Or Description Can't be Blank...");
        }
        addToDo(title, desc);

    }
    return (
        <div className="container">
            <h3 className="text-center">Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label htmlFor="toDoName" className="todo-label">Task</label>
                    <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}
                    } className="form-control" id="toDoName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="toDoDescription" className="description-label">Description</label>
                    <input type="text" value={desc} onChange={(e) =>{setDesc(e.target.value)}} className="form-control" id="toDoDescription"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success btn-style">Submit</button>
            </form>
        </div>
    )
}