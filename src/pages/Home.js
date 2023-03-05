import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
  const {
    data: catData,
    isLoading,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact")
      .then((res) => res.data);
  });
  const { username } = useContext(AppContext);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <h1>
      THIS IS THE HOME PAGE {username}
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update</button>
    </h1>
  );
};
