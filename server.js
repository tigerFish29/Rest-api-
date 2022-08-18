/**
 *  Main entry point for the applicaton
 * author: paul chabz 
 */

const express = require("express");
const bodyParser = require("body-parser");

// create express app 
const app = express(); 
// pass requests of content type 
app.use(bodyParser.urlencoded({
    extended: true
}));

// pass application json 
app.use(bodyParser.json());

// configure the database 
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

// connecting to database 
mongoose.connect(dbConfig.url, {useNewUrlParser: true})
        .then(() => {
            console.log("Now connected to the database");
        }).catch(err => {
            console.log("Could not connect to the db");
            process.exit();
        });


// define a route 
app.get("/", (req, res) => {
    res.json({"message": "Welcome to the application"})
});

// Require notes routes 



// listen for requests 
app.listen(4030, () => {
    console.log("Server is now listening on port 4030");
});