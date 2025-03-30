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
import { BarChart, Payments, LocalAtm, Description } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const investments = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    investmentValue: "$54,000",
    returnValue: "+16%",
    returnColor: "#22c55e",
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    investmentValue: "$25,300",
    returnValue: "-4%",
    returnColor: "#ef4444",
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    investmentValue: "$8,200",
    returnValue: "+25%",
    returnColor: "#22c55e",
  },
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
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Responsive Icons Section */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {/* Total Invested Amount */}
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
                    bgcolor: "#22c55e",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <LocalAtm sx={{ color: "#ffffff", fontSize: "28px" }} />
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
                    bgcolor: "#ec4899",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <BarChart sx={{ color: "#ffffff", fontSize: "28px" }} />
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
                    bgcolor: "#3b82f6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Payments sx={{ color: "#ffffff", fontSize: "28px" }} />
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
          <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 4, mb: 4 }}>
            {/* Yearly Total Investment Title */}
            <Box sx={{ width: isMobile ? "100%" : "48%" }}>
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

            {/* Monthly Revenue Title */}
            <Box sx={{ width: isMobile ? "100%" : "52%" }}>
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
          <Grid container spacing={3}>
            {/* My Investment Section */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                My Investment
              </Typography>
              <Box display="flex" flexDirection="column" sx={{ flexGrow: 1 }}>
                {investments.map((investment, index) => (
                  <Card
                    key={index}
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
                      component="img"
                      src={investment.logo}
                      alt={investment.name}
                      sx={{ width: 40, height: 40, mr: 2, flexShrink: 0 }}
                    />
                    <Box flexGrow={1} sx={{ overflow: "hidden" }}>
                      <Typography fontWeight={600} noWrap>
                        {investment.name}
                      </Typography>
                      <Typography color="gray" fontSize={14} noWrap>
                        {investment.category}
                      </Typography>
                    </Box>
                    <Box flex={1} textAlign="center" sx={{ px: 1 }}>
                      <Typography fontWeight={600} noWrap>
                        {investment.investmentValue}
                      </Typography>
                    </Box>
                    <Box textAlign="right" sx={{ minWidth: 60 }}>
                      <Typography 
                        color={investment.returnColor} 
                        fontSize={14}
                        noWrap
                      >
                        {investment.returnValue}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* Trending Stocks Section */}
            <Grid item xs={12} md={7}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Trending Stocks
              </Typography>
              <Card sx={{ borderRadius: 1, boxShadow: 1, p: 2 }}>
                <Box component="table" width="100%" borderCollapse="collapse">
                  <Box component="thead">
                    <Box component="tr" bgcolor="#f5f7fa">
                      <Box 
                        component="th" 
                        textAlign="left" 
                        px={2} 
                        py={1}
                        sx={{ display: isMobile ? "none" : "table-cell" }}
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}