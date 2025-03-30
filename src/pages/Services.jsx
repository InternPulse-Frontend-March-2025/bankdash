import React from "react";
import { FaHandHoldingUsd, FaBriefcase, FaPiggyBank, FaRegUser, FaShieldAlt } from "react-icons/fa";
import Cards from "../components/cards/Cards.jsx";

const Services = () => {
  return (
    <div className="p-6">
      <div>
        <Cards/>
      </div>
      <h2 className="text-xl font-semibold mb-6">Bank Services List</h2>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <tbody>
          <tr className="border-b">
            <td className="p-4 flex items-center">
              <FaHandHoldingUsd className="text-pink-500 text-xl mr-2" />
              Business Loans
            </td>
            <td className="p-4">Fast approval | Low interest rates | Flexible repayment</td>
            <td className="p-4">Expand your business with tailored financial solutions.</td>
            <td className="p-4">
              <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded bg-white text-xs">View Details</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 flex items-center">
              <FaBriefcase className="text-yellow-500 text-xl mr-2" />
              Checking Accounts
            </td>
            <td className="p-4">No monthly fees | Instant transfers | 24/7 online banking</td>
            <td className="p-4">Effortless banking for your daily transactions.</td>
            <td className="p-4">
              <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded bg-white text-xs">View Details</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 flex items-center">
              <FaPiggyBank className="text-pink-500 text-xl mr-2" />
              Savings Accounts
            </td>
            <td className="p-4">High-interest rates | Zero maintenance fees | Secure deposits</td>
            <td className="p-4">Watch your savings grow with our rewarding plans.</td>
            <td className="p-4">
              <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded bg-white text-xs">View Details</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 flex items-center">
              <FaRegUser className="text-blue-500 text-xl mr-2" />
              Debit & Credit Cards
            </td>
            <td className="p-4">Cashback rewards | Global acceptance | Secure transactions</td>
            <td className="p-4">Enjoy shopping, travel, and payments with exclusive perks.</td>
            <td className="p-4">
              <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded bg-white text-xs">View Details</button>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 flex items-center">
              <FaShieldAlt className="text-teal-500 text-xl mr-2" />
              Life Insurance
            </td>
            <td className="p-4">Comprehensive coverage | Affordable premiums | Family security</td>
            <td className="p-4">Protect your loved ones with a reliable insurance plan.</td>
            <td className="p-4">
              <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded bg-white text-xs">View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Services;
