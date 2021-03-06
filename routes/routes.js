"use strict";
const Express = require("express");
const Router = Express.Router();
const db = require("../models/tasks");
const db1 = require("../models/users");

Router.post("/signup", (req, res) => {
  let user = new db1();
  user.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;
  user.save(err => {
    if (err) res.send(err);
    res.status(200).send({ success: true });
  });
});

Router.post("/signin", (req, res) => {
  db1.findOne({ email: req.body.email, password: req.body.password }, function(
    err,
    user
  ) {
    if (err) return next(err); //eslint-disable-line
    if (!user) return res.send("Not logged in!");
    return res.send("Logged In!");
  });
});

Router.post("/", (req, res) => {
  let task = new db();
  task.name = req.body.name;
  task.author = req.body.author;
  task.description = req.body.description;
  task.priority = req.body.priority;
  task.assigned = req.body.assigned;
  task.save(err => {
    if (err) res.send(err);
    res.status(200).send({ success: true });
  });
});

Router.get("/", (req, res) => {
  db.find((err, tasks) => {
    if (err) return res.send(err);
    return res.send(tasks);
  });
});

Router.put("/:id", (req, res) => {
  db.findById(req.params.id, (err, task) => {
    task.name = req.body.name;
    task.author = req.body.author;
    task.description = req.body.description;
    task.status = req.body.status;
    task.priority = req.body.priority;
    task.assigned = req.body.assigned;
    task.save(function(err) {
      if (err) {
        return res.send(err);
      }
      return res.json({ success: true });
    });
  });
});

Router.delete("/:id", (req, res) => {
  db
    .remove({
      _id: req.params.id
    })
    .then( () => {
      return res.send({ success: true });
    })
    .catch(err => { //eslint-disable-line
      return res.send({ success: false });
    });
});

module.exports = Router;
