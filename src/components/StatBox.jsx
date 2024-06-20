import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" display="flex" justifyContent="space-between" padding="10px">
            <section
                className="flex-center"
                style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '25px',
                    backgroundColor: colors.theme[0]
                }}
            >{icon}</section>
            <Box display="flex" flexDirection="column" mt="2px" flexGrow="1" ml="10px">

            <Typography sx={{ color: colors.text[2] }}>
                        {subtitle}
                    </Typography>
                
                <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    className="condensed"
                    sx={{ color: colors.text[0] }}
                >
                    {title}
                </Typography>
                    <Typography
                        fontWeight="bold"
                        sx={{ color: colors.primary[0] }}
                    >
                        {increase}
                    </Typography>
                </Box>
                
            </Box>
        </Box>
    );
};

export default StatBox;
