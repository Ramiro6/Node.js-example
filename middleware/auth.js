'use strict'
const secret = require('../config')
const jwt = require('jsonwebtoken')




module.exports = {
    require = (req, res, next) => {
        jwt.verify(req.query.token, secret.secretToken, (err, token) => {
            if(err) return res.status(401).json({
                message: 'Unauthorized',
                erro: err
            })
            req.user = token.user
            next()
        })
    }
}