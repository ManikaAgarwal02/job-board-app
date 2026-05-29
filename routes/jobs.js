const express = require("express");
const job=require("../models/jobs");
const jobs = require("../models/jobs");

const router = express.Router();

router.get("/new", (req, res) => {
    console.log("new job");

    res.render("jobs/new");
});

router.post("/", async (req, res) => {
    const newJob= new job(req.body);
    await newJob.save();

  

    res.redirect("/jobs");
});
router.get("/", async (req, res) => {

    const jobs = await job.find();

    res.render("jobs/index", { jobs });
});

module.exports = router;