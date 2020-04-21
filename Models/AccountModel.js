const mongoDB = require('../mongodb/mongodb');
const Account = "CustomerAccount";

exports.Get = (accountId) => {
    var query = { AccntId : accountId};
    var projection = { projection : {}};
    return mongoDB.FindSingle(Account, query, projection).then(function(result){
        return result;
    });
};