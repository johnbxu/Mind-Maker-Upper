"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });

  // Endpoint for getting the create-new-poll page
  router.get("/new", (req, res) => {
    res.render("../views/new_poll.ejs");
  });

  // Endpoint for admin access of poll
  router.get("/:id/admin", (req, res) => {
    res.render("../views/admin.ejs");
  });

  // Endpoint for creating a poll. Redir to polls/:id/admin if success
  router.post("/", (req, res) => {

    res.redirect("/:id/admin");
  });

  // Endpoint for getting the voting page
  router.get("/:id", (req, res) => {
    res.redirect("../views/vote.ejs");
  });

  // Endpoint for submitting the vote. Redir to /polls/:id/votes on success
  router.post("/:id", (req, res) => {

    res.redirect("/:id/votes")
  });

  // Endpoint for displaying the current votes status
  router.get("/:id/votes", (req, res) => {
    res.render("../views/vote_finished.ejs");

  });




  return router;
}
