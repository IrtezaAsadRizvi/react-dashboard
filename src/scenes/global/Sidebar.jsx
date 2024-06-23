import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import SectionBox from "../../components/SectionBox";

import { 
  HomeAlt as HomeOutlinedIcon, 
  Menu as MenuIcon, 
  Group as PeopleOutlinedIcon,
  UserSquare as ContactsOutlinedIcon,
  Map as MapOutlinedIcon,
  Timer as TimelineOutlinedIcon,
  OnePointCircle as PieChartIcon,
  Calendar as CalendarTodayOutlinedIcon,
  User as PersonOutlinedIcon,
  PrintingPage as InvoiceIcon,
  InfoCircle as InfoOutlineIcon,
  Reports as BarChartOutlinedIcon,
  Xmark as CloseIcon
 } from "iconoir-react";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography
        variant="h5"
        className="condensed"
        sx={{ color: colors.text[0] }}
      >{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        ".pro-sidebar.collapsed": {
          width: '120px !important',
          minWidth: '120px !important',
        },
        "& .pro-sidebar-inner": {
          background: 'transparent',
          height: '90vh',
          top: '50%',
          transform: 'translateY(-50%)',
          '&:after': {
            content: '""',
            width: '100%',
            height: '100%',
            backgroundColor: "transparent",
            position: 'absolute',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            boxShadow: 'inset 0 0 0 200px rgba(255,255,255,0.05)',
            zIndex: '-1',
            opacity: '0.5',
            borderRadius: '30px'
          },
        },
        "& .pro-icon-wrapper": {
          height: '60px !important',
          width: '60px !important',
          minWidth: '60px !important',
          borderRadius: '25px !important',
          backgroundColor: "transparent !important",
          display: "flex !important",
          justifyContent: "center !important",
          alignItems: "center !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          marginBottom: "20px"
        },
        "& .pro-inner-item:hover, & .pro-inner-item:active": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active .pro-icon-wrapper": {
          backgroundColor: "rgba(255, 255, 255, 0.3) !important",
        },
        "& .pro-icon, & .pro-menu-item": {
          colors: colors.text[0] + ' !important',
        },
        "& .pro-icon svg": {
          height: '32px',
          width: '32px'
        },
        ".pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item:hover .pro-icon-wrapper .pro-icon": {
            animation: "none !important"
        }
      }}
    >
      <ProSidebar 
        collapsed={isCollapsed}
        >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon strokeWidth="1"/> : <CloseIcon strokeWidth="1"/>}
            style={{
              margin: "10px 0 20px 0",
              color: colors.text[0] + ' !important',
            }}
          >
          </MenuItem>

          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<InvoiceIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<InfoOutlineIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon strokeWidth="1"/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
