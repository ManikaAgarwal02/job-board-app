const Job = require("../models/jobs");
module.exports.showJob = async (req, res) => {
   const job = await Job.findById(req.params.id);

   if (!job) {
      return res.status(404).send("Job not found");
   }

   res.render("jobs/show", { job });
};
module.exports.deleteJob = async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.redirect("/jobs");
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;

    const job = await Job.findById(id);

    if (!job) {
        return res.send("Job not found");
    }

    res.render("jobs/edit.ejs", { job });
};

module.exports.updateJob = async (req, res) => {
    const { id } = req.params;

    await Job.findByIdAndUpdate(id, req.body.job);

    res.redirect(`/jobs/${id}`);
};