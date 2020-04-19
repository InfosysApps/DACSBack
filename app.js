const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes/RouteConfig');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const app = express();

// Allow Cross-Origin requests
app.use(cors());
app.use(bodyParser.json({'Content-Type' : 'application/json'}));
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.use('/api', routes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'Not Found', 'Undefined Route');
    next(err, req, res, next);
});


module.exports = app;