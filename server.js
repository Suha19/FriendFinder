
// Dependencies
var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
 
// parse application/json
app.use(express.json())
 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts our server.
app.listen(PORT, function() {
  console.log("App listening on: http://localhost:" + PORT);
});
