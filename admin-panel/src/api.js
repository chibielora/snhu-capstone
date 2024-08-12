import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

export const fetchTrips = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTrip = async (trip) => {
  const response = await axios.post(`${API_URL}/add`, trip);
  return response.data;
};

export const editTrip = async (id, trip) => {
  const response = await axios.put(`${API_URL}/edit/${id}`, trip);
  return response.data;
};
