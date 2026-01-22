const port = 3000;
const express = require("express");
const homeController = require("./controllers/homeController");
const app = express();

//Middleware
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
next();
});


app.use(
  express.urlencoded({
    extended: false,
  })
); 

app.use(express.json());

//Middleware
app.use((req, res, next) => {
  console.log(`second middleware`);
next();
});

app.get("/",(req, res) =>{
  res.send(`This is the root rout`);
});

app.get("/items/:vegetable", homeController.sendReqParam
);

app.post("/", homeController.sendPostReq );

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})