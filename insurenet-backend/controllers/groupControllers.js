const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.joinGroup = async (req, res) => {
    // Handle joining a group logic
};

exports.getGroupDetails = async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        res.json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
