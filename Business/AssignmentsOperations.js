const AssignmentsMod = require('../Models/AssignmentsModel');
const HttpResponse = require('../Responses/HttpResponse');

exports.Get = (operatorId) => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {  
        return AssignmentsMod.Get(operatorId).then(function(result){
            if(result)
            {
                //validate true
                _http.message = "Operator Assignments found. Here are the details.";
                _http.responseobj.getstatus = "true";
                _http.responseobj.assignments = result;
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "Operator Assignments Not Found !! Please try with correct Operator Id.";
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
        _http.message = "Operator Assignments operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;

        return _http;
    }
};