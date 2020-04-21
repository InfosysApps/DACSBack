class HttpResponse {

    constructor(){    
    }

    PrepareHttp()
    {
        let http = {
            httpstatus : "",
            sucess : false,
            responseobj : {},
            message : "",
            additionalmessage : "Additional note found here."
        };

        return http;
    }
}





module.exports = HttpResponse;