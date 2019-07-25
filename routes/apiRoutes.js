//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

var path = require("path");
var express = require("express");
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
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };
        console.log(req.body);

    //Taking user results from survey
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);
    
    //THIS WILL CALCULATE THE DIFFERENCE BETWEEN THE USER SCORES is calculate the difference betwenn the user scores and others in the database
    var totalDifference = 0;

    //For loop to go through the list of friends
    for (var i = 0; i < friends.length; i++){
        console.log(friends[i]);
        totalDifference = 0;

    //LOOP THROUGH ALL SCORES OF EACH FRIEND
        for (var j = 0; j < friends[i].scores[j]; j++){
            totalDifference == Math.abs[parseInt(userScores[j])+ parseInt(friends[i].scores[j])];

            if (totalDifference == bestMatch.friendDiff){

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiff = totalDifference;
            }

        }
    }       //USER DATA IS SAVE TO DATABASE AFTER CHECKING SCORES
            friends.push(userData);

            //RETURN A JSON STRING WITH THE USER'S BESTMATCH.
            res.json(bestMatch);

    })
}