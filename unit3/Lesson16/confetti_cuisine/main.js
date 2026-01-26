const subscribersController = require("./controllers/subscribersController");
const mongoose = require("mongoose");
const layouts = require("express-ejs-layouts");
mongoose.connect(
"mongodb://localhost:27017/confetti_cuisine",
);

const db = mongoose.connection;
db.once("open", () => {
    console.log("connection to db is successful")
});
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(layouts)
app.set("view engine", "ejs");
const port = 3000;



app.get("/", subscribersController.getHome);

app.get("/subscribers", subscribersController.getAllSubscribers);

app.get("/contact", subscribersController.getSubscriptionPage);

app.post("/subscribe", subscribersController.saveSubscriber);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});