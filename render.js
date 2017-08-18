'use strict';

var page = require('webpage').create();
var system = require('system');
var url = system.args[1];

page.open(url, function(status) {
    if (status === 'success') {
        var result = page.evaluate(function() {
            return document.documentElement.innerHTML;
        });
        console.log(result);
    } else {
        console.error('Could not render page, error status: ' + status);
    }
    phantom.exit();
});


