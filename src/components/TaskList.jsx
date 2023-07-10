import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { listTask, getTask, loading } = useTask();

  useEffect(() => {
    getTask();
  }, []);

  function renderTasks() {
    if (loading) return <p>Loading...</p>;
    else if (listTask.length === 0) return <p>No Tasks Found</p>;
    else return <TaskCard tasks={listTask} />;
  }

  return <div>{renderTasks()}</div>
}
