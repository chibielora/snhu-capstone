import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddTrip() {
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/trips`, trip);
      if (response.status === 201) {
        navigate('/trips');
      } else {
        alert('Data not added');
      }
    } catch (error) {
      console.error('Error during Axios request:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='inline-block bg-gradient-to-b from-teal-600 to-teal-700 hover:from-orange-200 hover:to-orange-300 hover:text-gray-800 border-collapse px-10 py-3 h-full w-full uppercase text-xl'>
        <h1 className="text-2xl font-bold mb-4">Add Trip</h1>
      </div>
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="code">
                Code:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="code"
                name="code"
                type="text"
                value={trip.code}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                name="name"
                type="text"
                value={trip.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="length">
                Length:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="length"
                name="length"
                type="number"
                value={trip.length}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="start">
                Start:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="start"
                name="start"
                type="date"
                value={trip.start}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="resort">
                Resort:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="resort"
                name="resort"
                type="text"
                value={trip.resort}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="perPerson">
                Per Person:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="perPerson"
                name="perPerson"
                type="Number"
                value={trip.perPerson}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="image">
                Image:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                Description:
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="description"
                name="description"
                value={trip.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Add Trip
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs"></p>
      </div>
    </div>
  );
}

export default AddTrip;
