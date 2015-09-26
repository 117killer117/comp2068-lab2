var http = require('http');

//require nodes url module to parse the urls querystring
var url = require('url');

//create the server to run the page
http.createServer(function (req, res) {

    //get the query string and parse the x and y as float
    var queryString = url.parse(req.url, true).query;

    var method = queryString.method;
    var x = parseFloat(queryString.x);
    var y = parseFloat(queryString.y);
    var output;

    //check the value of method and calculate x and y based on the opperation

    if (method == 'add') {
        output = x + ' + ' + y + ' = ' + (x + y);
    }
    else if (method == 'subtract') {
        output = x + ' - ' + y + ' = ' + (x - y);
    }
    else if (method == 'multiply') {
        output = x + ' * ' + y + ' = ' + (x * y);
    }
    else if (method == 'divide') {
        output = x + ' / ' + y + ' = ' + (x / y);
    }
    else {
        output = "Invalid input";
    }

    res.write(output);
    res.end();


}).listen(3000);

