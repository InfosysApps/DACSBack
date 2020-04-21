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

exports.FindOne = async (Collection, query) => {
    return MongoClient.connect(process.env.DATABASE_SERVER,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(function(db) {
        var dbo = db.db(DB);
        var collection = dbo.collection(Collection);
        return collection.find(query).toArray();
    }).then(function(items) {
        return items;
    });
};


//Working
exports.FindSingle = async (Collection, query) =>{
    let db = await MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    
    let thing = await db.db(DB).collection(Collection).findOne(query);
    await db.close();
    return thing;
};


exports.FindOneCopy = async (Collection, query) => {
    let response = null;
     MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).findOne(query, function(err, result) {
            if (err) throw err;
            console.log("findone");
            return result;
            console.log(response)
            db.close();
          }); 
    });  
};


exports.FindAll =  async (Collection, query) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};

exports.FindSpecific =  async (Collection, query) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};

exports.DeleteOne =  async (Collection, query) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).deleteOne(query, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};


exports.DeleteMany =  async (Collection, query) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).deleteMany(query, function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};

exports.Drop =  async (Collection, query) => {
    MongoClient.connect(process.env.DATABASE_SERVER, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (err, db) {
        var dbo = db.db(DB);

        dbo.collection(Collection).drop(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          }); 
    });  
};


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
