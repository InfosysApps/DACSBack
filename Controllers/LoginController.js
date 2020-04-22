const LoginOps = require('../Business/LoginOperations');

exports.Verify = (req, res, next) => {
    //Login Verify code here.
    let { username, password } = req.body;
    LoginOps.Verify(username, password).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};