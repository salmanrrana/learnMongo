const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber');

// watch for incoming request of method GET to the route
// http://localhost:3050/api

app.use(bodyParser.json())
routes(app);

module.exports = app;
