/**
 *  Controller for the person 
 */

const person = require("../models/post");

// create and save a person 
exports.create = (req, res) => {
    // validate request 
    if (!req.body.content) {
        return res.status(400).send({
            message: "Person description cannot be empty"
        });
    }
    // create a person 
    const person = new person({
        firstName: req.boby.firstName,
        lastName: req.body.lastName,
        description: req.body.description,
        age: req.body.age
    })
        
    // save person 
    person.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured when creating person"
        });
    });
};

// Retrieve and return all people 
exports.findAll = (req, res) => {
    person.find()
    .then(persons => {
        res.send(persons);
    }).catch(err => {
        res.status.send(500).send({
            message: err.message || "Error occured"
        });
    });
}

exports.findOne = (req, res) => {
    person.findById(req.params.personId)
    .then(people => {
        if (!people) {
            return res.status(400).send({
                message: "Person could not be found"
            })
        }
    })
}

// update a person 
exports.update = (req, res) => {
    if 
}