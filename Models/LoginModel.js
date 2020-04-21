const mongoDB = require('../mongodb/mongodb');
const mongoose = require('../mongodb/mongoose');
var Promise = require('promise');
 
exports.Verify = (username, password) => {

    var user = { User_Name : username, Password: password};
    return mongoDB.FindSingle('Operator', user).then(function(result){
        return result;
    });
};