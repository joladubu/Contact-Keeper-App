const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  // Relatign to the User Model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: Date,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
 