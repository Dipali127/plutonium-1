const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');//line no 11 request redirect here.

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);//whatever the request comes in the entry level will redirect to route.js

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
    //if we change port no. from here so in that case you have to change port no.at the time of sending localhost request to server.
    //this function get invoke
