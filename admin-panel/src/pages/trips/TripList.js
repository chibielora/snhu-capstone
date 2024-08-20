import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';

export default function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(`/trips`);
        setTrips(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching trip data:', error);
      }
    };

    fetchTrips();
  }, []);

  // Function to handle deleting a trip
  const deleteTrip = async (tripId) => {
    try {
      await axios.delete(`/trips/${tripId}`);
      setTrips(trips.filter((trip) => trip._id !== tripId));
    } catch (error) {
      console.error('Error deleting trip:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to="/trips/add">
          <Button>Add Trip</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trips.map((trip) => (
          <div key={trip._id} className="flex flex-col bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
            <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{trip.name}</h2>
              <p className="text-sm text-green-400">{trip.location}</p>
              <p className="text-sm">{trip.duration} only ${trip.perPerson} per person</p>
              <p className="mt-2">{trip.description}</p>
            </div>
            <div className="flex-1" />{/* Spacer to move buttons to bottom */}
            <div className="flex justify-between p-4">
              <Link to={`/trips/${trip._id}/edit`}>
                <Button color="green">
                  Edit Trip
                </Button>
              </Link>
              <Button
                onClick={() => deleteTrip(trip._id)}
                color="red"
              >
                Delete Trip
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
