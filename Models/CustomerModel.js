const mongoDB = require('../mongodb/mongodb');
const Customer = "DormantAccounts";

exports.Get = (customerId) => {
    var query = { Id : customerId};
    var projection = { projection : {}};
    return mongoDB.FindOne(Customer, query, projection).then(function(result){
        return result;
    });
};

exports.GetAccountsByCustomerId = async (customerId) => {
    var query = { CustomerId : customerId};
    var projection = { projection : {}};
    return mongoDB.CustomerAccountsJoin(Customer, query, projection).then(function(result){
        return result;
    });
};



exports.GetClosureAccountList = () => {
    var query = { };
    var projection = {};
    return mongoDB.GetClosureAccountList(Customer, query, projection).then(function(result){
        return result;
    });
};