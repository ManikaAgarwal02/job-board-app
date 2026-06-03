const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobId: {
    type: Number,
    unique: true,
    required: true,
  },
  title: String,
  company: String,
  location: String,
  salary: Number,
  description: String,
});

module.exports = mongoose.model("Job", jobSchema);