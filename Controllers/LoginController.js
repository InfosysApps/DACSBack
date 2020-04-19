const LoginOps = require('../Business/LoginOperations');
const jwt = require('../jsonwebtoken');

exports.Verify = async (req, res, next) => {
    //Login Verify code here.
    let { username, password } = req.body;

    let logResponse = LoginOps.Verify(username, password);

    return res.status(200).send(logResponse); 
};