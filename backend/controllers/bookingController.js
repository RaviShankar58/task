const Booking = require('../models/Booking');

// -----------------------------------------------------------------------------
// Controller for booking a service
exports.bookService = async (req, res) => {
  try {
    const { service } = req.body;
    const user = req.user.id;

    // console.log("Booking Attempt:");
    // console.log("User ID:", user);
    // console.log("Service ID:", service);

    if (!service) {
      return res.status(400).json({ error: 'Service ID is required in the request body' });
    }

    const newBooking = new Booking({ user, service });
    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (err) {
    console.error("Booking Failed:", err.message);
    res.status(500).json({ error: 'Failed to book service', details: err.message });
  }
};

// -----------------------------------------------------------------------------
exports.getUserBookings = async (req, res) => {
    try {
      console.log("req.user:", req.user);
      const bookings = await Booking.find({ user: req.user.id })
        .populate('service');
  
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
};
