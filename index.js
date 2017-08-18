var express = require('express');
var path = require('path');
var phantomjs = require('phantomjs-prebuilt');
var childProcess = require('child_process');
var binPath = phantomjs.path;
const PORT = 8080;

var app = express();

app.get('/', function(req, res) {
    var url = req.query.url;
    console.log('Received request for url ' + url);

    var childArgs = [
        path.join('.', 'render.js'),
        url
    ];
    childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        if (!!stderr) {
            console.log('Error occurred when rendering page, message: ' + stderr);
            res.send({message: stderr, status: 404});
        } else {
            console.log('Successfully received rendered page.');
            res.send(stdout);
        }
    });
});

app.listen(PORT, function() {
   console.log('Listening on port ' + PORT + '...');
});