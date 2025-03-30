import React from "react";
import "../../../src/index.css"

function Loans() {
  const loanData = [
    {
      id: 1,
      loanMoney: "$100,000",
      leftToRepay: "$40,500",
      duration: "8 months",
      interestRate: "12%",
      monthlyInstallment: "$2,000/month",
    },
    {
      id: 2,
      loanMoney: "$500,000",
      leftToRepay: "$250,500",
      duration: "36 months",
      interestRate: "10%",
      monthlyInstallment: "$8,000/month",
    },
    {
      id: 3,
      loanMoney: "$900,000",
      leftToRepay: "$40,500",
      duration: "12 months",
      interestRate: "12%",
      monthlyInstallment: "$5,000/month",
    },
    {
      id: 4,
      loanMoney: "$50,000",
      leftToRepay: "$40,500",
      duration: "25 months",
      interestRate: "5%",
      monthlyInstallment: "$2,000/month",
    },
    {
      id: 5,
      loanMoney: "$50,000",
      leftToRepay: "$40,500",
      duration: "5 months",
      interestRate: "16%",
      monthlyInstallment: "$10,000/month",
    },
    {
      id: 6,
      loanMoney: "$80,000",
      leftToRepay: "$25,000",
      duration: "14 months",
      interestRate: "8%",
      monthlyInstallment: "$2,000/month",
    },
    {
      id: 7,
      loanMoney: "$12,000",
      leftToRepay: "$5,500",
      duration: "9 months",
      interestRate: "13%",
      monthlyInstallment: "$500/month",
    },
    {
      id: 8,
      loanMoney: "$160,000",
      leftToRepay: "$100,800",
      duration: "3 months",
      interestRate: "12%",
      monthlyInstallment: "$900/month",
    },
  ];

  // Calculate totals
  const totalMoney = loanData.reduce(
    (sum, loan) => sum + parseFloat(loan.loanMoney.replace(/[$,]/g, "")),
    0
  );
  const totalLeftToRepay = loanData.reduce(
    (sum, loan) => sum + parseFloat(loan.leftToRepay.replace(/[$,]/g, "")),
    0
  );
  const totalMonthlyInstallment = loanData.reduce(
    (sum, loan) => sum + parseFloat(loan.monthlyInstallment.replace(/[$,]/g, "")),
    0
  );

  return (
    <div className="p-6 min-h-screen m-auto w-[95%] h-[80%]">
      <h2 className="text-[16px] md:text-[18px] lg:text-[22px] font-bold text-blue-900 mb-4">Active Loan Overview</h2>


      <div className="rounded-3xl bg-white px-5 overflow-x-auto">
        {/* Header */}
        <div className="grid grid-cols-3 md:grid-cols-7 text-indigo-400 text-base max-[1024px]:text-xs p-3 font-semibold rounded-md mb-2 max-[426px]:text-center">
          <p className="hidden max-[375px]:hidden md:block">SL No</p>
          <p>Loan Money</p>
          <p>Left to Repay</p>
          <p className="hidden max-[375px]:hidden md:block">Duration</p>
          <p className="hidden max-[375px]:hidden md:block">Interest Rate</p>
          <p className="hidden max-[375px]:hidden md:block">Installment</p>
          <p>Repay</p>
        </div>

        {/* Loan Data */}
        {loanData.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-3 md:grid-cols-7 text-base max-[1024px]:text-xs p-3 border-b border-stone-200 items-center"
          >
            <p className="font-semibold hidden max-[375px]:hidden md:block">{index + 1}</p>
            <p>{item.loanMoney}</p>
            <p>{item.leftToRepay}</p>
            <p className="hidden max-[375px]:hidden md:block">{item.duration}</p>
            <p className="hidden max-[375px]:hidden md:block">{item.interestRate}</p>
            <p className="hidden max-[375px]:hidden md:block">{item.monthlyInstallment}</p>
            <button className="w-full md:w-[6.25rem] border-2  border-gray-500 text-base max-[1024px]:text-xs px-3 py-1 rounded-[50px] hover:border-blue-700">
              Repay
            </button>
          </div>
        ))}

        {/* Total Row */}
        <div className="grid grid-cols-3 md:grid-cols-7 p-3 font-semibold rounded-md mt-4 text-red-500 text-base max-[1024px]:text-xs">
          <p>
            Total <br /> <span className="hidden max-[376px]:block">
              ${totalMoney.toLocaleString()}
            </span>
          </p>
          <p className="hidden max-[375px]:hidden md:block">${totalMoney.toLocaleString()}</p>
          <p>${totalLeftToRepay.toLocaleString()}</p>
          <p></p>
          <p></p>
          <p className="hidden max-[375px]:hidden md:block">${totalMonthlyInstallment.toLocaleString()}/month</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Loans;
