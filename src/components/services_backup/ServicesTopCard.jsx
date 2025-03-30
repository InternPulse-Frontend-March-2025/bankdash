import ServiceCard from "./ServiceCard"


function ServicesTopCard() {
  
  return (
    <div className="mt-6 top-card-container w-full max-w-full h-24 overflow-x-auto flex justify-around px-4 gap-3">
      <ServiceCard
        iconDescription='insurance'
        bgColorClass='bg-blue-200'
        textColorClass='text-blue-700'
        isRound={true}
        title='Life Insurance'
        subtitle='Unlimited protection'
      />
    
      <ServiceCard
        iconDescription='shopping'
        bgColorClass='bg-yellow-100'
        textColorClass='text-yellow-500'
        isRound={true}
        title='Shopping'
        subtitle='Buy. Think. Grow.'
      />
    
      <ServiceCard
        iconDescription='safety'
        bgColorClass='bg-teal-100'
        textColorClass='text-teal-500'
        isRound={true}
        title='Safety'
        subtitle='We are your allies'
      />

    </div>
  )
}

export default ServicesTopCard