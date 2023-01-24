const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    username: {
        type:String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', BookSchema)