require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const Trip = require('./models/trip');
const tripsRouter = require('./routes/trips');
const multer = require('multer');
const upload=multer();


const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL_DB=process.env.MONGO_URL_DB

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

mongoose.connect(MONGO_URL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ success: false, message: 'Username already exists' });
    }
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.send({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.send({ success: true, message: 'Login successful' });
    } else {
      res.send({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
});


app.post('/set',upload.none(), async (req, res) => {
  console.log('Request body:', req.body);

  const { code, name, length, start, resort, perPerson, imageURL, description } = req.body;

  const trip = new Trip({
    code,
    name,
    length,
    start,
    resort,
    perPerson,
    image:imageURL,
    description
  });

  console.log('Trip data:', trip);

  try {
    await trip.save();
    res.status(201).send('Trip added successfully');
  } catch (error) {
    console.log("Error while saving trip:", error);
    res.status(400).send(error.message);
  }
});

app.get('/getTrips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ message: 'Server error fetching trips' });
  }
});

app.get('/getTripsClient', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ message: 'Server error fetching trips' });
  }
});

// Get a single trip by ID
app.get('/getEditTrips/:id', async (req, res) => {
  const { id } = req.params;
  const trip = await Trip.findById(id);
  if (trip) {
    res.json(trip);
  } else {
    res.status(404).send('Trip not found');
  }
});

// Update a trip by ID
app.put('/editTrips/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTrip = await Trip.findByIdAndUpdate(id, req.body, { new: true });
  if (updatedTrip) {
    res.json(updatedTrip);
  } else {
    res.status(404).send('Trip not found');
  }
});

// Delete a trip by ID and remove the associated image file
app.delete('/deleteTrip/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trip.findById(id);
    if (!trip) {
      return res.status(404).send('Trip not found');
    }


      // Delete the trip from the database
      await Trip.findByIdAndDelete(id);
      res.status(200).send('Trip and associated image deleted successfully');
  } catch (error) {
    console.error('Error deleting trip:', error);
    res.status(500).send('Server error deleting trip');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
