import { useState } from "react";
import "./TodoList.css"
function ToDoList(){

    const[task,setTask] = useState(["Eat breakfast", "take a  shower ","walk the dog"])
    const[newTask,setNewTask] = useState("")

    
    function InputChange(event){
        setNewTask(event.target.value);
    }

    function addtask(){
        
        if(newTask.trim()!==""){
        setTask(t =>[...t,newTask]);
        setNewTask("")
        }
        
    }
    

    function deletetask(index){
        const updatedtask = task.filter((_,i) => i!==index);
        setTask(updatedtask)
    }
    


    function movetaskup(index){

        if (index>0){
            const updatedtask = [...task];
            [updatedtask[index],updatedtask[index-1]] = [updatedtask[index-1],updatedtask[index]]

            setTask(updatedtask);
        }
    }

    function movetaskdown(index){

            if (index<task.length - 1){
            const updatedtask = [...task];
            [updatedtask[index],updatedtask[index+1]] = [updatedtask[index+1],updatedtask[index]]

            setTask(updatedtask);
        }

    }

    return(
        <div className="To-Do-List">

            <h1 className="title">To DO List</h1>

            <div>
                <input type="text" placeholder="Enter A Task" onChange={InputChange} value={newTask} />
                <button className="add-btn" onClick={addtask}>ADD ➕</button>

            </div>

            <ol>
                {task.map((task,index)=>
                <li key={index}>
                    <span className="text"> {task}</span>
                    <button className="delete-btn" onClick={()=>deletetask(index)}>Delete</button>
                    <button className="up-btn" onClick={()=>movetaskup(index)}>☝</button>
                    <button className="down-btn" onClick={()=>movetaskdown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList