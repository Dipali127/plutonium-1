const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
mongoose.connect("mongodb+srv://DipaliBohara:80761668@cluster0.4wyyohq.mongodb.net/test",{
      useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
//whenever,we send request to server using api,at first global middleware will run.
//whichever,api we run if there is global middleware then at first global middleware will run. 
app.use (function(req,res,next){
    console.log("Hi I am a GLOBAL middleware");
    next()
});
// const midGlb=function(req,res,next){
//     console.log("Hi I am a GLOBAL middleware");
//     next()
// }

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
