//DEPENDENCIES
var express = require("express");
var path = require("path");

//SET UP THE EXPRESS APP
var app = express();

var PORT = process.env.PORT || 8080;

//SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  