

var friends = require("../data/friends");

module.exports = function (app) {
  //  GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  //  POST Requests
  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData);
    res.json(bestMatch);
  });
};
