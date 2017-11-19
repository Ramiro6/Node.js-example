'use strict'
const Item = require('../models/cosas')


module.exports = {
    findAll: () => {
        return Item.find({})
    },

    create: (e) => {
        const items = new Item(e)
        return items.save()
    }
}