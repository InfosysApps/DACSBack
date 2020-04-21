const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Id: { type: String, unique: true, required: true },
    User_Name: { type: String, unique: true, required: true },
    Password: { type: String, required: true },
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    Address: { type: String, required: true },
    Contact_No: { type: String, required: true },
    Email_Id: { type: String, unique: true, required: true },
    Gender: { type: Date, required: true },
    DOB: { type: String, required: true },
    Age: { type: String, required: true },
    Role_Id: { type: String, required: true },
    Status: { type: String, required: true },
    Create_Timestamp: { type: Date, default: Date.now },
    Update_Timestamp: { type: Date, default: Date.now }
});

var Operator = mongoose.model('Operator', schema);
module.exports = Operator;