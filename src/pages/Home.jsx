import { useContext, useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import MenuTopBar from '../components/Menu'

export default function Home() {
  const navegar = useNavigate();

  useEffect(() => {
    async function getUserSupabase() {
      const getinfo = await supabase.auth.getUser();
      if (getinfo.data.user == null) navegar("/login");
    }
    getUserSupabase();
  }, [navegar]);

  
  return (
    <>
      <MenuTopBar />
      <main className="flex flex-col justify-center items-center">
        <TaskForm />
        <TaskList />
      </main>
    </>
  );
}
