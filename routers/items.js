'use strict'
const express = require('express')
const apidb = require('../api-db/item')
const app = express.Router()


app.get('/', async (req,res) => {
    try {
        const item = await apidb.findAll()
        res.status(200).json({ message: item})
    } catch(e) {
        console.error(e)
    }
})


app.post('/new', async (req, res) => {
    const {title, description} = req.body
    const q = {title, description}

    try {
        const saveItem = await apidb.create(q)
        res.status(201).json({ message: saveItem })
    } catch(e) {
        console.error(e);
    }
})

module.exports = {
    app
}