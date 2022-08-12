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
     let array2=[4,6,7,8,9];
     let finalresult3=lodash.union(array1,array2);
     console.log(finalresult3);
     //frompairs function of lodash
     let pairsarray=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
     let finalresult4=lodash.fromPairs(pairsarray);
     console.log(finalresult4);
    res.send('My All program run successfully!')
});
//api assignment-1:
router.get('/movies', function(req,res)
{
    let movies=["Rang de basanti","The shining", "Lord of the rings", "Batman begins"]
    res.send(movies);
});
//api assignment-2 and 3rd:
router.get('/movies/:indexNumber',function(req,res){//indexNumber is present inside req.params
    let movies=["Rang de basanti","The shining", "Lord of the rings", "Batman begins"]
    let number=req.params.indexNumber;//req.param present inside the above url path in router.get.
    if(number<0 || number>=movies.length){
        res.send("length exceeded")
    }
     res.send(movies[number]);
});
//api assignment -4
router.get('/films',function(req,res){
    const films=[{
        "id":1,
        "name":"The Shining"
    },{
        "id":2,
        "name":"Incendies"
    },{
        "id":3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Memo"
    }]
    res.send(films);
})
//api assignment-5
router.get('/films/:filmId',function(req,res){
    const films=[{
        "id":1,
        "name":"The Shining"
    },{
        "id":2,
        "name":"Incendies"
    },{
        "id":3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Memo"
    }]
    let idoffilm=req.params.filmId;
    for(let i=0;i<films.length;i++)
    {
        let film=films[i]
       if(film.id==idoffilm)
       {
        return res.send(film)
       }
    }
    res.send("The film id doesn't match any movie");
});
//assignment1(9-August):-"missing no of an array (interview question)"
 router.get("/sol1", function (req, res)
{
    let array=[1,2,3,5,6,7];
    let SumWithoutMissingNo=0;
    for (let i=0;i<array.length;i++)
     {
         SumWithoutMissingNo+=array[i];//sum=24
     }
     let n=array.length+1;//n=6
     let SumWithMissingNo=n*(n+1)/2;//sum=28
     let MissingNo=SumWithMissingNo-SumWithoutMissingNo;//28-24=4
     res.send({ "Missing No" : MissingNo }); 
});
//assignment2(9-August):-"missing number of an array(interview question)"
router.get("/sol2",function(req,res){
    let array=[33,34,35,37,38];
    let SumWithoutMissingNo=0;
    for(let i=0;i<array.length;i++)
    {
        SumWithoutMissingNo+=array[i];//sum=177
    }
    let n=array.length+1;//n=6
    let SumWithMissingNo=n*(array[0]+array[4])/2;//sum=213
    let MissingNo=SumWithMissingNo-SumWithoutMissingNo;//213-177=36
    res.send({"Missing No" : MissingNo})
})

router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
});

// router.get('/give-me-students-data', functionpwd (req, res){

// });
//Question:take input in a post request and add it to an array and return the new array
router.post('/test-post-4',function(req,res){
    let arr=[12,"functionup"];
    let ele=req.body.element
    arr.push(ele);
    res.send({msg : arr ,status:true})
});
//assignment(10 august):Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
            let NewPlayer=req.body;
            for(let i=0;i<players.length;i++)
            {     let PlayerPerson=players[i];
                if(PlayerPerson.name===NewPlayer.name)
                {
                    return res.send("Player is already existed");
                }
            }
            players.push(NewPlayer);
       
       res.send(  { data: players , status: true }  )
   })
   //Write an api that books a slot for a player with relevant details. The api looks like POST /players/playerName/bookings/bookingId
 
// Ensure the below conditions:
// 1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.	
// 2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send an error message conveying the booking was already processed. For a relevant bookingId(which is new), add the booking object from request body to bookings array


     let players1 =
     [
         {
             "name": "manish",
             "bookingno":1,
            "dob": "1/1/1995",
             "gender": "male",
             "city": "jalandhar",
             "sports": [
                 "swimming"
             ]
         },
         {
        
             "name": "gopal",
             "bookingno":2,
             "dob": "1/09/1995",
             "gender": "male",
             "city": "delhi",
             "sports": [
                 "soccer"
             ],
         },
        {
        
            "name": "lokesh",
            "bookingno":3,
             "dob": "1/1/1990",
             "gender": "male",
             "city": "mumbai",
             "sports": [
                 "soccer"
             ],
         },
     ]
     router.post('/players1', function (req, res) {
        let Newplayer = req.body.name1;
        let NewBookingid = req.body.bookingno1;
        for (let i = 0; i < players1.length; i++) {
            let people=players1[i];
            if (people.name == Newplayer && people.bookingno == NewBookingid) {
                return res.send({ Data: "Sorry! This Person is already exist." });
            }
        }
        for(let i=0;i<players1.length;i++)
        {
            let people=players1[i];
           if (people.name == Newplayer && people.bookingno != NewBookingid) {
                return res.send({ Data: "Congratulations! Your New BookingId is created"});
            }
            else {
                return res.send({ Data: "Sorry! No Match Found" });
            }
        }
    
    });   
   //you will be given an array of persons(i.e an array of objects)..each person will have a {name:string,age:Number,votingStatus:true/false(Boolean)}take input in query param as votingAge..and for all the people above that age.change votingStatus as true also return an array consisting of only the person that can vote
   //WRITE A POST API TO THE ABOVE
   //take this as sample for array of persons:
   let persons=[{
    name:"PK",
    age:10,
    votingStatus:false,
   },
{
    name:"SK",
    age:20,
    votingStatus:false
},
{
    name:"AA",
    age:70,
    votingStatus:false
},
{
    name:"SC",
    age:5,
    votingStatus:false
},{
    name:"HO",
    age:40,
    votingStatus:false
}
] 
router.post('/persons', function (req, res){
     let VotingAge=req.query.VotingAge;
     let NewPerson=[];
     for(let i =0;i<persons.length;i++){
        let people=persons[i];
         if(people.age>VotingAge)
         {
            people.votingStatus=true;
            NewPerson.push(people);
        } 
    }
    return res.send({Data:NewPerson,status:true})
});
module.exports = router;
// adding this comment for no reason