const mongoDB = require('../mongodb/mongodb');
const Reason = "Reason";


exports.Get = () => {
    var query = { };
    var projection = { projection : {}};
    return mongoDB.Find(Reason, query, projection).then(function(result){
        return result;
    });
};