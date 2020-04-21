var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Operator = require('../Schema/Operator');


exports.FindSingle = async (model, query) => {
    mongoose.connect(process.env.DATABASE_SERVER, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    
    Operator.find()
    .exec()
    .then(doc => console.log(doc))
    .catch(err => console.log(err));
};