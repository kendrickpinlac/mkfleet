import React from 'react';
import { FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Filter = () => {
  // Dummy number of vehicle results
  const numberOfResults = 7;

  // Get current date and time
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const formatTime = (date) => {
    return date.toTimeString().split(' ')[0];
  };

  return (
    <div className="p-4  shadow-lg" style={{ backgroundColor: '#0C1321', paddingTop: '8rem' }}> {/* Add padding to match header height */}
      <div className="p-4 bg-white rounded-lg shadow-lg flex flex-wrap sm:flex-nowrap items-center justify-between space-y-4 sm:space-y-0">
        <div className="text-gray-600 text-lg font-semibold">
          {numberOfResults} Vehicles Available
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center space-x-4 w-full sm:w-auto">
          <div className="flex flex-col items-start w-full sm:w-auto py-2">
            <label className="text-gray-600">Pick-up Location</label>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <FaSearch className="text-orange-500" />
              <input type="text" placeholder="Enter pick-up location" className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-auto py-2">
            <label className="text-gray-600">Pick-up Date</label>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <FaCalendarAlt className="text-orange-500" />
              <input type="date" placeholder={formatDate(tomorrow)} className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-auto py-2">
            <label className="text-gray-600">Pick-up Time</label>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <FaClock className="text-orange-500" />
              <input type="time" placeholder={formatTime(tomorrow)} className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-auto py-2">
            <label className="text-gray-600">Drop-off Date</label>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <FaCalendarAlt className="text-orange-500" />
              <input type="date" placeholder={formatDate(dayAfterTomorrow)} className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="flex flex-col items-start w-full sm:w-auto py-2">
            <label className="text-gray-600">Drop-off Time</label>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <FaClock className="text-orange-500" />
              <input type="time" placeholder={formatTime(dayAfterTomorrow)} className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
        <button className="mt-4 sm:mt-0 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
