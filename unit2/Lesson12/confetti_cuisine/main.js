// Require express
const express = require("express");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

//Instantiate the express appliction
const app = express();

//Create a route for the home page
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static("public"));

//Set the application up to listen on 3000
app.get("/", (req, res) => {
// res.send("Welcome to Confetti Cuisine!");
res.render("index");
});


app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {console.log(`Server running at http://localhost:${app.get("port")}`);
});