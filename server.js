//DEPENDENCIES
var express = require("express");
var path = require("path");

//SET UP THE EXPRESS APP
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

//SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  