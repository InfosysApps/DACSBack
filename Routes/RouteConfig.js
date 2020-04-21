const express = require('express');
const router = express.Router();
const jwt = require('../jsonwebtoken');
const loginController = require('../Controllers/LoginController');
const operatorController = require('../Controllers/OperatorController');



//Login Apis
router.post('/login/verify',jwt.Validate, loginController.Verify);


//Operator Apis
router.get('/operator/info/:id', jwt.Validate, operatorController.Get);
router.post('/operator/save', jwt.Validate, operatorController.Save);




//End call
module.exports = router;