const express = require('express'); 


const router = express.Router();

router.route('/user').get((req, res) => {
    // Handle user creation
    res.send('User created');
});



export default router; // Export the router for use in app.js