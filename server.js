var express = require("express"),
	app = express(),
	port = process.env.PORT || 8000,
	mongoose = require("mongoose"),
	Task = require("./models/Model"), //created model loading here
	bodyParser = require("body-parser");
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb",
	{
		useMongoClient: true,
	}
); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/Routes"); //importing route
routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + " not found"});
});

console.log("todo list RESTful API server started on: " + port);
