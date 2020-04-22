const CheckListOps = require('../Business/CheckListOperations');


exports.Get = (req, res, next) => {
    CheckListOps.Get().then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};