import React from 'react'
import LastTransaction from '../components/LastTransaction'
import DebitCreditOverview from '../components/DebitCreditOverview'

function Accounts() {
  return (
    <div>
      <LastTransaction />
      
        <DebitCreditOverview className='sm:col-span-2 h-[285px] md:h-[299px] xl:h-[367px]'/>
      
    </div>
  )
}

export default Accounts