import ServiceCard from "./ServiceCard"

function ServicesCardLine({
  iconDescription,
  bgColorClass,
  textColorClass,
  title1,
  subtitle1,
  title2,
  subtitle2,
  title3,
  subtitle3,
  title4,
  subtitle4
}) {

  const services = [
    {
      iconDescription: iconDescription,
      title: title1,
      subtitle: subtitle1,
      bgColorClass: bgColorClass,
      textColorClass: textColorClass,
      isRound: false,
      visibilityClass: 'all'
    },
    {
      iconDescription: false,
      title: title2,
      subtitle: subtitle2,
      bgColorClass: bgColorClass,
      textColorClass: textColorClass,
      isRound: false,
      visibilityClass: 'service-largeOnly'
    },
    {
      iconDescription: false,
      title: title3,
      subtitle: subtitle3,
      bgColorClass: bgColorClass,
      textColorClass: textColorClass,
      isRound: false,
      visibilityClass: 'service-xLargeOnly'
    },
    {
      iconDescription: false,
      title: title4,
      subtitle: subtitle4,
      bgColorClass: bgColorClass,
      textColorClass: textColorClass,
      isRound: false,
      visibilityClass: 'service-xLargeOnly'
    },

  ]

  return (
    
    <div className={`flex p-1 bg-white justify-evenly md:justify-between lg:justify-evenly items-center rounded-3xl overflow-x-auto gap-2`}>
      {services.map(service => {
        return <ServiceCard
                iconDescription={service.iconDescription}
                bgColorClass={service.bgColorClass}
                textColorClass={service.textColorClass}
                isRound={service.isRound}
                title={service.title}
                subtitle={service.subtitle}
                visibilityClass={service.visibilityClass}
              />
      })}
      <button className="bg-white py-2 px-4 rounded-2xl border border-cyan-600 hover:border-violet-700  text-cyan-600 hover:text-violet-700 hover:font-semibold hover:border-2">View Details</button>
    </div>
  )
}

export default ServicesCardLine