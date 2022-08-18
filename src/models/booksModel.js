const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String}, 
    authorId: {type:Number , required:true}, 
    prices: {type:Number},
    rating: {type:Number}
    
    
    
    
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema) //users
// " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
// {
    // "ch1 ": "awesome intro to JS",
    // "ch2" : "intro to nodejs",
    // "ch3" : "intro to db"
//  }
// summary :  mongoose.Schema.Types.Mixed,
// isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
