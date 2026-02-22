const express = require("express");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const newPostController =require("./controllers/newPost");
const homeController = require("./controllers/home");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const logoutController = require('./controllers/logout');
const loginUserController = require("./controllers/loginUser");
const validateMiddleWare =  require("./middleware/validationMiddleware");
const authMiddleware = require("./middleware/authMiddleware"); 
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');

mongoose.connect("mongodb://localhost:27017/my_database");

const port = 4000;
const app = express();

app.use(
  expressSession({
    secret: "Glory be to God",
    cookie: {
      maxAge: 4000000,
    },
    resave: false,
    saveUninitialized: false,
  }),
);

const customMiddleWare = (req, res, next) => {
    console.log("With use: Custom middle ware called")
    next()
}

global.loggedIn = null;
app.use((req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

app.use(customMiddleWare);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload());
app.set("view engine", "ejs");
app.use("/posts/store", validateMiddleWare);
app.get("/", homeController );
app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);
app.post("/users/register", redirectIfAuthenticatedMiddleware, storeUserController);
app.get("/post/:id", getPostController );
app.get('/auth/logout', logoutController);
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.post("/users/login", redirectIfAuthenticatedMiddleware, loginUserController);

app.get('/posts/new', authMiddleware, newPostController );
//Save your post in the database/ post create
app.post("/posts/store", authMiddleware, storePostController );
app.use((req, res) => res.render('notfound'));
app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});