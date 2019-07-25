//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var friends = require("../app/data/friends");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("api/friends", function(req, res){
        res.json(friends);
    })
}