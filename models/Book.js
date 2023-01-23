const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    file: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Book', BookSchema)