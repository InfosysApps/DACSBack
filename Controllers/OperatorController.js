const OperatorOps = require('../Business/OperatorOperations');

exports.Save = async (req, res, next) => {
    console.log("controller save");
    let { Id, User_Name, Password } = req.body;

    let saveRes = OperatorOps.Save(Id, User_Name, Password);

    return res.status(200).send("Record inserted successfully."); 
};