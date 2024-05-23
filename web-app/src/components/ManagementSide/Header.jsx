import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AdminHeader = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="bg-white text-gray-800 flex justify-between items-center py-4 px-6 shadow-md ml-64"> {/* Added ml-64 for left padding matching sidebar width */}
      <h1 className="text-xl font-bold"></h1>
      <div className="relative">
        <button className="flex items-center" onClick={toggleOverlay}>
          <FaUserCircle className="mr-2" size={24} />
          <span>Admin Name</span>
        </button>
        {showOverlay && (
          <div className="absolute top-full right-0 bg-gray-800 text-white shadow-md p-4 mt-2 rounded">
            <div className="flex items-center mb-2">
              <FaUserCircle className="mr-2" size={24} />
              <div>
                <p className="font-semibold">Admin Name</p>
                <p className="text-gray-300">admin@example.com</p>
              </div>
            </div>
            <button className="block w-full text-left py-2 hover:bg-gray-700">My Profile</button>
            <button className="block w-full text-left py-2 hover:bg-gray-700">Edit Profile</button>
            <button className="block w-full text-left py-2 hover:bg-gray-700">Account Settings</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
