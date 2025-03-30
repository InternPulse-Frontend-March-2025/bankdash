import { useState } from 'react';
import SecurityPage from './Security.jsx'; 
import EditProfile from './EditProfile.jsx';

const Preferences = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    currency: true,
    merchantOrder: false,
    recommendations: true
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSwitchChange = (name) => {
    setNotifications(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Render different content based on activeTab
  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <div><EditProfile/></div>;
      case 'preferences':
        return (
          <div className="space-y-5 flex flex-wrap flex-col">
            {/* Currency Section */}
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Currency</label>
                  <input
                    type="text"
                    value="USD"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[200px]"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Time Zone</label>
                  <input
                    type="text"
                    value="(GMT-12:00) International Date Line West"
                    className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-[#718EBF] bg-white
                            focus:outline-none focus:ring-1 focus:ring-grey-400
                            md:min-w-[300px]"
                  />
                </div>
              </div>
            </div>

            {/* Notification Section */}
            <div>
              <p className="text-sm font-medium flex flex-col text-gray-700 mb-4">Notification</p>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex gap-4 items-center">
                    <div 
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${value ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}
                      onClick={() => handleSwitchChange(key)}
                    >
                      <div className={`bg-white h-5 w-5 rounded-full shadow-md transform ${value ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}></div>
                    </div>
                    <p className="text-sm text-gray-700">
                      {key === 'currency' && 'I send or receive digital currency'}
                      {key === 'merchantOrder' && 'I receive merchant order'}
                      {key === 'recommendations' && 'There are recommendations for my account'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'security':
        return <SecurityPage />;
      default:
        return null;
    }
  };

  return (
    <div className="p-7 flex justify-center items-center min-w-full min-h-full">
      <div className="bg-white rounded-3xl w-full mim-w-md p-4">
        {/* Tabs */}
        <div className="mb-6 border-b flex">
          <div className="flex space-x-4">
            <button
              className={`pb-2 px-4 ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500'}`}
              onClick={() => handleTabClick('profile')}
            >
              Edit Profile
            </button>
            <button
              className={`pb-2 px-4 ${activeTab === 'preferences' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500'}`}
              onClick={() => handleTabClick('preferences')}
            >
              Preferences
            </button>
            <button
              className={`pb-2 px-4 ${activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-500'}`}
              onClick={() => handleTabClick('security')}
            >
              Security
            </button>
          </div>
        </div>

        {/* Main Content */}
        {renderContent()}

        {/* Save Button - Only show for preferences tab */}
        {activeTab === 'preferences' && (
          <div className="mt-8 flex justify-end">
            <button className="w-full px-4 py-3 sm:w-40 sm:py-2 sm:px-6 bg-[#1814F3] hover:bg-blue-700 
                            text-white rounded-2xl transition-colors duration-200 ease-in-out
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preferences;