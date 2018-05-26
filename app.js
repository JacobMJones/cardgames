const express = require("express");
const bodyParser = require('body-parser');
const Mongo = require('mongodb');
const cookieSession = require('cookie-session');
const userfunctions = require('./userfunctions');
const app = express();
const MongoClient = Mongo.MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/data";
const PORT = process.env.PORT || 8080;
app.set('view engine', 'html');
let database;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieSession({
    name: 'session',
    keys: ["carsanddogs"],
}))
MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        throw err
    }
    database = db;

})

//ROUTES
app.post("/register", (req, res) => {
    console.log('in post registration');
    let name = req.body.register_name;
    let password = req.body.register_password;
    userfunctions.register(name, password, database);
    res.redirect('/track');
});

app.post("/login", (req, res) => {

    let name = req.body.login_name;
    let password = req.body.login_password;
    userfunctions.login(name, password, database, function(verified) {
        if (verified === true) {
            res.redirect('/track');
        } else {
            res.redirect('/');
        }
    });
});
app.get("/track", (req, res) => {
    res.sendFile('tracks.html', { root: '.' })
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});