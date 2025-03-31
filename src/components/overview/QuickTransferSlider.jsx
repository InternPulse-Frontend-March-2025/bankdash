import React, { useState } from "react";
import { Send } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import teammate1 from '../assets/images/teammates/teammember2.avif';
import teammate2 from '../assets/images/teammates/teammember7.avif';
import teammate3 from '../assets/images/teammates/teammember4.avif';
import teammate4 from '../assets/images/teammates/teammember5.avif';
import teammate5 from '../assets/images/teammates/teammember6.avif';
import teammate6 from '../assets/images/teammates/teammember8.avif';

const teamMembers = [
    { name: "Livia Bator", role: "CEO", image: teammate1, bold: true },
    { name: "Randy Press", role: "Director", image: teammate2, bold: false },
    { name: "Workman", role: "Designer", image: teammate3, bold: false },
    { name: "Sarah Lee", role: "Engineer", image: teammate4, bold: false },
    { name: "John Doe", role: "Product Manager", image: teammate5, bold: false },
    { name: "Emily Smith", role: "Marketing", image: teammate6, bold: false },
  ];

const QuickTransferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [amount, setAmount] = useState("525.50");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= teamMembers.length ? 0 : prevIndex + 3
    );
  };

  return (

    <div className=" bg-gray-100 p-6 float-left flex flex-col space-x-4">

        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Transfer</h2>

        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">
              {teamMembers.slice(currentIndex, currentIndex + 3).map((user, index) => (
              <div key={index} className="flex flex-col items-center">
                  <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border border-gray-300"
                  />
                  <p className={`mt-1 text-sm ${user.bold ? "font-bold" : "font-medium"}`}>
                  {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.role}</p>
              </div>
              ))}

              <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-500 hover:bg-gray-300"
              >
              <FiChevronRight size={20} />
              </button>
          </div>

          <div className="flex items-center space-x-2 p-4">
            <h4 className="text-gray-500 text-sm font-medium">Write Amount</h4>
            
            <div className="flex items-center w-[250px] bg-gray-100 mt-2 rounded-full">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 text-gray-500 text-sm text-center bg-transparent outline-none"
              />
              <button className="flex items-center px-2 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700">
                <span>Send</span>
                <Send size={16}  />
              </button>
            </div>
          </div>
     
        </div>

    </div>

  );
};

export default QuickTransferSlider;