import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.text[0]}
        fontWeight="bold"
        sx={{ padding: "30px 30px 0px 30px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5"
       color={colors.text[1]}
       sx={{ padding: "10px 30px 0px 30px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
