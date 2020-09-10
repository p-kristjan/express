// Use the installed package.
var express = require('express');

// Utilize Express.
var app = express();

// Port number variable.
var port = 1337;

// Listener for when a browser establishes a connection with the server.
app.listen(port, function(){
    console.log("Server running on port: " + port)
});

// When the browser sends a GET requrest.
app.get("/", function(req, res){
    res.send('Hi there.')
});

// Routes other than "/"
app.get("/contact", function(req, res){
    res.send('john.doe@mail.com')
});

app.get("/about", function(req, res){
    res.send('John Doe')
});