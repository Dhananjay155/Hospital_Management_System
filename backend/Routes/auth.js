import express from 'express'; // Import express
import authController from '../Controllers/authController.js'; // Import the authController

const router = express.Router(); // Create a router instance

// Define your routes here
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router; // Export the router