const LoginOps = require('../Business/LoginOperations');

module.exports.Verify = function(req, res, next) {
    
    //Login Verify code here.
    console.log("req="+req.body);

    let logResponse = LoginOps.Verify("amit", "patange");

    return res.status(200).send(logResponse); 
};

module.exports.GetLogin = async(req, res, next) => {
    console.log("Get Login");

    return res.status(200).send({'status':'200'});
};