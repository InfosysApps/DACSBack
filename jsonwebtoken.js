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

module.exports.createToken = createToken;
module.exports.verify = verify;