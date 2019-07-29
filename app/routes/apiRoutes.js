//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var path = require("path");
var express = require("express");
var friends = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };
        console.log(req.body);

    //Taking user results from survey
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);
    
    //THIS WILL CALCULATE THE DIFFERENCE BETWEEN THE USER SCORES is calculate the difference betwenn the user scores and others in the database
    var totalDifference;

    //For loop to go through the list of friends
    for (var i = 0; i < friends.length; i++){
        var currentFriend = friends[i];
        console.log(friends[i]);
        totalDifference = 0;

        console.log("Current Friend,", currentFriend.name);

    //LOOP THROUGH ALL SCORES OF EACH FRIEND
        for (var j = 0; j < currentFriend.scores.length; j++){
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];

            totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

            if (totalDifference <= bestMatch.friendDiff){

                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = totalDifference;
            }

        }
        console.log(totalDifference);
        console.log(bestMatch.name);
        console.log(bestMatch.photo);
        console.log(bestMatch.friendDiff);

    }       //USER DATA IS SAVE TO DATABASE AFTER CHECKING SCORES
            friends.push(userData);

            //RETURN A JSON STRING WITH THE USER'S BESTMATCH.
            res.json(bestMatch);

    })
}