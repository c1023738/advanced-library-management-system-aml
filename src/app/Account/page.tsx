import React from 'react';

const Account: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8 px-4">
  
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Account Management</h1>
      <p className="text-lg text-gray-600 mb-6">Manage your reserved books and their details below.</p>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 space-y-6">

        <div className="bg-gray-50 rounded-lg shadow p-6 flex items-center justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center">
            {/* Image on the left side */}
            <img 
              src="https://via.placeholder.com/100" // Replace with your image source
              alt="Book One" 
              className="w-24 h-24 object-cover rounded-lg mr-6" 
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Book One</h2>
              <p className="text-gray-600">Author: Author One</p>
              <p className="text-gray-600">Reserved: 2024-12-01 to 2024-12-08</p>
            </div>
          </div>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Extend Reservation
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg shadow p-6 flex items-center justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center">
            {/* Image on the left side */}
            <img 
              src="https://via.placeholder.com/100" // Replace with your image source
              alt="Book Two" 
              className="w-24 h-24 object-cover rounded-lg mr-6" 
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Book Two</h2>
              <p className="text-gray-600">Author: Author Two</p>
              <p className="text-gray-600">Reserved: 2024-12-03 to 2024-12-10</p>
            </div>
          </div>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Extend Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
