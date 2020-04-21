const OperatorMod = require('../Models/OperatorModel');
const _http = require('../Responses/HttpResponse');


exports.Save = async (Id, User_Name, Password) => {
    console.log("operations save");
    OperatorMod.Save(Id, User_Name, Password);
};