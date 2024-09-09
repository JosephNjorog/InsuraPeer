const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const groupRoutes = require('./routes/groupRoutes');
const premiumRoutes = require('./routes/premiumRoutes');
const planRoutes = require('./routes/planRoutes');
const claimsRoutes = require('./routes/claimsRoutes');
const refundRoutes = require('./routes/refundRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/premiums', premiumRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/claims', claimsRoutes);
app.use('/api/refunds', refundRoutes);
app.use('/api/payments', paymentRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
