const Claim = require('../models/Claim');

exports.submitClaim = async (req, res) => {
    try {
        const claim = new Claim(req.body);
        await claim.save();
        res.status(201).json(claim);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClaimStatus = async (req, res) => {
    try {
        const claim = await Claim.findById(req.params.id);
        res.json(claim);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.reviewClaim = async (req, res) => {
    // Handle claim review logic
};
