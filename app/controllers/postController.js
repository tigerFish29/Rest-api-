/**
 *  Controller for the person 
 */

const e = require("express");
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
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });
    }

    const id = req.params.id;
    person.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(400).send({
                message: `Cannot update person with id =   ${id}`
            }) 
        } else res.send({message: "person was updated successfully"})
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updatting person`
        })
    })
}

// delete 
exports.delete = (req, res) => {
    const id = req.params.id;
    person.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete person with id = ${id}`
            })
        } else{
            res.send({ message: `Person was successfully deleted!`})
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete!`
        })
    })
}