//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var friendData = require("..data/friends", function(req, res){
    res.json(friendData);
});

app.post("api/friends", function(req, res){
    res.send("Hello world");
});