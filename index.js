var express = require('express');
var app = express();

require('./app/routes/home.router')(app);
require('./app/routes/book.router')(app);

app.listen(3000, function () {
    console.log("Server listening on http://localhost:3000");
});