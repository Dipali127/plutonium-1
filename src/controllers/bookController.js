const { count } = require("console")
const BookModel= require("../models/booksModel.js")
const AuthorModel= require("../models/authorModel.js")


//question1:-Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor=async function(req,res) {
    let data =req.body
    let savedAuthorData= await AuthorModel.create(data);
    res.send({msg: savedAuthorData}) 
}
//question2:-List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const booklist= async function(req,res){
    let data= await AuthorModel.findOne({authorName: "Chetan Bhagat"}).select({authorId :1 , _id:0})//data store id of chetan bhagat author object in object form.
    let listofbook= await BookModel.find({authorId: data.authorId})//access authorId from data object which contain authorId.
    res.send({Message:listofbook});
}

//question3:-find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const author= async function(req,res){
    let data=await BookModel.findOneAndUpdate(
        {bookName:"Two states"},
        {$set: {prices:100}},
        {new: true}
    ).select({authorId:1,prices:1,_id:0});
    let data1= await AuthorModel.findOne({authorId: data.authorId}).select({authorName:1,_id:0})
    let authorprice= {AuthorName: data1.authorName, price: data.prices};
    res.send({authorprice});//
}
//question4:-Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

 const authorname= async function(req,res){
      let book= await BookModel.find({prices: {$gte:50 , $lte:100}})
      let data= book.map(x=>x.authorId)
      let authorname=await AuthorModel.find({authorId:data}).select({authorName:1 , _id:0});
      res.send(authorname);
    }

     

module.exports.createBook = createBook;
module.exports.createAuthor=createAuthor;
module.exports.booklist=booklist;
module.exports.author= author;
module.exports.authorname=authorname;

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
