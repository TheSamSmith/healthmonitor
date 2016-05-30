var express = require('express');
var app = express();
var routes = require('./users.js');

app.use('/hi', routes);


module.exports = app;