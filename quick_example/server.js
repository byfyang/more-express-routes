

var express = require('express');
var app = express();

var ejs = require('ejs');

var bodyParser = require('body-parser');
// bodyParser.urlencoded() returns a function that will be called later in the app.post() route
var parseUrlencoded = bodyParser.urlencoded({extended: false});

// store for cities in memory (as long as server is running)
var cities = [];

app.set('view engine', 'ejs');

app.get('/cities', function(req, res) {
    res.render(process.cwd() + '/cities', {cities: cities});
});

//passing multiple middleware functions to this router; executed sequentially
app.post('/cities', parseUrlencoded, function (request, response) {
  var city;
  var name = request.body.name;
  var description = request.body.description;
  city = { name: name, description: description};
  cities.push(city);
    // passing local variables to be used in EJS template
  response.render('cities', { cities: cities});
});

app.listen(3000, function() {
	console.log("There's free food on port 3000");
});
