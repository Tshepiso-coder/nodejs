const express = require("express");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
const mongoose = require("mongoose");
const newPostController =require("./controllers/newPost");
const homeController = require("./controllers/home");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const validateMiddleWare =  require("./middleware/validationMiddleware");
mongoose.connect("mongodb://localhost:27017/my_database");

const port = 4000;
const app = express();

const customMiddleWare = (req, res, next) => {
    console.log("With use: Custom middle ware called")
    next()
}

app.use(customMiddleWare);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload());
app.set("view engine", "ejs");
app.use("/posts/store", validateMiddleWare);
app.get("/", homeController );

app.get("/post/:id", getPostController );

app.get('/posts/new', newPostController );

//Save your post in the database/ post create
app.post("/posts/store", storePostController );

app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});