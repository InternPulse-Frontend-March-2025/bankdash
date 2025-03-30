import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import CardOne from '../Component/CardOne'
import CardTwo from '../Component/CardTwo'
import RecentTransaction from '../Component/RecentTransaction'

export default function DashBoardCards() {
  return (
    <div>
      <CssBaseline />
      {/* Container for Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for larger screens
          alignItems: 'flex-start',
          gap: 2, // Add spacing between elements
        }}
      >
        {/* Horizontal Scrollable Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' }, // Row for all screens
            overflowX: {xs:'auto', md:'hidden'}, // Enable horizontal scrolling
            gap: 2, // Add spacing between cards
            width: '100%', // Ensure it takes full width
           padding: 2, // Add padding around the cards
          }}>
        
          <CardOne />
          <CardTwo />
        </Box>
         {/* RecentTransaction Component */}
         <Box
          sx={{
            width: { xs: '100%', md: '30%' }, // Adjust width for larger screens
            marginTop: { xs: 2, md: 0 }, // Reduce margin on mobile screens
          }}
        >
          <RecentTransaction />
        </Box>
      </Box>
    </div>
  )
}
