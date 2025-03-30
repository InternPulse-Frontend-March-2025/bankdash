import React, { useState } from 'react';

const SecurityPage = () => {
  const [activeTab, setActiveTab] = useState('security');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  return (
    <div className=" flex justify-center items-center min-w-full min-h-full ">
       <div className="bg-white rounded-3xl  w-full mim-w-md p-4">

        {/* Main Content */}
        <div className="space-y-6">
          {/* Two-factor Authentication Section */}
          <div>
            <p className="text-base font-medium text-gray-700 mb-4">Two-factor Authentication</p>
            <div className="flex  gap-4 items-center mb-4">
              <div 
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${twoFactorEnabled ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}
                onClick={handleTwoFactorToggle}
              >
                <div className={`bg-white h-5 w-5 rounded-full shadow-md transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}></div>
              </div>
              <p className="text-sm text-gray-700">Enable or disable two factor authentication</p>
            </div>
          </div>

          {/* Change Password Section */}
          <div>
            <p className="text-base font-medium text-gray-700 mb-4">Change Password</p>
            
            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <label htmlFor="currentPassword" className="block text-sm text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="**********"
                  className="w-80 border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            md:min-w-[300px]"
                />
              </div>
              
              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-sm text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="**********"
                  className="w-80 border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            md:min-w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
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

export default SecurityPage;