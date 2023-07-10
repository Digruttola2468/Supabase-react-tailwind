import { createContext, useContext, useEffect, useState } from "react";

export const TaskContext = createContext();

import { supabase } from "../supabase/client";

//HOOKS
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("UseTasks must be used within in task provider");
  return context;
};

export default function TaskProvider({ children }) {
  const [listTask, setListTask] = useState([]);
  const [loading, setLoading] = useState(true);

  const createTask = async (taskName) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const result = await supabase.from("tasks").insert({
        name: taskName,
        userId: user.id,
      });

      if (result.error) throw error;

      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  const user = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getTask = async () => {
    const usuario = await user();
    if (usuario != []) {
      const { error, data } = await supabase
        .from("tasks")
        .select()
        .eq("userId", usuario.id);

      if (error) throw error;

      setLoading(false);
      setListTask(data);
    }
  };

  const deleteTask = async (id) => {
    const usuario = await user();

    const { error, status } = await supabase
      .from("tasks")
      .delete()
      .eq("userId", usuario.id)
      .eq("id", id);

    if (error) throw error;

    setListTask(listTask.filter((task) => task.id != id));
  };

  const updateTask = async (id, data) => {
    const usuario = await user();
    
    const { error, status } = await supabase
      .from("tasks")
      .update({done: data.done})
      .eq("userId", usuario.id)
      .eq("id", id);
    
    if (error) throw error;

    console.log(status);
    getTask();
  };

  return (
    <TaskContext.Provider
      value={{ listTask, getTask, createTask, loading, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
