
var friendsData = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
         
        var friendMatch = {
            name: "",
            photo:"",
            difference: 1000

        };

        var userData = req.body
        var userScore = userData.scores
        var totalDiff = 0
    });

    
};