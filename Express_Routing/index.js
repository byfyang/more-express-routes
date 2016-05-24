var express = require ('express');
var	app = express();


//////////////////////////////////////////////////
var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];


app.get("/taco/:index", function (req, res){
	var index = req.params.index;
	var selection = tacos[index] || "Sorry, not taco";
	res.send(selection);
});

app.get("/burgers/:index", function(req, res){
	var index = req.params.index;
	var selection = burgers[index] || "Sorry not burger";
	res.send(selection);
});

////////////////////////////////////////////////////
app.get("/color/:choice", function(req, res){
	var choice = req.params.choice;
	res.send("Your choice is: " + choice);
});

/////////////////////////////////////////////////////

var correct_number = 7;

app.get("/pickanumber/:number", function(req,res){
	var number = req.params.number;
	if (number ===correct_number){
		res.send("Nailed it!");
	}else if(number > correct_number){
		res.send("Too High!");
	}else{
		res.send("too low");
	}
	// console.log(typeof number);
	// if(number == 7){
	// 	console.log(number);
	// 	res.send("You picked " + number + "!");
	// }
});
















//start the server
app.listen(3000, function(){
	console.log("Go to localhost:3000/");
});