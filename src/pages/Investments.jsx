"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Icon Imports
import moneyBag from "../assets/images/icons/money-bag.svg";
import pieChart from "../assets/images/icons/pie-chart 1.svg";
import repeat from "../assets/images/icons/repeat 1.svg";
import appleIcon from "../assets/images/icons/apple.svg";
import samsungMobile from "../assets/images/icons/Google.svg";
import teslaMotors from "../assets/images/icons/Tesla.svg";

// Sample data for charts
const yearlyInvestmentData = [
  { year: "2016", amount: 5000 },
  { year: "2017", amount: 22000 },
  { year: "2018", amount: 16000 },
  { year: "2019", amount: 35000 },
  { year: "2020", amount: 20000 },
  { year: "2021", amount: 28000 },
];

const monthlyRevenueData = [
  { month: "Jan", revenue: 3000 },
  { month: "Feb", revenue: 4000 },
  { month: "Mar", revenue: 3500 },
  { month: "Apr", revenue: 5000 },
  { month: "May", revenue: 4500 },
  { month: "Jun", revenue: 6000 },
  { month: "Jul", revenue: 7000 },
  { month: "Aug", revenue: 8000 },
  { month: "Sep", revenue: 7500 },
  { month: "Oct", revenue: 9000 },
  { month: "Nov", revenue: 8500 },
  { month: "Dec", revenue: 9500 },
];

const trendingStocks = [
  {
    id: "01",
    name: "Trivago",
    price: "$520",
    returnValue: "+5%",
    returnColor: "#22c55e",
  },
  {
    id: "02",
    name: "Canon",
    price: "$480",
    returnValue: "+10%",
    returnColor: "#22c55e",
  },
  {
    id: "03",
    name: "Uber Food",
    price: "$350",
    returnValue: "-3%",
    returnColor: "#ef4444",
  },
  {
    id: "04",
    name: "Nokia",
    price: "$940",
    returnValue: "+2%",
    returnColor: "#22c55e",
  },
  {
    id: "05",
    name: "Tiktok",
    price: "$670",
    returnValue: "-12%",
    returnColor: "#ef4444",
  },
];

