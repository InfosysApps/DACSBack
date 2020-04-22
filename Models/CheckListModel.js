const mongoDB = require('../mongodb/mongodb');
const CheckList = "CheckList";


exports.Get = () => {
    var query = { };
    var projection = { projection : {}};
    return mongoDB.Find(CheckList, query, projection).then(function(result){
        return result;
    });
};