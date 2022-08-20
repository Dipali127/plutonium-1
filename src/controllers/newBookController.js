const mongoose = require('mongoose');
const newAuthor = require("../models/newAuthor.js")
const newPublisher = require("../models/newPublisher.js")
const newBook = require("../models/newBook.js")

//question1:--Write a POST api that creates an author from the details in request body

const createAuthorModel1 = async function (req, res) {
    let data = req.body
    let createauthor = await newAuthor.create(data)
    res.send({ Message: createauthor })
}

//question2:- Write a POST api that creates a publisher from the details in the request body

const createPublisherModel1 = async function (req, res) {
    let data1 = req.body
    let createpublisher = await newPublisher.create(data1)
    res.send({ Message: createpublisher })
}

//quetion3:- Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body.
//In this api, you have to write a logic that validates the following :
//a):-The authorId is present in the request body. If absent send an error message that this detail is required
//b):-If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
//c):-The publisherId is present in the request body. If absent send an error message that this detail is required
//d):-If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


const createBookModel1 = async function (req, res) {
    let data2 = req.body
    let authorID = req.body.author
    let publisherID = req.body.publisher
    let validauthorid = await newAuthor.findById(authorID).select({ _id: 1 })
    let validpublisherid = await newPublisher.findById(publisherID).select({ _id: 1 })
    if (authorID) {
        if (validauthorid) {
            if (publisherID) {
                if (validpublisherid) {

                    let createbookmodel = await newBook.create(data2)
                    res.send({ Message: createbookmodel })
                } else {
                    res.send("publisher object id not valid")
                }
            } else {
                res.send("publisher id is not available")
            }

        } else {
            res.send("Author object id is not valid")
        }
    } else {
        return res.send("Author id not available")
    }
}

//question4:- Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
const bookWithpublisherAndauthor = async function (req, res) {
    let details = await newBook.find().populate(["author", "publisher"])
    res.send({ message: details })
}

//question5:-  Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
//Create a new PUT api /books and perform the following two operations
//a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

const updatedBookDetails = async function (req, res) {
    let data = await newPublisher.find({ name: ["penguin", "HarperCollins"] }).select({ _id: 1 })
    let updateValue = await newBook.updateMany({ publisher: data },
        { $set: { isHardCover: true } })
    res.send({ Message: updateValue })
}
const updatedBookDetail = async function (req, res) {
    let data = await newAuthor.find({ ratings: { $gt: 3.5 } }).select({ _id: 1 })
    let updateValue = await newBook.updateMany({ author: data },
        { $inc: { price: 10 } }

    )
    res.send(updateValue)
}
module.exports.createAuthor = createAuthorModel1
module.exports.createPublisher = createPublisherModel1
module.exports.createbooks = createBookModel1
module.exports.bookWithpublisherAndauthor = bookWithpublisherAndauthor
module.exports.updatedBookDetails = updatedBookDetails
module.exports.updatedBookDetail = updatedBookDetail