const jwt = require('jsonwebtoken');

const createToken = id => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    },
    { algorithm: 'RS256' });
};

const verify = token => {
    try{
        //Verify token 
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        return decode.id;
    }
    catch(err) {
        // err
      }
};

exports.Validate = async (req, res, next) => {
    let bearerHeader = req.headers['authorization'];
    
    if(typeof bearerHeader === 'undefined')
        return res.status(401).send();   

    let bearer = bearerHeader.split(' ');

    if(bearer[0] != 'Bearer')
        return res.status(401).send();

    if(bearer[1] == null || bearer[1].trim() == '')
        return res.status(401).send();

    if(typeof verify(bearer[1]) === 'undefined')
        return res.status(401).send();

    next();
};

module.exports.createToken = createToken;
module.exports.verify = verify;