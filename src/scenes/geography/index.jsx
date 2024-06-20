import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import SectionBox from "../../components/SectionBox";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <SectionBox
        height="70vh"
      >
        <GeographyChart />
      </SectionBox>
    </Box>
  );
};

export default Geography;
