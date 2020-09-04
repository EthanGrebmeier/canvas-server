const mongoose = require('mongoose')

const GridModel = mongoose.model('grid', new mongoose.Schema({
    _id: Number,
    title: String, 
}, {strict: true}))

module.exports = GridModel