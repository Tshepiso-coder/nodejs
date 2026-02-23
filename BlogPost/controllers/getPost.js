const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id).populate("userid");
    console.log(`Single post: ${blogpost}`);    
    res.render("post", {blogpost});
}