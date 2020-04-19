const express = require('express');
const router = express.Router();

const loginController = require('../Controllers/LoginController');

router.get('/login', loginController.GetLogin);
router.post('/login/verify', loginController.Verify);

module.exports = router;