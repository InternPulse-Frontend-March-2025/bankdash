import React from 'react'
import CardOne from '../transaction/CardOne'
import CardTwo from '../transaction/CardTwo'
import { Box } from '@mui/material'

export default function TransactionCard() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'row',
      overflowX:{xs:'auto', md:'hidden'}, // Enable horizontal scrolling
      gap: 2, // Add spacing between cards
      padding: 2,
      width: '100%',
    }}
      >
      <CardOne/>
      <CardTwo 
       tittle="+ Add card"
      />
    </Box>
  )
}
