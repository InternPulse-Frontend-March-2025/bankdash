"use client"

import { useState } from "react"
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material"
import { ArrowDownward, ArrowUpward, ChevronLeft, ChevronRight } from "@mui/icons-material"

const Transactions = () => {
  const [tabValue, setTabValue] = useState(0)
  const isMobile = useMediaQuery("(max-width:768px)")

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* My Cards Section */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#343c6a]">My Cards</h2>
            <Button variant="text" className="text-[#1814f3] font-medium" sx={{ color: "#1814f3" }}>
              + Add Card
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Active Card */}
            <Card className="w-full bg-[#1814f3] rounded-xl">
              <CardContent className="p-4 md:p-6 text-white">
                <div className="flex justify-between mb-6 md:mb-8">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Balance</p>
                    <p className="text-xl md:text-2xl font-semibold">$5,756</p>
                  </div>
                  <div className="w-10 h-6">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="24" rx="4" fill="white" fillOpacity="0.2" />
                      <path d="M14 8H26V16H14V8Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between mb-6 md:mb-8">
                  <div>
                    <p className="text-xs opacity-80 mb-1">CARD HOLDER</p>
                    <p className="font-medium">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80 mb-1">VALID THRU</p>
                    <p className="font-medium">12/22</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg tracking-wider">3778 **** **** 1234</p>
                  <div className="flex">
                    <div className="w-6 h-6 bg-white opacity-70 rounded-full -mr-2"></div>
                    <div className="w-6 h-6 bg-white opacity-70 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inactive Card */}
            <Card className="w-full bg-white border border-[#ebeef2] rounded-xl">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between mb-6 md:mb-8">
                  <div>
                    <p className="text-xs text-[#718ebf] mb-1">Balance</p>
                    <p className="text-xl md:text-2xl font-semibold text-[#343c6a]">$5,756</p>
                  </div>
                  <div className="w-10 h-6">
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="24" rx="4" fill="#E4E3E9" />
                      <path d="M14 8H26V16H14V8Z" fill="#C5C5CF" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between mb-6 md:mb-8">
                  <div>
                    <p className="text-xs text-[#718ebf] mb-1">CARD HOLDER</p>
                    <p className="font-medium text-[#343c6a]">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#718ebf] mb-1">VALID THRU</p>
                    <p className="font-medium text-[#343c6a]">12/22</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg tracking-wider text-[#343c6a]">3778 **** **** 1234</p>
                  <div className="flex">
                    <div className="w-6 h-6 bg-[#c5c5cf] opacity-70 rounded-full -mr-2"></div>
                    <div className="w-6 h-6 bg-[#c5c5cf] opacity-70 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Expense Section */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-lg font-semibold text-[#343c6a] mb-4">My Expense</h2>
          <Card className="bg-white border border-[#ebeef2] rounded-xl h-[calc(100%-2rem)]">
            <CardContent className="p-4 md:p-6 relative">
              <div className="flex items-end justify-between h-32 md:h-40 mb-4">
                <div className="w-1/6 h-[30%] bg-[#edf0f7] rounded-t-md"></div>
                <div className="w-1/6 h-[50%] bg-[#edf0f7] rounded-t-md"></div>
                <div className="w-1/6 h-[80%] bg-[#edf0f7] rounded-t-md"></div>
                <div className="w-1/6 h-[60%] bg-[#edf0f7] rounded-t-md"></div>
                <div className="w-1/6 h-[100%] bg-[#16dbcc] rounded-t-md"></div>
                <div className="w-1/6 h-[40%] bg-[#edf0f7] rounded-t-md"></div>
              </div>
              <div className="flex justify-between text-xs text-[#718ebf]">
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
              <div className="absolute top-4 right-4 text-[#343c6a] font-medium">$12,500</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-[#343c6a] mb-4">Recent Transactions</h2>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          className="mb-4"
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#1814f3",
            },
          }}
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              minWidth: "auto",
              padding: "0.75rem 1.5rem",
              color: "#718ebf",
              "&.Mui-selected": {
                color: "#1814f3",
                fontWeight: 500,
              },
            },
            borderBottom: "1px solid #ebeef2",
          }}
        >
          <Tab label="All Transactions" />
          <Tab label="Income" />
          <Tab label="Expense" />
        </Tabs>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <TableContainer component={Paper} className="rounded-xl overflow-hidden">
            <Table>
              <TableHead>
                <TableRow sx={{ "& th": { color: "#718ebf", fontWeight: 500, borderBottom: "1px solid #ebeef2" } }}>
                  <TableCell>Description</TableCell>
                  <TableCell className="hidden md:table-cell">Transaction ID</TableCell>
                  <TableCell className="hidden md:table-cell">Type</TableCell>
                  <TableCell className="hidden md:table-cell">Card</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell className="hidden md:table-cell">Receipt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "& td": { borderBottom: "1px solid #ebeef2" } }}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#edf0f7] flex items-center justify-center">
                        <ArrowUpward className="w-4 h-4 text-[#fe5c73]" />
                      </div>
                      <span className="text-[#343c6a]">Spotify</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">#12548796</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">Shopping</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">1234 ****</TableCell>
                  <TableCell className="text-[#718ebf]">28 Jan</TableCell>
                  <TableCell className="text-[#fe5c73] font-medium">-$2,500</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      variant="outlined"
                      size="small"
                      className="rounded-full"
                      sx={{
                        borderRadius: "9999px",
                        borderColor: "#1814f3",
                        color: "#1814f3",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#1814f3",
                        },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { borderBottom: "1px solid #ebeef2" } }}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#edf0f7] flex items-center justify-center">
                        <ArrowDownward className="w-4 h-4 text-[#16dbaa]" />
                      </div>
                      <span className="text-[#343c6a]">Freepik</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">#12548796</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">Transfer</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">1234 ****</TableCell>
                  <TableCell className="text-[#718ebf]">25 Jan</TableCell>
                  <TableCell className="text-[#16dbaa] font-medium">+$750</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      variant="outlined"
                      size="small"
                      className="rounded-full"
                      sx={{
                        borderRadius: "9999px",
                        borderColor: "#1814f3",
                        color: "#1814f3",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#1814f3",
                        },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { borderBottom: "1px solid #ebeef2" } }}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#edf0f7] flex items-center justify-center">
                        <ArrowUpward className="w-4 h-4 text-[#fe5c73]" />
                      </div>
                      <span className="text-[#343c6a]">Mobile</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">#12548796</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">Service</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">1234 ****</TableCell>
                  <TableCell className="text-[#718ebf]">20 Jan</TableCell>
                  <TableCell className="text-[#fe5c73] font-medium">-$150</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      variant="outlined"
                      size="small"
                      className="rounded-full"
                      sx={{
                        borderRadius: "9999px",
                        borderColor: "#1814f3",
                        color: "#1814f3",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#1814f3",
                        },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { borderBottom: "1px solid #ebeef2" } }}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#edf0f7] flex items-center justify-center">
                        <ArrowUpward className="w-4 h-4 text-[#fe5c73]" />
                      </div>
                      <span className="text-[#343c6a]">Wilson</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">#12548796</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">Transfer</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">1234 ****</TableCell>
                  <TableCell className="text-[#718ebf]">15 Jan</TableCell>
                  <TableCell className="text-[#fe5c73] font-medium">-$1050</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      variant="outlined"
                      size="small"
                      className="rounded-full"
                      sx={{
                        borderRadius: "9999px",
                        borderColor: "#1814f3",
                        color: "#1814f3",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#1814f3",
                        },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#edf0f7] flex items-center justify-center">
                        <ArrowDownward className="w-4 h-4 text-[#16dbaa]" />
                      </div>
                      <span className="text-[#343c6a]">Emilly</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">#12548796</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">Transfer</TableCell>
                  <TableCell className="hidden md:table-cell text-[#718ebf]">1234 ****</TableCell>
                  <TableCell className="text-[#718ebf]">14 Jan</TableCell>
                  <TableCell className="text-[#16dbaa] font-medium">+$840</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      variant="outlined"
                      size="small"
                      className="rounded-full"
                      sx={{
                        borderRadius: "9999px",
                        borderColor: "#1814f3",
                        color: "#1814f3",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#1814f3",
                        },
                      }}
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6">
          <div className="flex items-center gap-2">
            <Button
              startIcon={<ChevronLeft />}
              sx={{
                color: "#1814f3",
                textTransform: "none",
              }}
              className="hidden sm:flex"
            >
              Previous
            </Button>
            <IconButton sx={{ color: "#1814f3" }} className="sm:hidden">
              <ChevronLeft />
            </IconButton>
            <Button
              variant="contained"
              className="w-8 h-8 min-w-0 p-0"
              sx={{
                backgroundColor: "#1814f3",
                minWidth: "2rem",
                width: "2rem",
                height: "2rem",
                padding: 0,
                "&:hover": {
                  backgroundColor: "#1814f3",
                },
              }}
            >
              1
            </Button>
            <Button
              variant="text"
              className="w-8 h-8 min-w-0 p-0 hidden sm:flex"
              sx={{
                color: "#718ebf",
                minWidth: "2rem",
                width: "2rem",
                height: "2rem",
                padding: 0,
              }}
            >
              2
            </Button>
            <Button
              variant="text"
              className="w-8 h-8 min-w-0 p-0 hidden sm:flex"
              sx={{
                color: "#718ebf",
                minWidth: "2rem",
                width: "2rem",
                height: "2rem",
                padding: 0,
              }}
            >
              3
            </Button>
            <Button
              variant="text"
              className="w-8 h-8 min-w-0 p-0 hidden sm:flex"
              sx={{
                color: "#718ebf",
                minWidth: "2rem",
                width: "2rem",
                height: "2rem",
                padding: 0,
              }}
            >
              4
            </Button>
            <Button
              endIcon={<ChevronRight />}
              sx={{
                color: "#1814f3",
                textTransform: "none",
              }}
              className="hidden sm:flex"
            >
              Next
            </Button>
            <IconButton sx={{ color: "#1814f3" }} className="sm:hidden">
              <ChevronRight />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions

