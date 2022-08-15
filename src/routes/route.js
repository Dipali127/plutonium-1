const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbookschema",UserController.createbook);
router.get("/getbookdetails",UserController.getbookdata);


// router.post("/createUser", UserController.createUser  )//this api create new users.

// router.get("/getUsersData", UserController.getUsersData)//this api get list of all the users

module.exports = router;