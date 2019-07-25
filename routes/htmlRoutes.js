//DEPENDENCIES

var path = require("path");
//ROUTING

module.exports = function(app) {
//HTML GET REQUESTS
//A GET Route to /survey which should display the survey page.
app.get("/survey"), function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
};

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

};


