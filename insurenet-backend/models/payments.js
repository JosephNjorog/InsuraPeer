const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, enum: ['succeeded', 'pending', 'failed'], required: true },
    paymentMethod: { type: String },
    description: { type: String },
    transactionId: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
