const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost:27017/my_database");

// BlogPost.create({
//     title: "3r blog",
//     body: "This is my thirs blog"
//     }).then((error, blogpost) => {
//         console.log(blogpost);
//     });

// BlogPost.find({})
// .then((error, blogpost) => {
//     console.log(error, blogpost);
// });

// BlogPost.findById("699391b851aeaac6e4d8d605")
// .then((error, blogpost) => {
//     console.log(error, blogpost);
// });

// BlogPost.find({title:"my blog"})
// .then((error, blogpost) => {
//     console.log(error, blogpost);
// });

// BlogPost.find({title:/sec/})
// .then((error, blogpost) => {
//     console.log(error, blogpost);
// });

// const id = "699391b851aeaac6e4d8d605"
// BlogPost.findByIdAndUpdate(id, {
//     title: "Tshepiso blog"
// })
// .then((error, blogpost) => {
//     console.log(error, blogpost);
// });
const db = mongoose.connection;
db.once("open", () => {
    console.log("connection to db is successful")
});
const test = async () =>  {
const id = "6994dfd37f00039b755a7115";
try {
    await BlogPost.findByIdAndDelete(id, 
        {title: "UPDATED FILED"}, 
        {new:true});
    console.log(myPost )
} catch(error) {
    console.log(error);    
 }
}
test();