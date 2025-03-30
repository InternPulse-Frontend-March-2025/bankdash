import React from 'react'
import FinancialCards from '../components/cards/FinancialCards.jsx'
import LastTransaction from '../components/LastTransaction'
import DebitCreditOverview from '../components/DebitCreditOverview'

function Accounts() {
  return (
    <div>

      <FinancialCards/>
      <LastTransaction />
      
        <DebitCreditOverview className='sm:col-span-2 h-[285px] md:h-[299px] xl:h-[367px]'/>
      
    </div>
  )
}

export default Accounts