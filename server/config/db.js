const mongoose = require('mongoose');

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on("error", err => {
  console.log("Mongoose connection error: ", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;