import { useState } from "react";
import logoAccount from "../assets/circle-user-solid.svg";
import { supabase } from "../supabase/client";

export default function IconUser() {
  const [show, setShow] = useState(false);

  const handleClickSignOut = () => supabase.auth.signOut();

  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className={`w-8 h-8 cursor-pointer ${
          show ? "border-2 border-white rounded-full" : ""
        } `}
      >
        <img src={logoAccount} />
      </div>

      <ul
        className={`${
          show
            ? "absolute -right-0 shadow-md mt-3 border py-1 border-gray-border rounded-md w-[190px] z-10 bg-white"
            : "hidden "
        } `}
      >
        <li
          className="li-image-setting"
          onClick={() => console.log("Your Perfil")}
        >
          Your Profile
        </li>
        <li
          className=" li-image-setting"
          onClick={() => console.log("Setting")}
        >
          Settings
        </li>
        <li className="li-image-setting" onClick={() => handleClickSignOut()}>
          Sign Out
        </li>
      </ul>
    </div>
  );
}
