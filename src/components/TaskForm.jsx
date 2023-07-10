import { useState } from "react";

import { useTask } from "../context/TaskContext";
import { toast } from "react-toastify";

export default function TaskForm() {
  const [task,setTask] = useState('');

  const {createTask} = useTask();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    
    if(task.length != 0 ){
      createTask(task);
      setTask('');
    }
    else toast.error('Campo Vacio')
  }


  return <div className="container">
    <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center mt-2">
      <input type="text" value={task} name="taskName" placeholder="Write Task Name" onChange={(evt) => setTask(evt.target.value)} className="input-custom "/>
      <button className="button-custom bg-blue-500 hover:bg-blue-A100 ml-2">Add to Task</button>
    </form>
  </div>;
}
