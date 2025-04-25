const express = require('express');
const router = express.Router();
const { createService, getAllServices } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

// Route to create a service 
router.post('/', protect, createService);

// Route to get all services
router.get('/',protect, getAllServices);

module.exports = router;
