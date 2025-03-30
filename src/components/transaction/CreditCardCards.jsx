
import React from 'react'
import CardOne from '../transaction/CardOne'
import CardTwo from '../transaction/CardTwo'
import { Box } from '@mui/system'

export default function CreditCardCards() {
  return (
    <Box sx={{ display: 'flex', justifyContent:'space-evenly', gap: '20px', overflowX: {xs:'auto', md:'hidden'}, height:'auto' }}>
      <CardOne />
      <CardOne tittle=""/>
      <CardTwo tittle=''/>
    </Box>
  )
}
