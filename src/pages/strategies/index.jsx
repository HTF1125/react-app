import { useState, useEffect, useMemo } from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import axios from "axios";
import MaterialReactTable from "material-react-table";
import LineChart from "../../components/LineChart";

const Strategies = () => {
  const [data, setData] = useState([]);
  const client = axios.create({ baseURL: "http://127.0.0.1:8000/api" });
  useEffect(() => {
    client.get("/strategies").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return (
    <Box m="20px">
      <Header title="STRATEGIES" subtitle="Welcome to Strategies" />
      {/* <MaterialReactTable columns={columns} data={data} /> */}
      <Box height="50vh">
        <LineChart data={data} />
      </Box>
    </Box>
  );
};

export default Strategies;
