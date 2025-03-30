import React, { useState } from 'react';
import { Pencil } from 'lucide-react';

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dob: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  });

 

  return (
    <div className="flex justify-center items-start min-w-full min-h-full  sm:p-6">
      <div className="bg-white w-full max-w-5xl rounded-2xl sm:p-1 ">

        {/* Three-Column Layout - Responsive */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Column 1: Profile Image - Mobile Optimized */}
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
                <img 
                  src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eHEPXoX5ArHwnRUklLRdDX4YcIU9A5NWiWPeBFlDdYDIGcohMfVhP7yMy58V0W-OO72W83oP340Jt~vaU5FMn7DnqoHzfmPEg61TsmHn5XE~0e03iQ9ixdLfiEbK3xNutMiTGIgLFULa8AYNF3aNit7rqO6anWKLcZ2DbSgnfR9oqhlxy2081CjLl18cCPEZuT1M4ZNlxcKEfvBv1T2FN9e798FwkckeeZS~XCpRDPd9qqmtuxsVP2dZni19c5cfzUdxZ3h~5z-Q-Ur1efgWBkW1yjTh3eeUTYb9tZQ77tDVjsLzoDjBPGjuQqQRQU4M84l46jvfEE9k0WMTm6oXGg__" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <button 
                className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-md transition-all duration-200"
                aria-label="Edit profile picture"
              >
                <Pencil size={16} className="sm:size-[18px]" />
              </button>
            </div>
            
          </div>

          {/* Column 2 & 3: Form Fields - Responsive Grid */}
          <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column Fields */}
            <div className="space-y-4">
              {/* Your Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                 placeholder={formData.name}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                 placeholder={formData.email}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                   placeholder={formData.dob}
                    className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Permanent Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Permanent Address
                </label>
                <input
                  type="text"
                 placeholder={formData.permanentAddress}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                 placeholder={formData.postalCode}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>
            </div>

            {/* Right Column Fields */}
            <div className="space-y-4">
              {/* User Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  type="text"
                 placeholder={formData.username}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                 placeholder={formData.password}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Present Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Present Address
                </label>
                <input
                  type="text"
                 placeholder={formData.presentAddress}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                 placeholder={formData.city}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                 placeholder={formData.country}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button - Responsive */}
        <div className="mt-8 flex justify-end">
  <button className="w-full px-4 py-3 sm:w-40 sm:py-2 sm:px-6 bg-[#1814F3] hover:bg-blue-700 
                    text-white rounded-2xl transition-colors duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    Save
  </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;