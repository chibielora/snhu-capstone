require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const tripsRouter = require('./routes/trips');
const blogPostsRouter = require('./routes/blog-posts');

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

mongoose.connect(MONGO_URL);

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

app.use('/trips', tripsRouter);
app.use('/blog-posts', blogPostsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
