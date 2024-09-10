const User = require('../models/User');
const jwt = require('jsonwebtoken');

// MetaMask Login
exports.metamaskLogin = async (req, res) => {
    try {
        const { address } = req.body;

        if (!address) {
            return res.status(400).json({ error: 'Address is required' });
        }

        // Find or create a user based on the address
        let user = await User.findOne({ address });

        if (!user) {
            user = new User({ address });
            await user.save();
        }

        const token = user.generateJWT();
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Local Register
exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = user.generateJWT();
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Local Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = user.generateJWT();
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Google OAuth Success
exports.googleCallback = (req, res) => {
    const token = req.user.generateJWT();
    res.redirect(`/dashboard?token=${token}`);
};

// Facebook OAuth Success
exports.facebookCallback = (req, res) => {
    const token = req.user.generateJWT();
    res.redirect(`/dashboard?token=${token}`);
};

// Apple OAuth Success
exports.appleCallback = (req, res) => {
    const token = req.user.generateJWT();
    res.redirect(`/dashboard?token=${token}`);
};
