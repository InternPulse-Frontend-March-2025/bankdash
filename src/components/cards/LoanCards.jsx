import React from 'react';
import { FaUser, FaBriefcase, FaComments, FaCogs } from 'react-icons/fa';

const LoanCards = () => {
  const loanData = [
    { type: 'Personal Loan', amount: '$50,000', icon: <FaUser />, bgColor: 'bg-blue-600' },
    { type: 'Corporate Loan', amount: '$100,000', icon: <FaBriefcase />, bgColor: 'bg-green-600' },
    { type: 'Business Loan', amount: '$500,000', icon: <FaComments />, bgColor: 'bg-orange-600' },
    { type: 'Custom Loans', amount: 'Choose Amount', icon: <FaCogs />, bgColor: 'bg-purple-600' }
  ];

  return (
    <div className="flex  overflow-x-auto gap-5 justify-between items-center p-5 max-w-5xl mx-auto">
      {loanData.map((loan, index) => (
        <div
          key={index}
          className="flex w-60 justify-between items-center gap-5 bg-white rounded-lg p-6 shadow-md  transform hover:-translate-y-1 hover:shadow-lg"
        >
          <div className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl ${loan.bgColor}`}>
            {loan.icon}
          </div>
          <div className="flex flex-col">
            <h4 className="text-gray-600 text-lg font-medium">{loan.type}</h4>
            <h3 className="text-gray-900 text-xl font-semibold mt-1">{loan.amount}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanCards;
