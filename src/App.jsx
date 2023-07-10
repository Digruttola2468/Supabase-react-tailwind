import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import TaskProvider from "./context/TaskContext";

import { supabase } from "./supabase/client";

import { Routes, Route, useNavigate } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  const navegate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((evt, session) => {
      console.log(evt, session);
      if (!session) navegate("/login");
      else navegate("/");
    });
  }, []);

  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verifyYourEmail" element={<VerifyEmail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
