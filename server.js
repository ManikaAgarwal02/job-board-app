const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/db");

const jobrouter = require("./routes/jobs");

// Connect Database
connectDB();

// EJS Setup
app.set("view engine", "ejs");

// Routes
app.use("/jobs", jobrouter);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});