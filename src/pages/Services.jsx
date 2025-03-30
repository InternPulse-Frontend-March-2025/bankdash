import React from 'react'
import ServicesTopCard from '../components/services_backup/ServicesTopCard'
import ServiceBottomCard from '../components/services_backup/ServiceBottomCard'

function Services() {
  return (
    <div className='p-2'>
      <ServicesTopCard />
      <ServiceBottomCard />
    </div>
  )
}

export default Services