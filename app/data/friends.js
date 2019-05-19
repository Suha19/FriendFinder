// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Star Wars friends (DATA)
// =============================================================
var friends = [{
        routeName: "jackSparrow",
        name: "Jack Sparrow",
        photo: "mmmm",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        routeName: "cinderella",
        name: "Cinderella",
        photo: "mmmm",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        routeName: "bugsBunny",
        name: "Bugs Bunny",
        hoto: "mmmm",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});