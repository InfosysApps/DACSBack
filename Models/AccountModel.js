const mongoDB = require('../mongodb/mongodb');
const Account = "Account";

exports.Get = (accountId) => {
    var query = { AccountId : accountId};
    var projection = { projection : {}};
    return mongoDB.FindSingle(Account, query, projection).then(function(result){
        return result;
    });
};