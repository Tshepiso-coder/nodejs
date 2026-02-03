const subscribersController = require("./controllers/subscribersController");
const mongoose = require("mongoose");
const methodOverride = require("method-override") 
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
const router = express.Router()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(layouts)
app.set("view engine", "ejs");
const port = 3000;

app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

app.use("/",router);
// router.get("/", subscribersController.getHome);

// router.get("/subscribers", subscribersController.getAllSubscribers);

// router.get("/contact", subscribersController.getSubscriptionPage);

// router.post("/subscribe", subscribersController.saveSubscriber);
router.get("/subscribers", subscribersController.index, subscribersController.indexView);
router.get("/subscribers/new", subscribersController.new);
router.post("/subscribers/create", subscribersController.create, subscribersController.redirectView);
router.get("/subscribers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", subscribersController.delete, subscribersController.redirectView);

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});