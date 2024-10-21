// this model is a book 

const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    //  title: String
    title : {
        type: String,
        required : true
    },
    author : {
        type: String, 
        required : true
    }, 
    editors: [String],
    pages : Number,
    published: Number
})

module.exports = mongoose.model('Book', bookSchema)