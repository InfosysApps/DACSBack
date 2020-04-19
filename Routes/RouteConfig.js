const express = require('express');
const router = express.Router();
const jwt = require('../jsonwebtoken');
const loginController = require('../Controllers/LoginController');



//Login Apis
router.post('/login/verify',jwt.Validate, loginController.Verify);




//End call
module.exports = router;