const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');//line no 11 request comes here.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);//whatever the request comes in the entry level will redirect to route.js

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});//this function get invoke
