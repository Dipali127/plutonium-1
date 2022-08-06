const express = require('express');
const abc = require('../introduction/intro')
const logger=require('../logger/logger')
const router = express.Router();

router.get('/test-me', function (req, res) {//we only focus on this part at that time 
//and this part of code run when string (test-me) and we call it as route match with our request.
    console.log('My batch is', abc.name)
    abc.printName()
    logger.Welcome();
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason