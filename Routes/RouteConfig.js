const express = require('express');
const router = express.Router();
const jwt = require('../jsonwebtoken');
const LoginController = require('../Controllers/LoginController');
const OperatorController = require('../Controllers/OperatorController');
const AccountController = require('../Controllers/AccountController');
const CustomerController = require('../Controllers/CustomerController');
const ActionController = require('../Controllers/ActionController');
const ReasonController = require('../Controllers/ReasonController');
const RoleController = require('../Controllers/RoleController');
const CheckListController = require('../Controllers/CheckListController');
const TransactionsController = require('../Controllers/TransactionsController');
const AssignmentsController = require('../Controllers/AssignmentsController');


//Login Apis
router.post('/login/verify', LoginController.Verify);


//Operator Apis
router.get('/operator/info/:id', jwt.Validate, OperatorController.Get);
router.get('/operator/all/', jwt.Validate, OperatorController.GetAll);
router.post('/operator/save', jwt.Validate, OperatorController.Save);

//Customer Account Apis
router.get('/account/info/:id', jwt.Validate, AccountController.Get);

//Customer Apis
router.get('/customer/info/:id', jwt.Validate, CustomerController.Get);
router.get('/customer/accounts/:id', jwt.Validate, CustomerController.GetCustomerAccounts);

//Action Apis
router.get('/action/all/', jwt.Validate, ActionController.Get);

//Reason Apis
router.get('/reason/all/', jwt.Validate, ReasonController.Get);

//Role Apis
router.get('/role/all/', jwt.Validate, RoleController.Get);

//Role Apis
router.get('/checklist/all/', jwt.Validate, CheckListController.Get);


//Transactions Apis
router.get('/transactions/account/:id', jwt.Validate, TransactionsController.Get);

//Transactions Apis
router.get('/assignments/operator/:id', jwt.Validate, AssignmentsController.Get);



//End call
module.exports = router;