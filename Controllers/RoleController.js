const RoleOps = require('../Business/RoleOperations');


exports.Get = (req, res, next) => {
    RoleOps.Get().then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};