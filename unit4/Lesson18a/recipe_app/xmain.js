const express = require("express");
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  {useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

const app = express();
const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number
});
//=====================================
//SUMMARY FROM Claude.ai

// This code connects to a MongoDB database and performs two basic operations:
// Database Connection:

// Connects to a MongoDB instance running locally on port 27017
// Uses a database named "recipe_db"

// Operations Performed:

// Insert Operation - Adds a new contact document to the "contacts" collection with 
// a name ("Freddie Mercury") and email ("fred@queen.com"), then logs the result to the console.
// Read Operation - Retrieves all documents from the "contacts" collection and logs them 
// as an array to the console.
//=====================================
// const MongoDB = require("mongodb").MongoClient,
// dbURL = "mongodb://localhost:27017",
// dbName = "recipe_db";

// MongoDB.connect(dbURL, (error, client) => {
// if (error) throw error;

// let db = client.db(dbName);

// db.collection("contacts")
//   .insertOne({
//     name: "Freddie Mercury",
//     email: "fred@queen.com"
//   }, (error, db) => {
// if (error) throw error;
//     console.log(db);
//   });

// db.collection("contacts")
//     .find()
//     .toArray((error, data) => {
// if (error) throw error;
// console.log(data);
//     });
// });


//************************** */


app.set("port", process.env.PORT || 3000);

app.get("/", homeController.sendHomeRoute);

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(layouts);

app.use(express.static("public"));

app.use(errorController.logErrors);

app.get("/name/:myName", homeController.respondWithName);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), ()=>{
    `Server listening on port ${app.get("port")}`
});

// Option 1
let subscriber1 = new Subscriber({
  name: "Jon Wexler",
  email: "jon@jonwexler.com"
});

subscriber1.save()
.then((savedDocument) => (

));

subscriber1.save((error, savedDocument) => {
if (error) console.log(error);
  console.log(savedDocument);
});

// Option 2
Subscriber.create(
  {
// Log saved data document.
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
  }, 
  function (error, savedDocument) {
if (error) console.log(error);
    console.log(savedDocument);
  }
);