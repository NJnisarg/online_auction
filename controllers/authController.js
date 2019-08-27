const jwt = require('jsonwebtoken');
const { response } = require('../helpers/response');
const { jwtSecret } = require('../config/secrets');

const jwtTokenCreate = (userId) => {
    let token = jwt.sign( {userId}, jwtSecret);
    return token;
}

const jwtTokenVerify = (token) => {
    jwt.verify(token, jwtSecret, (err,decoded) => {
        if(err)
            return -1;
        else
            return decoded.userId;
    })
}
module.exports = {

    'login': async (req,res) => {
    },

    'register' : async (req,res) => {
    }
}