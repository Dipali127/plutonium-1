const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorId: {
        type: ObjectId,//way to link Author database with book database
        ref: "AuthorLibrary"//pass the collection name of author (jo database me author ka naam hai whi naam bookmodel me dena hai)
    }, 
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('bookLibrary', bookSchema)
