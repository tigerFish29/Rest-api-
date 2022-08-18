/**
 *  Post 
 */

const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema({
    firstName: String, 
    lastName: String, 
    description: String, 
    age: int
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PersonSchema);