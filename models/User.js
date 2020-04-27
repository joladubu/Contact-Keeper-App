const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true // puts the current date and time in the field automatically
  },
date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema);
 