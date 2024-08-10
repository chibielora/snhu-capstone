import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getTrips');
        setTrips(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching trip data:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to="/add" className="inline-block bg-gradient-to-b from-teal-600 to-teal-700 hover:from-orange-200 hover:to-orange-300 hover:text-gray-800 px-10 py-3 uppercase text-xl">
          Add Trip
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trips.map((trip) => (
          <div key={trip._id} className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
            <img src={`http://localhost:5000/${trip.image}`} alt={trip.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{trip.name}</h2>
              <p className="text-sm text-green-400">{trip.location}, {trip.stars} stars</p>
              <p className="text-sm">{trip.duration} only ${trip.perPerson} per person</p>
              <p className="mt-2">{trip.description}</p>
            </div>
            <Link to={`/edit/${trip._id}`} className="inline-block bg-gradient-to-b from-teal-600 to-teal-700 hover:from-orange-200 hover:to-orange-300 hover:text-gray-800 px-10 py-3 uppercase text-xl">
              Edit Trip
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
