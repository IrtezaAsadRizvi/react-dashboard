import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import ControlBox from "../../components/ControlBox";
import ProgressRing from "../../components/ProgressRing";
import {
    Search as SearchIcon,
    SunLight as LightModeOutlinedIcon,
    HalfMoon as DarkModeOutlinedIcon,
    Bell as NotificationsOutlinedIcon,
    BellNotification as NotificationsAlertOutlinedIcon,
    Settings as SettingsOutlinedIcon,
    User as PersonOutlinedIcon,
} from 'iconoir-react'
import ImageIcon from "../../components/ImageIcon";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="end" p={2}>
            {/* SEARCH BAR */}
            {/* <ControlBox
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon width={'20px'} strokeWidth={'2'} />
                </IconButton>
            </ControlBox> */}

            {/* ICONS */}
            {/* <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
                ) : (
                    <LightModeOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
                )}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon width={'25px'} strokeWidth={'1.7'} />
            </IconButton> */}
            <ProgressRing
                percent={75}
                startColor="#FAADA9"
                endColor="#DCD5F2"
                width={90}
                height={90}
                strokeWidth={10}
                cx={45}
                cy={45}
                r={30}
                transitionDuration={0.3}
                rotation="-90deg"
                strokeLinecap="round"
                content={
                    <ImageIcon
                        name="user-face-male"
                        height="32px"
                        width="32px"
                    />
                }
            />
        </Box>
    );
};

export default Topbar;
