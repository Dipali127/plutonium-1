const express = require('express');
const abc = require('../introduction/intro')//load module on abc variable which is of const type
const logger = require('../logger/logger')//and route function will use this varible and with this variable
const helper=require('../util/helper')//
const formatter=require('../validator/formatter')
const router = express.Router();
//we only focus on this part at that time 
    //and this part of code run when string (test-me) and we call it as route match with our request.
    //console.log('My batch is', abc.name)
    //if route is handled that we send to server will match here then inside this route function code will run.
router.get('/test-me', function (req, res) {
    abc.printName()
    logger.Welcome();
    helper.DatePrint();
    helper.Currentmonths();
    helper.BatchInfo();
    formatter.Spacefunction();
    formatter.LowerCase();
    formatter.UpperCase();
    res.send('My All program run successfully!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason