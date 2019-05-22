var userData = require('../data/friends.js')
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(userData);
  });

  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newfriend = req.body;

    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    var bestFriend = {
      name: '',
      photo: '',
      diff: 1000
    }

    for (var i=0; i<userData.length; i++) {
      var currentFriend = userData[i]
      var currentDiff = 0;
      for (var j=0; j<currentFriend.scores.length; j++) {
        currentDiff += Math.abs(parseInt(currentFriend.scores[j]) - parseInt(newfriend.scores[j]))
      }
      if (currentDiff < bestFriend.diff) {
        bestFriend.name = currentFriend.name;
        bestFriend.photo = currentFriend.photo;
        bestFriend.diff = currentDiff;
      }
    }
    
    userData.push(newfriend);

    res.json(bestFriend);
  });
}