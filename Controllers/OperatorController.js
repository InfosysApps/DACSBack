const OperatorOps = require('../Business/OperatorOperations');


exports.Get = (req, res, next) => {
    var operatorId = req.params.id;
    OperatorOps.Get(operatorId).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};

exports.Save = (req, res, next) => {
    let { User_Name, Password } = req.body;

    let saveRes = OperatorOps.Save(Id, User_Name, Password);

    return res.status(200).send("Record inserted successfully."); 
};