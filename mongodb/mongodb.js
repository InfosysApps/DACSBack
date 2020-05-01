var MongoClient = require('mongodb').MongoClient;
const DB = "DACS";

exports.InsertOne =  async (Collection, data) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).insertOne(data, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        }); 
    });  
};

//Working
exports.FindOne = async (Collection, query, projection) =>{
    let db = await MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    
    let thing = await db.db(DB).collection(Collection).findOne(query, projection);
    await db.close();
    //console.log(thing);
    return thing;
};

exports.Find = async (Collection, query, projection) =>{
    let db = await MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    
    let thing = await db.db(DB).collection(Collection).find(query, projection).toArray();
    await db.close();
    //console.log(thing);
    return thing;
};

exports.CustomerAccountsJoin =  async (Collection, query, projection) => {
    let db = await MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    
    let thing = await db.db(DB).collection('Account').aggregate(
    [   { $match : query },
        { $lookup:
            {
            localField: 'CustomerId',
            from: 'Customer',
            foreignField: 'Id',
            as: 'accounts'
            }
        }
    ]).toArray();

    await db.close();
    //console.log(thing);
    return thing;
};


exports.GetClosureAccountList =  async (Collection, query, projection) => {
    let db = await MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    
    let thing = await db.db(DB).collection('DormantAccounts').aggregate(
    [
            { $match: { Status:"Closed"} }
        ]).toArray();

    await db.close();
    //console.log(thing);
    return thing;
};


/*
exports.UpdateOne =  async (Collection, query, newValues) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).updateOne(query, newValues, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};

exports.UpdateMany =  async (Collection, query, newValues) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).updateMany(query, newValues, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};
*/
