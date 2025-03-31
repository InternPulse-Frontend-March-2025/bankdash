import React from "react";
import { FaShieldAlt, FaShoppingCart, FaUserShield } from "react-icons/fa";

const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center text-center sm:text-left bg-white rounded-lg p-6 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-3 sm:mb-0">
        {icon}
      </div>
      <div className="flex flex-col items-center sm:items-start">
        <h3 className="text-gray-900 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const cardData = [
    { icon: <FaShieldAlt />, title: "Life Insurance", subtitle: "Unlimited protection" },
    { icon: <FaShoppingCart />, title: "Shopping", subtitle: "Buy.Think.Grow" },
    { icon: <FaUserShield />, title: "Safety", subtitle: "We are allies" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-5 p-5 max-w-5xl mx-auto">
      {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} subtitle={card.subtitle} />
      ))}
    </div>
  );
};

export default CardContainer;
