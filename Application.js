const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', 
    required: true 
  },
  university: {
    name: { type: String, required: true },
    country: { type: String, required: true },
    addedByStudent: { type: Boolean, default: false } 
  },
  consultant: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    associatedWithUniversity: { type: String, default: null } 
  },
  appliedDate: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending' 
  },
  remarks: { 
    type: String, 
    default: ''
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);
