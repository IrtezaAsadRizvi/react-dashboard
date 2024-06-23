import { Box, IconButton, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressRing from "../../components/ProgressRing";
import SectionBox from "../../components/SectionBox";
import ImageIcon from "../../components/ImageIcon";
import {
    Download as DownloadOutlinedIcon
} from 'iconoir-react'

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionBox
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}

                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="12,361"
                            subtitle="Emails Sent"
                            increase="+14%"
                            icon={
                                <ImageIcon
                                    name="email-plane"
                                    height="32px"
                                    width="32px"
                                />
                            }
                        />
                    </SectionBox>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionBox
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="431,225"
                            subtitle="Sales Obtained"
                            increase="+21%"
                            icon={
                                <ImageIcon
                                    name="sales-pie"
                                    height="32px"
                                    width="32px"
                                />
                            }
                        />
                    </SectionBox>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionBox
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="32,441"
                            subtitle="New Clients"
                            increase="+5%"
                            icon={
                                <ImageIcon
                                    name="user-male"
                                    height="32px"
                                    width="32px"
                                />
                            }
                        />
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SectionBox
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="1,325,134"
                            subtitle="Traffic Received"
                            increase="+43%"
                            icon={
                                <ImageIcon
                                    name="traffic"
                                    height="32px"
                                    width="32px"
                                />
                            }
                        />
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionBox
                        gridColumn="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box
                            p="30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    color={colors.text[0]}
                                    variant="h5"
                                    className="condensed"
                                    fontWeight="600"
                                >
                                    Revenue Generated
                                </Typography>
                                <Typography
                                    color={colors.text[0]}
                                    variant="h3"
                                    className="condensed"
                                    fontWeight="600"
                                >
                                    $59,342.32
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton>
                                    <DownloadOutlinedIcon
                                        sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                            <LineChart isDashboard={true} />
                        </Box>
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SectionBox
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            colors={colors.grey[100]}
                        >
                            <Typography
                                color={colors.text[0]}
                                variant="h5"
                                className="condensed"
                                fontWeight="600"
                                sx={{ padding: "30px 30px 20px 30px" }}
                            >
                                Recent Transactions
                            </Typography>
                        </Box>
                        <Box
                            height="270px"
                            overflow="auto"
                        >
                            {mockTransactions.map((transaction, i) => (
                                <Box
                                    key={`${transaction.txId}-${i}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    // borderBottom={`1px solid ${colors.text[3]}`}
                                    sx={{ padding: "10px 30px 10px 30px" }}
                                >
                                    <Box>
                                        <Typography
                                            color={colors.text[0]}
                                            textTransform="uppercase"
                                            className="condensed"
                                        >
                                            {transaction.user}
                                        </Typography>
                                    </Box>
                                    <Box color={colors.text[2]} alignSelf="center">{transaction.date}</Box>
                                    <Box
                                        backgroundColor={colors.background.sectionBoxInner}
                                        p="5px 10px"
                                        className="condensed"
                                        fontSize="18px"
                                        borderRadius="10px"
                                    >
                                        ${transaction.cost}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SectionBox
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        height="100%"
                    >
                        <Typography
                            color={colors.text[0]}
                            variant="h5"
                            className="condensed"
                            fontWeight="600"
                            sx={{ padding: "30px 30px 0 30px" }}
                        >
                            Campaign
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mt="25px"
                        >
                            <ProgressRing
                                percent={125}
                                startColor="#FAADA9"
                                endColor="#DCD5F2"
                                width={120}
                                height={120}
                                strokeWidth={10}
                                cx={60}
                                cy={60}
                                r={40}
                                transitionDuration={0.3}
                                rotation="-90deg"
                                strokeLinecap="round"
                                content={''}
                            />
                            <Typography
                                variant="h5"
                                color={colors.greenAccent[500]}
                                sx={{ mt: "15px" }}
                            >
                                $48,352 revenue generated
                            </Typography>
                            <Typography>Includes extra misc expenditures and costs</Typography>
                        </Box>
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SectionBox
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        height="100%"
                    >
                        <Typography
                            color={colors.text[0]}
                            variant="h5"
                            className="condensed"
                            fontWeight="600"
                            sx={{ padding: "30px 30px 0 30px" }}
                        >
                            Sales Quantity
                        </Typography>
                        <Box height="250px" mt="-20px">
                            <BarChart isDashboard={true} />
                        </Box>
                    </SectionBox>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SectionBox
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        height="100%"
                    >
                        <Typography
                            color={colors.text[0]}
                            variant="h5"
                            className="condensed"
                            fontWeight="600"
                            sx={{ padding: "30px 30px 0 30px" }}
                        >
                            Geography Based Traffic
                        </Typography>
                        <Box height="200px" transform="translateY(20px)">
                            <GeographyChart isDashboard={true} />
                        </Box>
                    </SectionBox>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
