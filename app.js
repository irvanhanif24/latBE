const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const postRoute = require('./routes/post');
const userRoute = require('./routes/user');

app.use(bodyParser.json());

app.use('',postRoute);
app.use('/user', userRoute);

module.exports = app;