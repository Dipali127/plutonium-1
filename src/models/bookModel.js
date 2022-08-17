const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{type:String}, 
    authorName:{type:String}, 
    tags:{type:[String]},
    
     isPublished:{type: Boolean},
     prices: {
         indianPrice: {type:String},
         europePrice: {type:String},
     },
     year:{type:Number, default: 2021},
    totalPages:{type:Number},
    stockAvailable:{type:Boolean},
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
