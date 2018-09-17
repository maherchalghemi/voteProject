var express = require('express');
const bodyParser = require('body-parser')
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

const user = require('./Server/Models/user');
app.use('/user', user);

const vote = require('./Server/Models/vote');
app.use('/vote', vote);


app.listen(3000, err => { console.log("server listening on port 3000") });