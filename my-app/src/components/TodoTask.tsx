import React from "react" ;
import {ITask} from "../Interfaces";
import {BsTrash2Fill , BsPencil } from "react-icons/bs";


interface Props {
   task:ITask;
   deleteTask(taskNameToDelete:string) : void ;
}
const TodoTask = ({task , deleteTask}:Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button className="delete" onClick={()=>{deleteTask(task.taskName)}}><BsTrash2Fill/></button>
            <button className="edit"><BsPencil/></button>
        </div>)
}
export default TodoTask;