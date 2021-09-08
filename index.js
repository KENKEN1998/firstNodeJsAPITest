var express = require('express');
var app = express();

var homeRouter = require('./app/routes/home.router');
var bookRouter = require('./app/routes/book.router');

app.use('/', homeRouter);
app.use('/', bookRouter);

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000");
});