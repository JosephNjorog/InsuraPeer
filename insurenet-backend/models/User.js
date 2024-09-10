const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    googleId: String,
    facebookId: String,
    appleId: String,
    web3Id: String, // New field for Web3 ID
    email: { type: String, unique: true }, // Optional: Adjust according to your needs
    password: { type: String }, // Optional: For local authentication
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password
userSchema.methods.comparePassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT Token
userSchema.methods.generateJWT = function () {
    return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

// Find or create a user with Web3 ID
userSchema.statics.findOrCreateWeb3User = async function (web3Id) {
    let user = await this.findOne({ web3Id });
    if (!user) {
        user = new this({ web3Id });
        await user.save();
    }
    return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;