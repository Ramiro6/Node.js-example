'use strict'
const User = require('../models/user')

module.exports = {
    create: (e) => {
        const user = new User(e)
        return user.save()
    },    
}