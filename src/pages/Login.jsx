import { useState } from "react";

import { supabase } from "../supabase/client";

import progress from "../assets/progress_activity.svg";
import visibility from "../assets/visibility.svg";
import notVisibility from "../assets/visibility_off.svg";
import logo_supabase from "../assets/logo-supabase.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navegar = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [showEyes, setShowEyes] = useState(false);

  const verifyCampus = () => {
    if (email.length != 0 && password.length != 0) return true;
    else return false;
  };

  const sendSingInSupabase = async () => {
    try {
      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (result.data.user == null) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data.user.identities.length != 0) navegar("/verifyYourEmail");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (verifyCampus()) await sendSingInSupabase();
    else toast.error("Completar campos");

    setLoading(false);
  };

  const handleClick = async () => {
    const { data } = supabase.storage.from("avatars").getPublicUrl("dog.jfif");

    setImage(data.publicUrl);
  };

  return (
    <div className="container mx-auto h-[100vh] grid place-content-center">
      <div className="mb-8">
        <img src={logo_supabase} className="w-[300px]" />
        <p className="text-gray-400 text-center">
          Supabase AUTH + Supabase STORAGE
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center "
      >
        <input
          type="email"
          name="email"
          autoFocus
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
          className="input-custom mb-2"
        />
        <div className="relative">
          <input
            type={showEyes ? "text" : "password"}
            name="password"
            placeholder="*******"
            className="input-custom mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />

          <img
            src={showEyes ? visibility : notVisibility}
            className="w-5 h-5 absolute right-2 top-3"
            onClick={() => setShowEyes(!showEyes)}
          />
        </div>

        <button
          className={`${
            loading ? "" : "hover:bg-blue-500"
          } button-custom `}
          disabled={loading}
        >
          {loading ? (
            <>
              <img src={progress} className="animate-spin h-5 w-5 mr-3" />
            </>
          ) : (
            <></>
          )}
          {loading ? "Sending" : "Send"}
        </button>
      </form>
      <a href="" className="text-center text-gray-400 underline">
        Forgot your password?
      </a>
    </div>
  );
}
