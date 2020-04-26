const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// importing the User Model
const User = require('../models/User');

//@route   POST api/users
//@desc    Register a user
//@access  Public
router.post('/', [
  check('name', 'Please add name')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
  //req meaning request is the data that is sent to the route
  (req, res) => {

    //assigning validationResult to a variable errors passing req as a parameter
    const errors = validationResult(req);

    // code to check if the error returned is not validated
    if(!errors.isEmpty()) {

      //return error status of 400 displaying the error as an array
      return res.status(400).json({ errors: errors.array() });
    }

    // error returned is validated
    res.send('passed')
  }
);

module.exports = router;