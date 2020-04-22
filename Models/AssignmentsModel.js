const mongoDB = require('../mongodb/mongodb');
const OperatorAssignments = "OperatorAssignments";

exports.Get = (operatorId) => {
    var query = { OperatorId : operatorId};
    var projection = { projection : {}};
    return mongoDB.Find(OperatorAssignments, query, projection).then(function(result){
        return result;
    });
};