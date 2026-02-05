const port = 3000;
const express = require("express");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const subscribersController = require("./controllers/subscribersController");
const usersController = require("./controllers/usersController");
const coursesController = require("./controllers/coursesController");
const passport = require("passport");
const methodOverride = require("method-override");
// const expressValidator = require("express-validator");
const User = require("./models/user");
const passportLocalMongoose = require("passport-local-mongoose");
const router = express.Router();
const app = express();

const layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

const expressSession = require("express-session");
const connectFlash = require("connect-flash");

mongoose.connect("mongodb://localhost:27017/recipe_db");
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("view engine", "ejs");


app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use(layouts);
app.use(express.static("public"));

router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

router.use(
  expressSession({
    secret: "a_very_long_and_secure_secret_passcode",
    cookie: {
      maxAge: 4_000_000, //approx 1hr
    },
    resave: false,
    saveUninitialized: false,
  })
);

router.use(connectFlash());

router.use(passport.initialize());
router.use(passport.session());

router.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  res.locals.loggedIn = req.isAuthenticated(); // Passport method to check if user is logged in
  res.locals.currentUser = req.user; // The logged-in user object
  next();
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", router);

app.use(errorController.logErrors);



// ================================
          // HOME ROUTE
// ==================================
router.get("/", homeController.displayHomepage);
// router.get("/name/:myName", homeController.respondWithName);

// =================================
//              COURSES ROUTE
// =================================
router.get("/courses", coursesController.showCourses)
router.get("/courses/new", coursesController.new)
router.post("/courses/create", coursesController.create, coursesController.redirectView);
router.get("/courses/:id",coursesController.show, coursesController.showView);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete,  coursesController.redirectView);
router.get("/users/logout", usersController.logout, usersController.redirectView);
// =================================
//            SUBSCRIBER ROUTE
// =================================
router.get("/subscribers", subscribersController.showSubscribers);
router.get("/subscribers/new", subscribersController.new);
router.post(
  "/subscribers/create",
  subscribersController.create,
  subscribersController.redirectView,
);
router.get("/subscribers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put(
  "/subscribers/:id/update",
  subscribersController.update,
  subscribersController.redirectView,
);
router.delete(
  "/subscribers/:id/delete",
  subscribersController.delete,
  subscribersController.redirectView,
);

// =================================
//              USERS ROUTE
// =================================
router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate)
router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);

router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete(
  "/users/:id/delete",
  usersController.delete,
  usersController.redirectView,
);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);



app.listen(3000, ()=>{
    `Server listening on port ${app.get("port")}`
});
