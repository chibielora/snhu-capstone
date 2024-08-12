import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from "../api"

function EditTrip() {
  const [trip, setTrip] = useState({
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await axios.get(`${API_URL}/getEditTrips/${id}`);
        setTrip(response.data);
      } catch (error) {
        console.error('Error fetching trip data:', error);
      }
    };

    fetchTrip();
  }, [id]);

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/editTrips/${id}`, trip);
      navigate('/');
    } catch (error) {
      console.error('Error updating trip:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Trip</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
            Code
          </label>
          <input
            type="text"
            name="code"
            value={trip.code}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={trip.name}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
            Length
          </label>
          <input
            type="number"
            name="length"
            value={trip.length}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start">
            Start
          </label>
          <input
            type="date"
            name="start"
            value={trip.start}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resort">
            Resort
          </label>
          <input
            type="text"
            name="resort"
            value={trip.resort}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="perPerson">
            Per Person
          </label>
          <input
            type="number"
            name="perPerson"
            value={trip.perPerson}
            onChange={handleChange}
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={trip.description}
            onChange={handleChange}
            rows="4"
            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTrip;
