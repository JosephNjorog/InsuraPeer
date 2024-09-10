const Refund = require('../models/Refund');

exports.requestRefund = async (req, res) => {
    try {
        const refund = new Refund(req.body);
        await refund.save();
        res.status(201).json(refund);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRefundStatus = async (req, res) => {
    try {
        const refund = await Refund.findById(req.params.id);
        res.json(refund);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
