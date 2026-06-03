const Job = require("../models/jobs");

module.exports.showJob = async (req, res) => {
   const job = await Job.findOne({
  jobId: Number(req.params.id),
});


    if (!job) {
        return res.status(404).send("Job not found");
    }

    res.render("jobs/show", { job });
};

module.exports.deleteJob = async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.redirect("/jobs");
};