const dotenv = require('dotenv');
const app = require('./app');
const jwt = require('./jsonwebtoken');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

//Load all configurations settings.
dotenv.config({
    path: './config.env'
});


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const Port = process.env.PORT;
app.listen(Port, () => {
    console.log("Application is running on port "+Port);
    console.log('jwt  '+jwt.createToken('amit'));
});

// Use connect method to connect to the server
MongoClient.connect(process.env.DATABASE_SERVER, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => { console.log("DB Connection Error: ${err.message}");
});
//MongoClient.Promise = global.Promise;

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

