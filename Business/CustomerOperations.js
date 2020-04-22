const CustomerMod = require('../Models/CustomerModel');
const HttpResponse = require('../Responses/HttpResponse');


exports.Get = (customerId) => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {  
        return CustomerMod.Get(customerId).then(function(result){
            if(result)
            {
                //validate true
                _http.message = "Customer found. Here are the details.";
                _http.responseobj.getstatus = "true";
                _http.responseobj.customer = result;
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "Customer Not Found !! Please try with correct Acccount Id.";
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
        _http.message = "Customer operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;

        return _http;
    }
};


exports.GetCustomerAccounts = (customerId) => {
    let _http = new HttpResponse().PrepareHttp();
    try
    {  
        return CustomerMod.GetAccountsByCustomerId(customerId).then(function(result){
            if(result)
            {
                //validate true
                _http.message = "Customer found. Here are the details.";
                _http.responseobj.getstatus = "true";
                _http.responseobj.details = result;
            }
            else
            {
                //handle all types of Login failed validations here.
                _http.message = "Customer Not Found !! Please try with correct Acccount Id.";
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
        _http.message = "Customer operation failed. Internal Server error.";
        _http.additionalmessage = error.message;
        _http.sucess = false;

        return _http;
    }
};