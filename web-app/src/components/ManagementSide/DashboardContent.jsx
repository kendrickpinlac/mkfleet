import React from 'react';

const Dashboard = () => {
  // Dummy data for illustration
  const totalBookings = 120;
  const activeRentals = 15;
  const revenue = 45000;
  const recentBookings = [
    { id: 1, customer: 'John Doe', vehicle: 'Toyota Corolla', date: '2024-05-14' },
    { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', date: '2024-05-13' },
    // Add more bookings as needed
  ];
  const upcomingBookings = [
    { id: 3, customer: 'Alice Johnson', vehicle: 'Ford Mustang', date: '2024-05-16' },
    { id: 4, customer: 'Bob Brown', vehicle: 'Chevrolet Camaro', date: '2024-05-17' },
    // Add more bookings as needed
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen ml-64"> {/* Added ml-64 for left padding matching sidebar width */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-2xl">{totalBookings}</p>
        </div>
        <div className="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Current Active Rentals</h2>
          <p className="text-2xl">{activeRentals}</p>
        </div>
        <div className="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-2xl">${revenue}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <ul>
            {recentBookings.map(booking => (
              <li key={booking.id} className="mb-2">
                <p className="font-semibold">{booking.customer}</p>
                <p>{booking.vehicle}</p>
                <p>{booking.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
          <ul>
            {upcomingBookings.map(booking => (
              <li key={booking.id} className="mb-2">
                <p className="font-semibold">{booking.customer}</p>
                <p>{booking.vehicle}</p>
                <p>{booking.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
