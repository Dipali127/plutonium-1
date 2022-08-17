const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )
router.get("/getbookList", BookController.getbookList)
router.post("/getBookYear",BookController.getBookyear)
router.post("/getParticularBookData",BookController.getParticularBookData)
router.get("/getRandomBooks",BookController.getRandomBook)
router.get("/getXINRBooks",BookController.getXINRBooks)
//router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;