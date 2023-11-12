// create web server
var express = require('express');
var app = express();
var port = 3000;

// import the comments module
var comments = require('./comments');

// use the comments module
app.use('/comments', comments);

// start the server
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});