const CustomerOps = require('../Business/CustomerOperations');
var MongoClient = require('mongodb').MongoClient;
const DB = "DACS";



exports.Get = (req, res, next) => {
    var customerId = req.params.id;
    CustomerOps.Get(customerId).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};

exports.GetCustomerAccounts = async (req, res, next) => {
    var customerId = req.params.id;
    CustomerOps.GetCustomerAccounts(customerId).then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};

exports.GetClosureAccountList = (req, res, next) => {
    CustomerOps.GetClosureAccountList().then(function(response){
        if(response)
            return res.status(200).send(response); 
        else
        return res.status(500).send(response); 
    });
};