// this file is the basic enry point to the App
const express = require('express');

const connectDB = require('./config/db');

// initializing express
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Defining  basic route for the api https://localhost:5000
app.get('/', (req, res) => res.json({ msg: 'Contact keeper API' }));

/*
Define Routes files with app.use(): once the endpoint
is hit, it would require the path to the file in require method
*/
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
