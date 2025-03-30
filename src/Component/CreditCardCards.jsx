
import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import { Box } from '@mui/system'

export default function CreditCardCards() {
  return (
    <Box sx={{ display: 'flex', justifyContent:'space-between', gap: '20px', overflowX: {xs:'auto', md:'hidden'}, height:'auto' }}>
      <CardOne />
      <CardOne tittle=""/>
      <CardTwo tittle=''/>
    </Box>
  )
}
