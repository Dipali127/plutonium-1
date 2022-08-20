const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorId: String,
    authorName: String,
    age:Number,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('AuthorLibrary', authorSchema)
