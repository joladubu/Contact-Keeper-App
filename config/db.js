// Initiating access to mongoose
const mongoose = require('mongoose');

/**
 * Initiating access to config dependency which allows 
 * accessing the default.json fi
 */
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error(err.message); 
    process.exit(1)
  });
};

module.exports = connectDB;
