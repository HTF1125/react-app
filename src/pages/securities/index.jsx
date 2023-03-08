import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import axios from "axios";

const Securities = () => {
  const [data, setData] = useState([]);
  const client = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

  useEffect(() => {
    client.get("/securities").then((response) => {
      setData(response.data);
    });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [

    {
      field: "ticker",
      headerName: "Ticker",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "group",
      headerName: "Group",
      flex: 1,
      renderCell: ({ row: { group } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              group === "Equity"
                ? colors.greenAccent[600]
                : group === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {group === "Equity" && <AdminPanelSettingsOutlinedIcon />}
            {group === "manager" && <SecurityOutlinedIcon />}
            {group === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {group}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "group1",
      headerName: "Group1",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "group2",
      headerName: "Group2",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <Box m="20px">
      <Header title="OVERVIEW" subtitle="Market" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          density="compact"
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Securities;
