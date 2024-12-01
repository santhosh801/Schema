const Application = require('../models/Application');


exports.addApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