export default function BankDashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        {/* Dashboard Content */}
        <Container maxWidth="xl" sx={{ py: 4, px: isMobile ? 2 : 4 }}>
          {/* Responsive Icons Section */}
          <Grid
            container
            spacing={2}
            sx={{
              mb: 4,
              justifyContent: isMobile ? "center" : "space-between",
              maxWidth: isMobile ? "375px" : "none",
              margin: isMobile ? "0 auto" : "initial",
            }}
          >
            {/* Total Invested Amount */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  p: 3,
                  boxShadow: 2,
                  height: "100%",
                  minHeight: 90,
                }}
              >
                <Box
                  sx={{
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#DCFAF8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={moneyBag}
                    alt="Total Invested"
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    variant="body1"
                    color="#b8c6df"
                    sx={{ fontWeight: 600, whiteSpace: "nowrap" }}
                  >
                    Total Invested
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    $150,000
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Number of Investments */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  p: 2,
                  boxShadow: 2,
                  height: "100%",
                  minHeight: 90,
                }}
              >
                <Box
                  sx={{
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#FFE0EB",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={pieChart}
                    alt="Investments"
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    variant="body1"
                    color="#b8c6df"
                    sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                  >
                    Investments
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    1,250
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Rate of Return */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  p: 2,
                  boxShadow: 2,
                  height: "100%",
                  minHeight: 90,
                }}
              >
                <Box
                  sx={{
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#E7EDFF",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={repeat}
                    alt="Rate of Return"
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    variant="body1"
                    color="#b8c6df"
                    sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                  >
                    Rate of Return
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    +5.80%
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              mb: 4,
              pt: 4,
              pb: 4,
              maxWidth: isMobile ? "375px" : "none",
              margin: isMobile ? "0 auto" : "initial",
            }}
          >
            {/* Yearly Total Investment */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                color="#333b69"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Yearly Total Investment
              </Typography>
              <Card elevation={0} sx={{ height: "80%", borderRadius: 5 }}>
                <CardContent>
                  <Box sx={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={yearlyInvestmentData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="year" />
                        <YAxis
                          tickFormatter={(value) =>
                            `$${value.toLocaleString()}`
                          }
                        />
                        <Tooltip
                          formatter={(value) => [
                            `$${value.toLocaleString()}`,
                            "Amount",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="amount"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Monthly Revenue */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                color="#333b69"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Monthly Revenue
              </Typography>
              <Card elevation={0} sx={{ height: "80%", borderRadius: 5 }}>
                <CardContent>
                  <Box sx={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis
                          tickFormatter={(value) =>
                            `$${value.toLocaleString()}`
                          }
                        />
                        <Tooltip
                          formatter={(value) => [
                            `$${value.toLocaleString()}`,
                            "Revenue",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#14b8a6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Investments and Stocks Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              maxWidth: isMobile ? "375px" : "none",
              margin: isMobile ? "0 auto" : "initial",
            }}
          >
            {/* My Investment Section */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight={600} mb={2} color="#333b69">
                My Investment
              </Typography>
              <Box display="flex" flexDirection="column" sx={{ flexGrow: 1 }}>
                {/* Apple Store Investment */}
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#FFE0EB",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={appleIcon}
                      alt="Apple Store"
                      sx={{
                        width: 30,
                        height: 30,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box flexGrow={1} sx={{ overflow: "hidden" }}>
                    <Typography fontWeight={600} noWrap>
                      Apple Store
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      E-commerce, Marketplace
                    </Typography>
                  </Box>
                  <Box flex={1} textAlign="center" sx={{ px: 1 }}>
                    <Typography fontWeight={600} noWrap>
                      $54,000
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Envestment Value
                    </Typography>
                  </Box>
                  <Box textAlign="right" sx={{ minWidth: 60 }}>
                    <Typography color="#22c55e" fontSize={14} noWrap>
                      +16%
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Return Value
                    </Typography>
                  </Box>
                </Card>

                {/* Samsung Mobile Investment */}
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#E7EDFF",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={samsungMobile}
                      alt="Samsung Mobile"
                      sx={{
                        width: 30,
                        height: 30,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box flexGrow={1} sx={{ overflow: "hidden" }}>
                    <Typography fontWeight={600} noWrap>
                      Samsung Mobile
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      E-commerce, Marketplace
                    </Typography>
                  </Box>
                  <Box flex={1} textAlign="center" sx={{ px: 1 }}>
                    <Typography fontWeight={600} noWrap>
                      $25,300
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Estimate Value
                    </Typography>
                  </Box>
                  <Box textAlign="right" sx={{ minWidth: 60 }}>
                    <Typography color="#ef4444" fontSize={14} noWrap>
                      -4%
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Return Value
                    </Typography>
                  </Box>
                </Card>

                {/* Tesla Motors Investment */}
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#FFF5D9",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={teslaMotors}
                      alt="Tesla Motors"
                      sx={{
                        width: 30,
                        height: 30,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box flexGrow={1} sx={{ overflow: "hidden" }}>
                    <Typography fontWeight={600} noWrap>
                      Tesla Motors
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Electric Vehicles
                    </Typography>
                  </Box>
                  <Box flex={1} textAlign="center" sx={{ px: 1 }}>
                    <Typography fontWeight={600} noWrap>
                      $8,200
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Estimate Value
                    </Typography>
                  </Box>
                  <Box textAlign="right" sx={{ minWidth: 60 }}>
                    <Typography color="#22c55e" fontSize={14} noWrap>
                      +25%
                    </Typography>
                    <Typography color="gray" fontSize={14} noWrap>
                      Return Value
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Box>

            {/* Trending Stocks Section */}
            <Box sx={{ width: "100%" }}>
              <Typography variant="h6" fontWeight={600} mb={2} color="#333b69">
                Trending Stocks
              </Typography>
              <Card sx={{ borderRadius: 1, boxShadow: 1, p: 2 }}>
                <Box component="table" width="100%" borderCollapse="collapse">
                  <Box component="thead">
                    <Box component="tr" bgcolor="##FFFFFF" color="#718EBF">
                      <Box
                        component="th"
                        textAlign="left"
                        px={2}
                        py={1}
                        sx={{ display: isMobile ? "none" : "table-cell" }}
                        color="#718EBF"
                      >
                        SL No
                      </Box>
                      <Box component="th" textAlign="left" px={2} py={1}>
                        Name
                      </Box>
                      <Box component="th" textAlign="right" px={2} py={1}>
                        Price
                      </Box>
                      <Box component="th" textAlign="right" px={2} py={1}>
                        Return
                      </Box>
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {trendingStocks.map((stock) => (
                      <Box
                        component="tr"
                        key={stock.id}
                        borderBottom="1px solid #ddd"
                      >
                        <Box
                          component="td"
                          px={2}
                          py={1}
                          sx={{ display: isMobile ? "none" : "table-cell" }}
                        >
                          {stock.id}
                        </Box>
                        <Box component="td" px={2} py={1}>
                          {stock.name}
                        </Box>
                        <Box component="td" px={2} py={1} textAlign="right">
                          {stock.price}
                        </Box>
                        <Box
                          component="td"
                          px={2}
                          py={1}
                          textAlign="right"
                          color={stock.returnColor}
                        >
                          {stock.returnValue}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
