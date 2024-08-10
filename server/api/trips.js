const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost/getaways', { useNewUrlParser: true, useUnifiedTopology: true });

const tripSchema = new mongoose.Schema({
  code: String,
  name: String,
  length: String,
  start: Date,
  resort: String,
  perPerson: Number,
  image: String,
  description: String
});

const Trip = mongoose.model('Trip', tripSchema);

app.use(express.json());

app.get('/api/trips', async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

app.post('/api/trips', async (req, res) => {
  const trip = new Trip(req.body);
  await trip.save();
  res.json(trip);
});

app.put('/api/trips/:id', async (req, res) => {
  const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(trip);
});

app.listen(5000, () => console.log('Server running on port 5000'));