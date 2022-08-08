const express = require('express');
const abc = require('../introduction/intro')//load module on abc variable which is of const type
const logger = require('../logger/logger')//and route function will use this varible and with this variable
const helper=require('../util/helper')//
const formatter=require('../validator/formatter')
const router = express.Router();
const lodash = require("lodash");
//we only focus on this part at that time 
    //and this part of code run when string (test-me) and we call it as route match with our request.
    //console.log('My batch is', abc.name)
    //if route is handled that we send to server will match here then inside this route function code will run.
router.get('/test-me', function (req, res) {
    abc.print()
    logger.Welcome();
    helper.TodayDate();
    helper.Currentmonths();
    helper.BatchInfo();
    formatter.Spacefunction();
    formatter.LowerCase();
    formatter.UpperCase();
    //chunk function of lodash 
    let arrayofmonths=["janauary","febuary","march","april","may","june","july","august","september","october","November","December"];
    let finalresult=lodash.chunk(arrayofmonths,[size=4]);
     console.log(finalresult);
     //tail function of lodash
     let OddNo=[1,3,5,7,9,11,13,15,17,19];
     let finalresult2=lodash.tail(OddNo);
     console.log(finalresult2);
     //union function of lodash
     let array1=[0,1,2,3,4];
     let array2=[5,6,7,8,9];
     let finalresult3=lodash.union(array1,array2);
     console.log(finalresult3);
     //frompairs function of lodash
     let pairsarray=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
     let finalresult4=lodash.fromPairs(pairsarray);
     console.log(finalresult4);
    res.send('My All program run successfully!')
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason