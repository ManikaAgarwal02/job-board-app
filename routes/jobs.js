const express = require("express");

const router = express.Router();

router.get("/new", (req, res) => {
    console.log("new job");

    res.render("jobs/new");
});

router.post("/", (req, res) => {

    console.log(req.body);

    res.redirect("/jobs");
});
router.get("/", (req, res) => {

    res.render("jobs/index");
});

module.exports = router;