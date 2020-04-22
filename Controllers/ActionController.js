const ActionOps = require('../Business/ActionOperations');


exports.Get = (req, res, next) => {
    ActionOps.Get().then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};