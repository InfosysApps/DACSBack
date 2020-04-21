const LoginMod = require('../Models/LoginModel');
const HttpResponse = require('../Responses/HttpResponse');
const jwt = require('../jsonwebtoken');
var Promise = require('promise');

exports.Verify = (username, password) => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {   
        return LoginMod.Verify(username, password).then(function(result){
            if(result)
            {
                //validate true
                _http.message = "User found. Welcome to DACS !!";
                _http.responseobj.loginstatus = "true";
                _http.responseobj.operatorid = result.Id;
                _http.responseobj.token = jwt.createToken(username);
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "User Not Found !! Please try with correct login Creds.";
                _http.responseobj.loginstatus = "false";
                _http.responseobj.token = null;
            }
        
            _http.httpstatus = 200;
            _http.additionalmessage = "Additional note found here.";
            _http.sucess = "true";
            return _http;
        });
    }
    catch(error)
    {
        _http.httpstatus = 500;
        _http.message = "Login operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;
        return _http;
    }
};