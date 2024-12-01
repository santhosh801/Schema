const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI);

    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MongoDB URI is missing');
    }

    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);  
  }
};

module.exports = connectDB;
