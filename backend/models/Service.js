const mongoose = require('mongoose');

// -----------------------------------------------------------------------------
// Defining the service schema

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
});

module.exports = mongoose.model('Service', serviceSchema);
