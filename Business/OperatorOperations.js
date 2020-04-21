const OperatorMod = require('../Models/OperatorModel');
const HttpResponse = require('../Responses/HttpResponse');


exports.Save = async (Id, User_Name, Password) => {
    console.log("operations save");
    OperatorMod.Save(Id, User_Name, Password);
};

exports.Get = (operatorId) => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {  
        return OperatorMod.Get(operatorId).then(function(result){
            if(result)
            {
                //validate true
                if(result.Gender == "Male")
                    _http.message = "User found. Here are his details.";
                else
                    _http.message = "User found. Here are her details.";
                _http.responseobj.getstatus = "true";
                _http.responseobj.details = result;
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "User Not Found !! Please try with correct Operator Id.";
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
        _http.message = "Login operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;

        return _http;
    }
};