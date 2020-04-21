const express = require('express');
const router = express.Router();
const jwt = require('../jsonwebtoken');
const LoginController = require('../Controllers/LoginController');
const OperatorController = require('../Controllers/OperatorController');
const AccountController = require('../Controllers/AccountController');
const CustomerController = require('../Controllers/CustomerController');



//Login Apis
router.post('/login/verify',jwt.Validate, LoginController.Verify);


//Operator Apis
router.get('/operator/info/:id', jwt.Validate, OperatorController.Get);
router.post('/operator/save', jwt.Validate, OperatorController.Save);


//Customer Account Apis
router.get('/account/info/:id', jwt.Validate, AccountController.Get);

//Customer Apis
router.get('/customer/info/:id', jwt.Validate, CustomerController.Get);




//End call
module.exports = router;