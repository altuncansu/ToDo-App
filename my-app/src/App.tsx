import React , {useState , FC , ChangeEvent} from 'react';
import "./app.scss";
import {ITask} from "./Interfaces";
import TodoTask from "./components/TodoTask";
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";

const App : FC = () =>  {
     const [task,setTask] = useState<string>(""); //define state with type
     const [deadline , setDeadline]  = useState<number>(0);
     const [todoList, setTodoList] = useState<ITask[]>([]);

 const handleChange = (event : ChangeEvent<HTMLInputElement> ) : void => {
       if(event.target.name === "task") {
           setTask(event.target.value)
       } else {
           setDeadline(Number(event.target.value)) //Change type wrapping with Number + paranthesis
       }
    }
    const addTask = ():void => {
     const newTask = {taskName : task , deadline:deadline}
        setTodoList([...todoList,newTask]) //Adding newTask split on todoList
        setTask("");
        setDeadline(0);
    }
    return (
    <div className="App">
      <div className="container">
        <h1 className="header">TodoList App <FiEdit/></h1>
        <input type="text" placeholder="Task" className="place" name="task" value={task} onChange={handleChange} />
          <div>
        <input type="number" placeholder="Deadline" className="deadline" name="deadline"  value={deadline} onChange={handleChange} />
        </div>
          <div>
          <button type="submit" className="btn">Add Task</button>
          </div>
         <div className="todoList">
             {todoList.map((task:ITask, key : number) => {
                 return <TodoTask key={key} task={task}   />;
             })}
        </div>
      </div>
    </div>
  );
}

export default App;
