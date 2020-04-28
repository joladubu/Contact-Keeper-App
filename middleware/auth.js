// Verifying the token
const jwt = require('jsonwebtoken');
// for access to secret
const config = require('config');

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verifying if there's a token using try-catch
  try {
    // if token is verified, payload is assigned to decoded
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //Assigning the decoded to the request object to
    // accessed inside the route
    req.user = decoded.user;
    next();
    //if token is not verified
  } catch (error) {
    res.status(400).json({ msg: 'Token is not valid'})
   }
}