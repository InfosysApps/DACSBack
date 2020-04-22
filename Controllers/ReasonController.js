const ReasonOps = require('../Business/ReasonOperations');


exports.Get = (req, res, next) => {
    ReasonOps.Get().then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};