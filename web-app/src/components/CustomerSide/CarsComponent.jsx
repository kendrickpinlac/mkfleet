import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <img className="object-cover w-full h-48" src={car.image} alt={car.name} />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">{car.name}</h2>
        <p className="mt-2 text-sm text-gray-600">{car.seats} Seats | {car.transmission}</p>
        <p className="mt-2 text-sm text-gray-600">Unlimited Mileage: {car.unlimitedMileage ? 'Yes' : 'No'}</p>
        <p className="mt-2 text-lg font-semibold text-gray-900">${car.pricePerDay} / day</p>
        <button className="mt-4 w-full px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Book Now</button>
      </div>
    </div>
  );
}

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Corolla",
      image: "https://via.placeholder.com/400x250",
      seats: 5,
      transmission: "Automatic",
      unlimitedMileage: true,
      pricePerDay: 50
    },
    {
      id: 2,
      name: "Honda Civic",
      image: "https://via.placeholder.com/400x250",
      seats: 5,
      transmission: "Automatic",
      unlimitedMileage: true,
      pricePerDay: 60
    },
    {
      id: 3,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/400x250",
      seats: 4,
      transmission: "Manual",
      unlimitedMileage: false,
      pricePerDay: 80
    },
    {
      id: 4,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/400x250",
      seats: 4,
      transmission: "Manual",
      unlimitedMileage: false,
      pricePerDay: 80
    },
    {
      id: 5,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/400x250",
      seats: 4,
      transmission: "Manual",
      unlimitedMileage: false,
      pricePerDay: 80
    },
    {
      id: 6,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/400x250",
      seats: 4,
      transmission: "Manual",
      unlimitedMileage: false,
      pricePerDay: 80
    },
    {
      id: 7,
      name: "Ford Mustang",
      image: "https://via.placeholder.com/400x250",
      seats: 4,
      transmission: "Manual",
      unlimitedMileage: false,
      pricePerDay: 80
    }
  ];

  return (
    <div className="mx-auto bg-gray-900 p-4">
      <h1 className="text-white text-center p-4">Currently Available Vehicles</h1>
      {/* Car List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;
