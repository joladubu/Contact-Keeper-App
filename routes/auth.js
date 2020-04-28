 const express = require('express');
 const router = express.Router();
 const config = require('config');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const auth = require('../middleware/auth');
 const { check, validationResult } = require('express-validator');
 // importing the User Model
 const User = require('../models/User');

 //@route   GET api/auth
 //@desc    Get logged in user
 //@access  Private
 router.get('/', auth, async(req, res) => {
   try {
     // the menthod below returns a promise
     const user = await User.findById(req.user.id).select('-password'); 
     res.json(user);
   } catch (err) {
     console.error(err.message);
     res.status(500).send('Server Error');
   }
 });


 //@route   POST api/auth
 //@desc   Auth user & get token 
 //@access  Public
 router.post('/', [
   // using error checking from express validator
     check('email', 'Please include a valid email').isEmail(),
     check('password', 'Password is required').exists()
   ],
   async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({
         errors: errors.array()
       })
     }

     const { email, password } = req.body;

     try {
       let user = await User.findOne({
         email
       });

       //checking if email provided doesnt match with the database
       if (!user) {
         return res.status(400).json({
           msg: 'Invalid Credientials'
         });;
       }
       //Using bcrypt to compare the entered password with the hashed pasword in database
       const isMatch = await bcrypt.compare(password, user.password);

       if(!isMatch) {
         return res.status(400).json({ msg: 'Invalid Credentials'});
       }

       const payload = {
         user: {
           id: user.id
         }
       }; 

       jwt.sign(
         payload,
         config.get('jwtSecret'),
         {
           expiresIn: 36000
         },
         (err, token) => {
        
           if (err)  throw err;
           res.json({ token })
         }
       );
     } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error')

     }
   });

 module.exports = router;