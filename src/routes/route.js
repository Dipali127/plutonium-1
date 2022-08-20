const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
const newController = require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/CreateAuthors", newController.createAuthor)
router.post("/CreatePublisher", newController.createPublisher)
router.post("/CreatelistOfbooks", newController.createbooks)
router.get("/getbookWithpublisherAndauthor",newController.bookWithpublisherAndauthor)
router.put("/putupdatedDetails",newController.updatedBookDetails)
router.put("/putupdatedDetail",newController.updatedBookDetail)

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;