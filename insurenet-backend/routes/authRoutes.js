const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

// Local Auth Routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', passport.authenticate('jwt', { session: false }), authController.getProfile);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);

// Facebook OAuth Routes
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), authController.facebookCallback);

// Apple OAuth Routes
router.get('/apple', passport.authenticate('apple', { scope: ['name', 'email'] }));
router.get('/apple/callback', passport.authenticate('apple', { session: false }), authController.appleCallback);

module.exports = router;
