const mongoDB = require('../mongodb/mongodb');
const Operator = "Operator";


exports.Save = async (Id, User_Name, Password) => {
    console.log("model save");
    mongoDB.InsertOne("Operator", op);
    return true;
};


exports.Get = (operatorId) => {
    var query = { Id : operatorId};
    var projection = { projection : {'Password' : 0}};
    return mongoDB.FindOne(Operator, query, projection).then(function(result){
        return result;
    });
};

