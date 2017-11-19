'use strict'
const URLDATABASE = process.env.MONGODB_URI || 'mongodb://localhost:27017/testeo'
// produccion tienes que poner json env
const secret = 'ramirongo'
const secretToken = process.env.SECRET ||'secret'

module.exports = {
    URLDATABASE,
    secret,
    secretToken
}