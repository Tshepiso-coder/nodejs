const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
const newPostController =require("./controllers/newPost");
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


app.get("/",  async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {blogposts});
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/post/:id", async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    console.log(`Single post: ${blogpost}`);
    
    res.render("post", {blogpost});
});

app.get('/posts/new', newPostController );

//Save your post in the database/ post create
app.post("/posts/store", async (req, res) => {
    req.body["username"] = "Tshepiso";    
    let image = req.files.image;
    const imagePath = "/img/" + image.name;  
    req.body["image"] = imagePath;
    console.log(req.body);
    image.mv(path.resolve(__dirname,'./public/img',image.name),async (error)=>{ 
    await BlogPost.create(req.body);
    res.redirect("/")});
});


app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
});