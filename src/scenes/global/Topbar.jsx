import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
import SectionBox from "../../components/SectionBox";
import ControlBox from "../../components/ControlBox";
import {
  Search as SearchIcon,
  SunLight as LightModeOutlinedIcon,
  HalfMoon as DarkModeOutlinedIcon,
  Bell as NotificationsOutlinedIcon,
  BellNotification as NotificationsAlertOutlinedIcon,
  Settings as SettingsOutlinedIcon,
  User as PersonOutlinedIcon,
} from 'iconoir-react'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="end" p={2}>
      {/* SEARCH BAR */}
      <ControlBox
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon width={'20px'} strokeWidth={'2'}/>
        </IconButton>
      </ControlBox>

      {/* ICONS */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon width={'25px'} strokeWidth={'1.7'}/>
          ) : (
            <LightModeOutlinedIcon width={'25px'} strokeWidth={'1.7'}/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
          {/* <NotificationsAlertOutlinedIcon width={'25px'} strokeWidth={'1.7'} /> */}
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
        </IconButton>
    </Box>
  );
};

export default Topbar;
