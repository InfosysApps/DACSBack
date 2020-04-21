const operatorSchema = require('../Schema/Operator')
const mongoDB = require('../mongodb/mongodb');


exports.Save = async (Id, User_Name, Password) => {
    console.log("model save");

    let op = {
        "Id": "9940FA30-92AE-4715-A99C-03FF5D4AA932",
        "User_Name": "Tanishq.Gupta",
        "Password": "tanishq97",
        "First_Name": "Tanishq",
        "Last_Name": "Gupta",
        "Address": "Pune",
        "Contact_No": "9890098900",
        "Email_Id": "tanishq97@gmail.com",
        "Gender": "Male",
        "DOB": "1/9/91",
        "Age": "28",
        "Role_Id": "3",
        "Status": "Active",
        "Create_Timestamp": "4/20/20 10:31",
        "Update_Timestamp": "4/20/20 10:31"
    };

    mongoDB.InsertOne("Operator", op);
    return true;
};