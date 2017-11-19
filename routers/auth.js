'use strict'
const express = require('express')
const apidb = require('../api-db/user')
const app = express.Router()
const bcrypt = require('bcryptjs');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = require('../config')
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(password, salt)


app.post('/create',  async (req, res) => {
    const { email, password } = req.body
    const q = {
        email,
        password: bcrypt.hashSync(password, 10)
    }

    try {
        const user =  await apidb.create(q)
        res.status(200).json({ message: user})
    } catch(e) {
        console.error(e)
    }
})

function comparePasswords(dataPassword, userPassword) {
    return bcrypt.compareSync(dataPassword, userPassword)
}

app.post('/singin', async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({ email })
    if(!user) return res.status(403).json({ message: 'brongg'})
    if(!comparePasswords(password, user.password)) {
        console.log('te pelasteis')
        return res.status(401).json({ message: 'brongg'})
    }
    const token = jwt.sign({ user }, secret.secretToken, { expiresIn: 86400 })
    // res.status(200).json({ message: `your email is ${user.email}`})
    res.status(200).json({
        login: 'LoGIN',
        token,
        email: user.email
    })
})



module.exports = {
    app
}