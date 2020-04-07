const mongoose = require('mongoose')

const Schema = mongoose.Schemas

mongoose.connect('mongodb://localhost/itcast')

var blogSchema = new Schema({
    title: String,
    author: String
})
