const express = require("express");
// const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_database");

const port = 4000;
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/post", (req, res) => {
    res.render("post");
});


app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});