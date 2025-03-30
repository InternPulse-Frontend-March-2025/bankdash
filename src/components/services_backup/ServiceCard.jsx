import ServiceIcon from "./ServiceIcon";

function ServiceCard({ iconDescription, bgColorClass, textColorClass, isRound, title, subtitle, visibilityClass }) {
  return (
    <div className={`bg-white p-2  rounded-3xl min-w-64 flex gap-1 md:gap-2 justify-evenly items-center ${visibilityClass}`}>
      {iconDescription && <ServiceIcon
        iconDescription={iconDescription}
        bgColorClass={bgColorClass}
        textColorClass={textColorClass}
        isRound={isRound}
      />}
      <div className="flex flex-col gap-2 ">
        <h4 className="font-semibold sm:w-50 text-inherit">{title}</h4>
        <p className="text-gray-400 sm:w-50  font-semi-bold">{subtitle}</p>
      </div>
    </div>
  );
}

export default ServiceCard