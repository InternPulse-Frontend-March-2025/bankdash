import { FaShieldHeart } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";

function ServiceIcon({ iconDescription, bgColorClass, textColorClass, isRound }) {
  
  let icon;

  switch (iconDescription) {
    case "insurance":
      icon = <FaShieldHeart className="w-full h-full" />;
      break;

    case "shopping":
      icon = <AiFillShopping className="w-full h-full" />;
      break;

    case "safety":
      icon = <AiFillSafetyCertificate className="w-full h-full" />;
      break;

    case "loans":
      icon = <FaHandHoldingDollar className="w-full h-full" />;
      break;

    case "accounts":
      icon = <FaBriefcase className="w-full h-full" />;
      break;

    case "savings":
      icon = <GiProgression className="w-full h-full" />;
      break;

    case "person":
      icon = <IoPerson className="w-full h-full" />;
      break;
  }

  return (
    <div
      className={`w-16 h-16 ${
        isRound ? "rounded-full" : "rounded-2xl"
      } ${bgColorClass} flex justify-center items-center`}
    >
      <div
        className={`service-icon flex justify-center items-center w-7 h-7 ${textColorClass}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default ServiceIcon