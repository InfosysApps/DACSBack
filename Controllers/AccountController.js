const AccountOps = require('../Business/AccountOperations');


exports.Get = (req, res, next) => {
    var accountId = req.params.id;
    AccountOps.Get(accountId).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};