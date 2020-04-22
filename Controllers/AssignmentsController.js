const AssignmentsOps = require('../Business/AssignmentsOperations');


exports.Get = (req, res, next) => {
    var OperatorId = req.params.id;
    AssignmentsOps.Get(OperatorId).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};