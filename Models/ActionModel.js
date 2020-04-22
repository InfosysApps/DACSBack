const mongoDB = require('../mongodb/mongodb');
const Action = "Action";


exports.Get = () => {
    var query = { };
    var projection = { projection : {}};
    return mongoDB.Find(Action, query, projection).then(function(result){
        return result;
    });
};