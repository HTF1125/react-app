import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
import { App } from "antd";

export const Profile = () => {
  const {username} = useContext(AppContext);


  return (
    <div>
      <h1>{username}</h1>
      <ChangeProfile></ChangeProfile>
    </div>
  );
};
