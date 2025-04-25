const express = require('express');
const { bookService, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// ----------------------------------------------------------------------------- 

// Route to book a service
router.post('/', protect, bookService);

// // Route to get all bookings
router.get('/', protect, getUserBookings);

module.exports = router;
