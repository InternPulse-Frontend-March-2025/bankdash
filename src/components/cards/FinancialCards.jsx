import React from 'react';
import { FaMoneyBillWave, FaArrowUp, FaArrowDown, FaPiggyBank } from 'react-icons/fa';

const FinancialCards = () => {
  const financialData = [
    { title: 'My Balance', amount: '$12,750', icon: <FaMoneyBillWave />, bgColor: 'bg-blue-600' },
    { title: 'Income', amount: '$5,600', icon: <FaArrowUp />, bgColor: 'bg-green-600' },
    { title: 'Expense', amount: '$3,460', icon: <FaArrowDown />, bgColor: 'bg-red-600' },
    { title: 'Total Saving', amount: '$7,920', icon: <FaPiggyBank />, bgColor: 'bg-yellow-500' }
  ];

  return (
    <div className="flex  gap-5 justify-center p-5 max-w-5xl mx-auto">
      {financialData.map((card, index) => (
        <div
          key={index}
          className="flex items-center gap-5 bg-white rounded-lg p-6 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs"
        >
          <div className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl ${card.bgColor}`}>
            {card.icon}
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-600 text-lg font-medium">{card.title}</h3>
            <h2 className="text-gray-900 text-2xl font-semibold mt-1">{card.amount}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinancialCards;
