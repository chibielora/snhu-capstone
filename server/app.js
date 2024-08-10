const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
const Trip = require('./models/trip');
const tripsRouter = require('./routes/trips');
const multer = require('multer');


const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

mongoose.connect('mongodb://localhost:27017/registrationDB', {
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save the file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
  },
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ storage: storage });

// Handle form submission with multer middleware
app.post('/set', upload.single('image'), async (req, res) => {
  console.log('Request body:', req.body); // Log the incoming request body
  console.log('Uploaded file:', req.file); // Log the uploaded file info

  const { code, name, length, start, resort, perPerson, description } = req.body;
  const image = req.file.path
  const trip = new Trip({
    code,
    name,
    length,
    start, // Ensure start is in Date format
    resort,
    perPerson,
    image,
    description
  });

  console.log('Trip data:', trip); // Log the trip object

  try {
    await trip.save();
    res.status(201).send('Trip added successfully');
  } catch (error) {
    res.status(400).send(error);
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


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
