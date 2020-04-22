const ActionMod = require('../Models/ActionModel');
const HttpResponse = require('../Responses/HttpResponse');


exports.Get = () => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {  
        return ActionMod.Get().then(function(result){
            if(result)
            {
                //validate true
                _http.message = "Actions found. Here are the details.";
                _http.responseobj.getstatus = "true";
                _http.responseobj.details = result;
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "Actions Not Found !! Please try again.";
                _http.responseobj.getstatus = "false";
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
        _http.message = "Action operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;

        return _http;
    }
};