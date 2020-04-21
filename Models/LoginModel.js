const mongoDB = require('../mongodb/mongodb');
const Operator = "Operator";
var Promise = require('promise');
 
exports.Verify = (username, password) => {

    var user = { User_Name : username, Password: password};
    var projection = { projection : {'Password' : 0}};
    return mongoDB.FindSingle(Operator, user, projection).then(function(result){
        return result;
    });
};