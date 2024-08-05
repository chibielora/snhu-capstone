import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TripList= () => {
  // const [trips, setTrips] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchTrips();
  // }, []);

  // const fetchTrips = async () => {
  //   const response = await axios.get('/api/trips');
  //   setTrips(response.data);
  // };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to="/add" className="flex justify-between items-center mb-8 inline-block
                    bg-gradient-to-b
                    from-teal-600
                    to-teal-700
                    hover:from-orange-200
                    hover:to-orange-300
                    hover:text-gray-800
                    border-collapse
                    px-10 py-3
                    h-full
                    w-full
                    uppercase text-xl">Add Trip</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* {trips.map((trip) => (
          <div key={trip._id} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{trip.name}</h2>
              <p className="text-gray-400 mb-2">{trip.resort}, {trip.rating} stars</p>
              <p className="text-gray-400 mb-4">{trip.length} nights / {trip.days} days only ${trip.price} per person</p>
              <p className="text-sm mb-4">{trip.description}</p>
              <button
                onClick={() => navigate(`/edit/${trip._id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Edit Trip
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
export default TripList;