const BlogPost = require("../models/BlogPost");
const path = require("path");

module.exports = async (req, res) => {   
    let image = req.files.image;
    const imagePath = "/img/" + image.name;  
    req.body["image"] = imagePath;
    req.body["userid"] = req.session.userId;
    console.log(req.body);
    image.mv(path.resolve(__dirname,'./public/img',image.name),async (error)=>{ 
    await BlogPost.create(req.body);
    res.redirect("/")});
}