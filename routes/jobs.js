const express = require("express");
const job=require("../models/jobs");
const jobsController = require("../controllers/jobs");

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
router.get("/:id", jobsController.showJob);
router.post("/:id/delete", jobsController.deleteJob);
router.get("/:id/edit", jobsController.renderEditForm);

router.get("/:id", jobsController.showJob);
router.put("/:id", jobsController.updateJob);
module.exports = router;