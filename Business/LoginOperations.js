const LoginMod = require('../Models/LoginModel');
const _http = require('../Responses/HttpResponse');
const jwt = require('../jsonwebtoken');
var Promise = require('promise');

exports.Verify = (username, password) => {
    try
    {   
        return LoginMod.Verify(username, password).then(function(result){
            if(result)
            {
                //validate true
                _http.response.message = "User found. Welcome to DACS !!";
                _http.response.responseobj.loginstatus = "true";
                _http.response.responseobj.operatorid = result.Id;
                _http.response.responseobj.token = jwt.createToken(username);
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.response.message = "User Not Found !! Please try with correct login Creds.";
                _http.response.responseobj.loginstatus = "false";
                _http.response.responseobj.token = null;
            }
        
            _http.response.httpstatus = 200;
            _http.response.additionalmessage = "Additional note found here.";
            _http.response.sucess = "true";
            return _http.response;
        });
        
        return _http.response;
    }
    catch(error)
    {
        _http.response.httpstatus = 500;
        _http.response.message = "Login operation failed. Internal Server error.";
        _http.response.additionalmessage = error.message;
        _http.response.sucess = false;
        return _http.response;
    }
};