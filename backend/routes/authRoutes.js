<<<<<<< HEAD
const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register & Login using centralized controller
router.post('/register', register);
router.post('/login', login);

module.exports = router;
=======
const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register & Login using centralized controller
router.post('/register', register);
router.post('/login', login);

module.exports = router;
>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
