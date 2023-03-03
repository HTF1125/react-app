import { useState } from "react";
import { useContext } from "react";
import { reach } from "yup";
import { AppContext } from "../App";




export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
