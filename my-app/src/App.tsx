import React , {useState} from 'react';
import './App.css';
import { ITask } from "./Interfaces";

const App : React.FC = () =>  {
  const [task,setTask] = useState<string>("");
  const [deadline , setDeadline]  = useState<number>(0);
  const [todoList, setTodoList] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };


    return (
    <div className="App">
      <div className="container">
        <h1 className="header">TodoList App</h1>
        <input type="text" placeholder="Task" className="place" name:"task" value={task} onChange={handleChange} />
          <div>
        <input type="number" placeholder="Deadline" className="deadline" name:"deadline" value={deadline} onChange={handleChange} />
        </div>
          <div>
          <button type="submit" className="btn">Add Task</button>
          </div>
         <div className="todoList">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
