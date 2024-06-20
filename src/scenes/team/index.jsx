import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import SectionBox from "../../components/SectionBox";
import { BrightCrown, UserBadgeCheck, User } from "iconoir-react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            pl="20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="transparent"
            borderRadius="4px"
          >
            {access === "admin" && <BrightCrown color={colors.primary[0]} />}
            {access === "manager" && <UserBadgeCheck />}
            {access === "user" && <User />}
            <Typography 
              flexGrow={1}
              color={
              access === "admin"
              ? colors.primary[0]
              : access === "manager"
              ? colors.text[0]
              : colors.text[0]
            } sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <SectionBox m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        p="30px"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.text[0],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.background.sectionBox,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: 'transparent',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.background.sectionBox,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.text[1]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </SectionBox>
  );
};

export default Team;
