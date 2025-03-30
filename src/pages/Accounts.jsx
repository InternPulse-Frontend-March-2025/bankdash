import React from 'react'
import InvoiceSent from "../components/transaction/InvoiceSent"
import CardOne from '../components/transaction/CardOne'
function Accounts() {
  return (
    <div>
      <CardOne/>
      <InvoiceSent/>


      <FinancialCards/>
      <LastTransaction />
      
        <DebitCreditOverview className='sm:col-span-2 h-[285px] md:h-[299px] xl:h-[367px]'/>
      
    </div>
  )
}

export default Accounts