const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// EJS Setup
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});