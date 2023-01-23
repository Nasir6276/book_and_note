const router = require('express').Router();
const User = require('../models/User');
const Books = require('../models/Book');

// CREATE NEW POST
router.post('/', async (req, res) => {
    const newBook = new Books(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(200).json(err)
    }
})

// UPDATE BOOK
router.put('/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        if(book.username ===  req.body.username) {
            try {
                const updatedBook = await Books.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedBook);
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json('you can only update your book!');
        }
    } catch (err) {
       res.status(500).json(err)
    }
})

// DELETE BOOK
router.delete('/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        if(book.username ===  req.body.username) {
            try {
                await book.delete()
                res.status(200).json('book has been deleted...');
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json('you can only delete your book!');
        }
    } catch (err) {
       res.status(500).json(err)
    }
})

// GET POST
router.get('/:id', async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL POSTS
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let books;
        if(username) {
            books = await Books.find({username})
        } else if(catName) {
            books = await Books.find({categories:{
                $in:[catName]
            }})
        } else {
            books = await Books.find()
        }
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;