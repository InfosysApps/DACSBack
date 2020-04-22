const mongoDB = require('../mongodb/mongodb');
const Role = "Role";


exports.Get = () => {
    var query = { };
    var projection = { projection : {}};
    return mongoDB.Find(Role, query, projection).then(function(result){
        return result;
    });
};