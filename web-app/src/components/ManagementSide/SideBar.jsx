import React, { useState, useEffect } from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaCar, FaVideo, FaUsers, FaCog, FaSignOutAlt, FaChevronDown, FaChevronRight, FaListAlt, FaWrench, FaClipboardList, FaExchangeAlt, FaCheckCircle, FaTimesCircle, FaUserFriends } from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setSidebarHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const renderArrow = (section) => {
    return activeSection === section ? <FaChevronDown className="ml-auto" /> : <FaChevronRight className="ml-auto" />;
  };

  const activeStyle = 'bg-[#fba701] text-gray-900';
  const inactiveStyle = 'hover:bg-gray-700';
  const activeInnerStyle = 'text-[#fba701]';
  const hoverInnerStyle = 'hover:bg-gray-600 hover:text-[#fba701]';

  return (
    <div style={{ height: sidebarHeight }} className="w-64 bg-gray-800 text-white flex flex-col justify-between fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-center">MKFLEET</h1>
        </div>
        <div className="space-y-2">
          <button
            className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'dashboard' ? activeStyle : inactiveStyle}`}
            onClick={() => toggleSection('dashboard')}
          >
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </button>
          <div>
            <button
              className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'booking' ? activeStyle : inactiveStyle}`}
              onClick={() => toggleSection('booking')}
            >
              <FaCalendarAlt className="mr-3" />
              Booking
              {renderArrow('booking')}
            </button>
            {activeSection === 'booking' && (
              <div className="ml-8 space-y-2">
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaClipboardList className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaClipboardList>
                  Customer Schedule
                </button>
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaExchangeAlt className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaExchangeAlt>
                  Ongoing Rentals
                </button>
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaCheckCircle className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaCheckCircle>
                  Completed Transaction
                </button>
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaTimesCircle className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaTimesCircle>
                  Cancelled Transaction
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'vehicleManagement' ? activeStyle : inactiveStyle}`}
              onClick={() => toggleSection('vehicleManagement')}
            >
              <FaCar className="mr-3" />
              Vehicle Management
              {renderArrow('vehicleManagement')}
            </button>
            {activeSection === 'vehicleManagement' && (
              <div className="ml-8 space-y-2">
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaListAlt className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaListAlt>
                  Vehicle List
                </button>
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaWrench className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaWrench>
                  Vehicle Maintenance
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'cctv' ? activeStyle : inactiveStyle}`}
              onClick={() => toggleSection('cctv')}
            >
              <FaVideo className="mr-3" />
              CCTV
              {renderArrow('cctv')}
            </button>
            {activeSection === 'cctv' && (
              <div className="ml-8 space-y-2">
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaVideo className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaVideo>
                  Surveillance
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'userManagement' ? activeStyle : inactiveStyle}`}
              onClick={() => toggleSection('userManagement')}
            >
              <FaUsers className="mr-3" />
              User Management
              {renderArrow('userManagement')}
            </button>
            {activeSection === 'userManagement' && (
              <div className="ml-8 space-y-2">
                <button className={`flex items-center w-full text-left px-4 py-2 rounded ${hoverInnerStyle}`}>
                  <FaUserFriends className={`mr-3 relative ${activeInnerStyle}`}>
                    <span className="absolute top-0 left-0 w-2 h-2 bg-[#fba701] rounded-full"></span>
                  </FaUserFriends>
                  User List
                </button>
              </div>
            )}
          </div>
          <button
            className={`flex items-center w-full text-left px-4 py-2 rounded ${activeSection === 'settings' ? activeStyle : inactiveStyle}`}
            onClick={() => toggleSection('settings')}
          >
            <FaCog className="mr-3" />
            Settings
          </button>
        </div>
      </div>
      <div className="p-4">
        <button className="flex items-center w-full text-left px-4 py-2 rounded hover:bg-gray-700">
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

