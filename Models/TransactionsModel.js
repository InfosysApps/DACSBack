const mongoDB = require('../mongodb/mongodb');
const Transactions = "Transactions";

exports.Get = (accountId) => {
    var query = { AccountId : accountId};
    var projection = { projection : {}};
    return mongoDB.Find(Transactions, query, projection).then(function(result){
        return result;
    });
};