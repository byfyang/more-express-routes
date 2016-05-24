//requirements
var express = require ('express'),
	app = express();

var burgers=[
	"Hamburger", "Cheese Burger", "Dble Cheese Burger"
];

var tacos = [
	"Soft Taco","Crunchy Taco", "Super Taco"
];

//a "GET" request to "/" will run the function below
app.get("/", function(req, res){
	//send back the response: 'Hello World'
	res.send("Hello World");
});

app.get("/burgers", function(req, res){
	console.log("burgers");
	//send all the burgers(join)
	res.send(burgers.join(", "));
});

app.get("/tacos", function(req, res){
	console.log("tacos");
	//send all the tacos(join)
	res.send(tacos.join(", "));
});

// another example of some simple middleware
// call this function on every route with the param of 'name'
app.param('name', function(request, response, next) {
    // get name from params
  var name = request.params.name;
    // capitalize the name
  var capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    // set the value of the name to the capitalized version
  request.params.name = capitalizedName;
    // pass control to the next middleware function
  next();
});

app.get("/greet/:name", function (req, res) {
    res.send( "Hello, " + req.params.name );
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});

//start the server
app.listen(3000, function(){
	console.log("Go to localhost:3000/");
});