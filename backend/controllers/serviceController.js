const Service = require('../models/Service');
// -----------------------------------------------------------------------------
// Controller for creating a new service
exports.createService = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const newService = new Service({
      title,
      description,
      price,
      category,
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create service' });
  }
};
// -----------------------------------------------------------------------------

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};
