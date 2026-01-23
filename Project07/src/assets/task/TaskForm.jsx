import { useState } from "react";
export const TaskForm =({addTaskList})=>{
    const [task, setTask] = useState("");
    const addTaskTitleHandler =(event) =>{
        event.preventDefault();
        setTask(event.target.value);
    }

    const addTask = (event) =>{
        event.preventDefault();
        console.log("Task Added:", task);
        addTaskList(task);
        setTask("");
        
        

    }
    return(
        
        <>
            <form id="form" className="task-form" >
                <input id="" type="text" placeholder="Task Title" onChange={addTaskTitleHandler} />
                
                <button type="submit" onClick={addTask}>Add Task</button>
            </form>
        </>

    )
}