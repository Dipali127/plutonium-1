//Assignment:-create a 'bookschema' with bookName,authorName,category and year.
//create 2 apis (1) api to create a new book and another api to get the list of all books.
const mongoose = require('mongoose');//At first,to interact with database i have to install mongoose so that i can use this
//const userschema = new mongoose.Schema
 const bookSchema = new mongoose.Schema( {
    bookName:String,
    authorName:String,
    category:String,
    year:Number


    // firstName: String,
    // lastName: String,
    //mobile: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // emailId: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    // },
    // age: Number,
    // // isIndian: Boolean,
    // // parentsInfo: {
    // //     motherName: String,
    // //     fatherName: String,
    // //     siblingName: String
    // // },
    // // cars: [ String  ]
}, { timestamps: true });
module.exports= mongoose.model('User1', bookSchema);
  
//module.exports = mongoose.model('User', userSchema);//users



// String, Number
// Boolean, Object/json, array
