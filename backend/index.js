const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// initialize middleware
app.use(express.json());
app.use(cors());


// ------------------------------------------------------------------------------
// Connect to MongoDb
const connectDB = require('./config/db');
connectDB();

// ------------------------------------------------------------------------------


// Routes for different services (auth, services, bookings)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// ------------------------------------------------------------------------------
// For starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
