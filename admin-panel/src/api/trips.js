import axios from 'axios';

export const fetchTrips = async () => {
  const response = await axios.get('/trips');
  return response.data;
};

export const addTrip = async (trip) => {
  const response = await axios.post('/trips', trip);
  return response.data;
};

export const editTrip = async (id, trip) => {
  const response = await axios.put(`trips/${id}`, trip);
  return response.data;
};
