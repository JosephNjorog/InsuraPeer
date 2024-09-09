const Premium = require('../models/Premium');

exports.contribute = async (req, res) => {
    try {
        const premium = new Premium(req.body);
        await premium.save();
        res.status(201).json(premium);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPremiumStatus = async (req, res) => {
    // Get premium contribution status logic
};
