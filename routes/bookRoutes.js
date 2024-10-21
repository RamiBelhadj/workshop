//  les routes 
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Book = require("../models/book")

// get all books
router.get('/', async (req, res)=>{
    try {
        books = await Book.find()
        res.json(books)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// get a book by Id
router.get('/:id', async (req, res)=>{
    try {
        book = await Book.findById(new mongoose.Types.ObjectId(req.params.id))
        if (book == null) {
            return res.status(404).json({message: "Cannot find book"})
        }
        res.json(book)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//
router.post('/', async (req, res)=>{
    const book = new Book({
        title: req.body.title,
        author: req.body.author
    })
    try {
        const addedBook = await book.save()
        res.status(201).json(addedBook)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})
router.put('/', (req, res)=>{
    
})


module.exports = router;