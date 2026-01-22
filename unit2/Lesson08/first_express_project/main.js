const port = 3000;

//you require Express.js by referring to the module name 
//express and string it as a constant. express offers a library
// of methods and functionality
const express = require("express");

// We call the express() function which returns an object that 
// we store int the app referrence variable. The returned object 
// is known as an express application or  express instance. It will then have access to methods from
// express e.g. web server functionality methods from 
// 

const app = express();

app.get("/", (req, res) => {
    console.log("Params:", req.params);
    console.log("Body:", req.body);
    console.log("URL:", req.url);
    console.log("Query:", req.query);
    res.send("Hello, Root Route!");
  })

app.get("/users", (req, res) => {
    console.log("Params:", req.params);
    console.log("Body:", req.body);
    console.log("URL:", req.url);
    console.log("Query:", req.query);
    res.send("Hello, Users Route!");
  })


  app.get("/users/:dept", (req, res) => {
    console.log("Params:", req.params);
    console.log("Body:", req.body);
    console.log("URL:", req.url);
    console.log("Query:", req.query);
    res.send("Hello, Users Params Route!");
  })

.listen(port, () => {
  console.log(`The Express.js server has started and is listening
➥ on port number: ${port}`);
});