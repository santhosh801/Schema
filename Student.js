const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  district: { type: String, required: true },
  country: { type: String, required: true },
  universities: { type: [String], default: [] }, 
  consultants: { type: [String], default: [] } 
});

module.exports = mongoose.model('Student', StudentSchema);
