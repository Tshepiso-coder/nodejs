const express = require("express");
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");
const coursesController = require("./controllers/coursesController");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const router = express.Router();
const app = express();
mongoose.connect("mongodb://localhost:27017/recipe_db");
const db = mongoose.connection;
const methodOverride = require("method-override");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(layouts);
app.use(express.static('public'))

router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

app.use("/", router);
app.use(errorController.logErrors);

//====================================================
//            HOME ROUTE
//====================================================
router.get("/", homeController.displayHomePage);

//====================================================
//            COURSE ROUTERS
//====================================================

router.get("/courses", coursesController.showCourses);
router.get("courses/new", coursesController.new);
router.post("courses/create", coursesController.create, coursesController.redirectView)
router.get("/courses/:id", coursesController.show, coursesController.showCourses);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);

//====================================================
//            SUBSCRIBER ROUTERS
//====================================================

router.get("/subscribers", subscribersController.showsubscribers);
router.get("subscribers/new", subscribersController.new);
router.post("subscribers/create", subscribersController.create, subscribersController.redirectView)
router.get("/subscribers/:id", subscribersController.show, subscribersController.showsubscribers);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", coursesController.delete, coursesController.redirectView);

//======================================================
//              USER ROUTERS
//======================================================
router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.use(errorController.respondNoResourceFound);
router.use(errorController.respondInternalError);



app.listen(app.get("port"), ()=>{
    `Server listening on port ${app.get("port")}`
});
